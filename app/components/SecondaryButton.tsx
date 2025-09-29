import { ArrowBigLeft, ArrowBigRight, Check, HeartPulse, PencilLine, Pill, PillBottle, X } from "lucide-react-native";
import { Text, TouchableOpacity } from 'react-native';
import { colors } from "../constants/colors";

const icons = {
  pillBottle: PillBottle,
  heartPulse: HeartPulse,
  check: Check,
  arrowLeft: ArrowBigLeft,
  arrowRight: ArrowBigRight,
  x: X,
  pill: Pill,
  pencil: PencilLine
}
type IconName = keyof typeof icons;

type SecondaryButtonProps = {
    title: string;
    color: keyof typeof colors;
    leftIcon: IconName;
    rightNumber?: number;
    onPress: () => void;
}

export default function SecondaryButton({ title, onPress, color, leftIcon, rightNumber }: SecondaryButtonProps) {
  const buttonColor = colors[color];
  const LeftIconComponent =  icons[leftIcon];

  return (
    <TouchableOpacity 
      onPress={onPress}
      style={{ 
        backgroundColor: buttonColor
      }} 
      className="w-full my-2 flex-row items-center justify-between rounded-xl p-5"
    >
      <LeftIconComponent 
        color={'white'}
        className="bg-green-500"
      />
      <Text className="text-white font-semibold">{ title }</Text>
      <Text className="text-white font-semibold text-xl">{ rightNumber }</Text>
    </TouchableOpacity>
  )
}
