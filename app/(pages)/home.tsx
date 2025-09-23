import { router } from "expo-router";
import { View } from "react-native";
import MainButton from "../components/MainButton";

export default function Index() {
  return (
    <View className="flex-1 justify-between items-center p-3">
        <MainButton 
          title="Anestesia Local" 
          subTitle="Desejo realizar uma anestesia local - Cálculo de dose e ajustes"
          color="bluePrimary"
          height={150}
          icon="syringe" 
          onPress={() => router.navigate('/dosage')} 
        />
    </View>
  );
}
