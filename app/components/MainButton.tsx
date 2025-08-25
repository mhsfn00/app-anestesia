import { AlertTriangle, Syringe } from "lucide-react-native";
import { Text, TouchableOpacity, View } from 'react-native';
import { colors } from "../constants/colors";

const icons = {
  syringe: Syringe,
  alert: AlertTriangle
}
type IconName = keyof typeof icons;

type MainButtonProps = {
    title: string;
    color: keyof typeof colors;
    icon: IconName;
    onPress: () => void;
}

export default function MainButton({ title, onPress, color, icon }: MainButtonProps) {
  const buttonColor = colors[color];
  const IconComponent = icons[icon];

  return (
    <TouchableOpacity 
      onPress={onPress}
      style={{ backgroundColor: buttonColor }} 
      className="w-full m-3 h-48 flex-row items-center justify-center"
    >
        <View className="bg-white rounded-full p-5">
            <IconComponent 
              size={40} 
              color={buttonColor} 
            />
        </View>
        <Text className='p-10 text-2xl text-white text-center'>
            {title}
        </Text>
    </TouchableOpacity>
  )
}
