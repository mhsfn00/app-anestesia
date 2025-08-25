import { router } from "expo-router";
import { Button, View } from "react-native";
import MainButton from "../components/MainButton";

export default function Index() {
  return (
    <View className="flex-1 justify-center items-center p-3">
        <MainButton title="Dosagem" onPress={() => router.navigate('/dosage')} />
        <Button title="Intoxicação" onPress={() => router.navigate('/intoxication')} />
    </View>
  );
}
