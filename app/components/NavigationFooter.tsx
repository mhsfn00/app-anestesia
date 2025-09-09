import { View } from "react-native";
import FooterButton from "./FooterButton";

export default function NavigationFooter() {
  return (
    <View className="flex-row justify-center items-center">
        <FooterButton 
            title="Início"
            icon="home"
            navigateTo="/home"
        />
        <FooterButton 
            title="Perfil"
            icon="user"
            navigateTo="/intoxication"
        />
    </View>
  );
}
