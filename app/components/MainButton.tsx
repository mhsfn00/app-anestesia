import { MessageSquareWarning, ShieldPlus, Syringe } from "lucide-react-native";
import { Text, TouchableOpacity, View } from 'react-native';
import { colors } from "../constants/colors";

const icons = {
  syringe: Syringe,
  shield: ShieldPlus,
  messageSquare: MessageSquareWarning
}
type IconName = keyof typeof icons;

type MainButtonProps = {
    title: string;
    subTitle: string;
    color: keyof typeof colors;
    icon: IconName;
    onPress: () => void;
}

export default function MainButton({ title, subTitle, onPress, color, icon }: MainButtonProps) {
  const buttonColor = colors[color];
  const IconComponent = icons[icon];

  return (
    <TouchableOpacity 
      onPress={onPress}
      style={{ 
        backgroundColor: buttonColor
      }} 
      className="w-full m-2 py-6 flex-col items-center justify-center rounded-xl"
    >
      <View className="flex-row w-4/5">
        <IconComponent
          size={35}
          color={"white"}
        />
        <Text className='text-white align-middle text-2xl font-medium w-full pl-8'>
            {title}
        </Text>
      </View>
      <View className="w-4/5 mt-4">
        <Text className='text-white text-base text-justify'>
            {subTitle}
        </Text>
      </View>
    </TouchableOpacity>
  )
}
