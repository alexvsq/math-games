import PopUp from "../../../components/popUp"
import { useLocalSearchParams } from "expo-router";
import Data from '../../../database/gamesInfo.json'
import ConnectionDB from "../../../database/data";
import { useEffect, useState } from "react";

export default function GamePopUp() {
  const { game } = useLocalSearchParams();
  const [data, setData] = useState([]);

  const gameInfo = Data[game];

  async function getData() {
    try {
      const db = await ConnectionDB()
      const [rows] = await db.getAllAsync(`SELECT * FROM scores WHERE gameName = ?`, [game])
      setData(rows)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    getData()
  }, [])

  return (
    <PopUp title={gameInfo.title} description={gameInfo.description} userInfo={data} />
  );
}
