import { useEffect, useState } from "react";
import Card from "../../components/headerInfoComponents/card";
import secondsToMinutes from "../../controllers/secondsToMinutes";



export default function minutes({ }) {
  const [time, setTime] = useState(0);

  function start() {
    const interval = setInterval(() => {
      setTime((time) => time + 1);
    }, 1000);
    return () => clearInterval(interval);
  }

  useEffect(() => {
    start();
  }, []);
  return <Card title="Time" content={secondsToMinutes(time)} />;
}
