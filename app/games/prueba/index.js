import ConnectionDB from '../../../database/data'
import { Text } from 'react-native'
import { useEffect, useState } from 'react'

export default function Prueba() {
    const [data, setData] = useState([]);


    async function getData() {
        try {
            const db = await ConnectionDB()
            //const res = await db.runAsync(`DELETE FROM scores WHERE gameName = ?`, ['timer']);
            const res = await db.getAllAsync('SELECT * FROM scores');
            console.log(res)
        } catch (error) {
            console.log(error)
        }
    }
    async function deleteData() {
        try {
            const db = await ConnectionDB()
            const res = await db.runAsync(`DELETE FROM scores WHERE gameName = ?`, ['timer']);
            //const res = await db.getAllAsync('SELECT * FROM scores');
            console.log(res)
        } catch (error) {
            console.log(error)
        }
    }


    return (<>
        <Text
            className="text-white text-2xl"
            onPress={() => getData()}> Mostrar </Text>

        <Text
            className="text-white text-2xl"
            onPress={() => deleteData()}> Borrar </Text>
    </>);
}