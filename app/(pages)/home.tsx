import { router } from "expo-router";
import { View } from "react-native";
import MainButton from "../components/MainButton";

export default function Index() {
  return (
    <View className="flex-1 justify-center items-center p-3">
        <MainButton 
          title="Anestesia Local" 
          subTitle="Desejo realizar uma anestesia local - Cálculo de dose e ajustes"
          color="bluePrimary"
          icon="syringe" 
          onPress={() => router.navigate('/anesthInformation')} 
        />
        <MainButton 
          title="Sugestões Técnicas" 
          subTitle="Desejo sugestão de técnica para infiltração de anestésico local"
          color="bluePrimary"
          icon="messageSquare" 
          onPress={() => router.navigate('/suggestions')}
        />
        <MainButton 
          title="Sintomas de Intoxicação" 
          subTitle="Desejo checar sintomas de intoxicação por anestésicos locais"
          color="bluePrimary"
          icon="shield" 
          onPress={() => router.navigate('/intoxication')} 
        />
    </View>
  );
}
