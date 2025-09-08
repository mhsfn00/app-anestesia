import { router } from "expo-router";
import { View } from "react-native";
import MainButton from "../components/MainButton";
import NavigationFooter from "../components/NavigationFooter";

export default function Index() {
  return (
    <View className="flex-1 justify-between items-center p-3">
        <MainButton 
          title="Escolha de Medicamento e Cálculo de Dosagem" 
          color="bluePrimary"
          height={200}
          icon="syringe" 
          onPress={() => router.navigate('/dosage')} 
        />
        <MainButton 
          title="Sintomas de Intoxicação" 
          color="redPrimary" 
          height={200}
          icon="alert"
          onPress={() => router.navigate('/intoxication')} 
        />
        <NavigationFooter />
    </View>
  );
}
