import { router } from "expo-router";
import { View } from "react-native";
import MainButton from "../components/MainButton";

export default function Index() {
  return (
    <View className="flex-1 justify-center items-center p-3">
        <MainButton 
          title="Dosagem" 
          color="bluePrimary"
          icon="syringe" 
          onPress={() => router.navigate('/dosage')} />
        <MainButton 
          title="Intoxicação" 
          color="redPrimary" 
          icon="alert"
          onPress={() => router.navigate('/intoxication')} />
    </View>
  );
}
