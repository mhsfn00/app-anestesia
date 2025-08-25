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
    height: number;
    icon: IconName;
    onPress: () => void;
}

export default function MainButton({ title, onPress, color, icon, height }: MainButtonProps) {
  const buttonColor = colors[color];
  const IconComponent = icons[icon];

  return (
    <TouchableOpacity 
      onPress={onPress}
      style={{ 
        backgroundColor: buttonColor,
        height: height
      }} 
      className="w-full m-2 flex-row items-center justify-center rounded-xl shadow-md shadow-black"
    >
        <View className="w-1/3 flex-row justify-center">
          <View className="bg-white rounded-full p-5 flex-row">
              <IconComponent
                size={60}
                color={buttonColor}
              />
          </View>
        </View>
        <View className="w-2/3">
          <Text className='p-10 text-xl text-white text-center'>
              {title}
          </Text>
        </View>
    </TouchableOpacity>
  )
}
