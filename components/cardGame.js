import { View, Text, Pressable } from 'react-native'
import { router } from 'expo-router'

export default function cardGame() {
    return (
        <>
            <View className=" flex flex-row items-center justify-between py-3 px-3">
                <View className=" flex flex-row items-center gap-3">
                    <View className=" w-[50px] h-[50px] bg-green rounded-full">

                    </View>
                    <View >
                        <Text className=" text-green text-xs">Timer</Text>
                        <Text className=" text-white text-xl font-bold">Timer</Text>
                        <Text className=" text-grayText text-xs">Pt. 500</Text>
                    </View>
                </View>
                <Pressable
                    onPress={() => router.push('/games/timer')}
                >
                    <Text className=" bg-green px-8 py-1 rounded-full font-bold">Play</Text>
                </Pressable>
            </View>
            <View className="h-[1px] w-full bg-grayLines">
            </View>
        </>
    )
}