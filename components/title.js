import { View, Text } from 'react-native'
import { Image } from 'expo-image';

export default function title() {
    return (
        <View className="flex flex-row justify-center items-center gap-5 mt-2 mb-10">
            <Image
                className="w-[30px] h-[30px]"
                source={require('../assets/images/triangle.png')}
                placeholder={'triangle'}
                contentFit="contain"
            />
            <Text className="text-4xl font-bold text-white">Games</Text>
            <Image
                className="w-[30px] h-[30px] rotate-180"
                source={require('../assets/images/triangle.png')}
                placeholder={'triangle'}
                contentFit="contain"
            />
        </View>
    )
}