import PopUp from "../../../components/popUpOver"
import { useLocalSearchParams } from "expo-router";
import Data from '../../../database/gamesInfo.json'
import ConnectionDB from "../../../database/data";
import { useEffect, useState } from "react";

export default function PopUpOver() {
    const { over } = useLocalSearchParams();
    const [data, setData] = useState([]);

    const gameInfo = Data[over];

    async function getData() {
        try {
            const db = await ConnectionDB()
            const [rows] = await db.getAllAsync(`SELECT * FROM scores WHERE gameName = ?`, [over])
            setData(rows)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        getData()
    }, [])

    return (
        <PopUp title="Game Over" userInfo={data} />
    );
}
