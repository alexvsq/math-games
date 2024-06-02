import { View, Text } from 'react-native'
import { Link } from "expo-router"

export default function about() {
    return (
        <View>
            <Text className=" font-bold text-white" >about</Text>
            <Link href="/" className="text-white">Home</Link>
        </View>
    )
}