import { View } from "react-native";
import FooterButton from "./FooterButton";

export default function NavigationFooter() {
  return (
    <View className="flex-row justify-center items-center">
        <FooterButton 
            title="Label"
            icon="star"
            onPress={() => {}}
        />
        <FooterButton 
            title="Início"
            icon="home"
            onPress={() => {}}
        />
        <FooterButton 
            title="Perfil"
            icon="user"
            onPress={() => {}}
        />
    </View>
  );
}
