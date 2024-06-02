import { View, Text, Pressable, ScrollView } from 'react-native'
import CardGame from '../../components/cardGame';
import Title from '../../components/title';
import BackButton from '../../components/backButton';

export default function index() {
    return (
        <View className="flex-1 ">

            <BackButton />

            <Title />

            <ScrollView className=" flex-1 bg-gray1 rounded-[10px]">
                <CardGame />
                <CardGame />
                <CardGame />
                <CardGame />
                <CardGame />
                <CardGame />
                <CardGame />
                <CardGame />
                <CardGame />
                <CardGame />
                <CardGame />
                <CardGame />
                <CardGame />


            </ScrollView>
        </View>
    )
}
