import { useState, useEffect } from "react";
import { View } from "react-native";
import Keyboard from "../../../components/keyboard";
import Display from "../../../modules/timer/display";
import BarTimer from "../../../modules/timer/barTimeModule";
import { randomEquation } from "../../../controllers/randomEquation";
import Minutes from "../../../modules/timer/minutes";
import Level from "../../../modules/timer/level";
import Points from "../../../modules/timer/points";
import { saveInfoGameOver } from '../../../controllers/saveInfoGameOver'

export default function index() {
  const [inputKeyboard, setInputKeyboard] = useState("");
  const [problem, setProblem] = useState([]);
  const [level, setLevel] = useState(5);
  const [durationRes, setDurationRes] = useState(0);
  const [points, setPoints] = useState(0);
  const [startGame, setStartGame] = useState(0)

  useEffect(() => {
    const problem = randomEquation(level, level, level > 45 ? "medium" : "easy")
    setProblem(problem);
    const durationInit = Date.now();
    setDurationRes(durationInit);
    setStartGame(Date.now())
  }, []);

  function actionBtnKeyboard(x) {
    if (x.id === "enter") {
      checkAnswer();
    } else if (x.id === "delete") {
      setInputKeyboard(inputKeyboard.slice(0, -1));
    } else {
      setInputKeyboard(inputKeyboard + x.value);
    }
  }

  function checkAnswer() {
    if (inputKeyboard == problem.result) {
      setInputKeyboard("");
      const newProblem = randomEquation(level, level, level > 45 ? "medium" : "easy");
      setProblem(newProblem);
      setLevel((prev) => prev + 2);
      const finalDuration = Math.floor((Date.now() - durationRes) / 1000);
      setPoints(
        (prev) => prev + (50 - finalDuration < 0 ? 0 : 50 - finalDuration)
      );
      setDurationRes(Date.now());
    }
  }

  const saveDataGameOver = () => {
    const newTime = Date.now()
    const newDuration = Math.floor((newTime - startGame) / 1000)
    console.log(newDuration)
    saveInfoGameOver({
      gameName: "timer",
      level: Math.floor(level / 5),
      points: points,
      duration: newDuration
    })
  }

  return (
    <View className="flex flex-1 justify-between">
      <View className="flex flex-row gap-3">
        <View style={{ flex: 1 }}>
          <Level content={Math.floor(level / 5)} />
        </View>
        <View style={{ flex: 1 }}>
          <Points points={points} />
        </View>
        <View style={{ flex: 1 }}>
          <Minutes />
        </View>
      </View>
      <View>
        <Display problem={problem} inputKeyboard={inputKeyboard} />

        <BarTimer restart={level} gameOverSave={saveDataGameOver} />
      </View>
      <Keyboard action={actionBtnKeyboard} />
    </View>
  );
}
