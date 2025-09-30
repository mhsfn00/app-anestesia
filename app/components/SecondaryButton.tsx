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
    leftIcon?: IconName;
    rightNumber?: number;
    rightIcon?: IconName;
    onPress: () => void;
}

export default function SecondaryButton({ title, onPress, color, leftIcon, rightIcon, rightNumber }: SecondaryButtonProps) {
  const buttonColor = colors[color];
  const LeftIconComponent =  leftIcon ? icons[leftIcon] : null;
  const RightIconComponent =  rightIcon ? icons[rightIcon] : null;

  return (
    <TouchableOpacity 
      onPress={onPress}
      style={{ 
        backgroundColor: buttonColor
      }} 
      className="my-2 flex-row items-center justify-between rounded-xl px-6 py-4 gap-6"
    >
      {LeftIconComponent && 
        <LeftIconComponent color={'white'} />
      }
      <Text className="text-white font-semibold">{ title }</Text>
      {RightIconComponent && 
        <RightIconComponent color='white' />
      }
      {rightNumber !== undefined && (
        <Text className="text-white font-semibold ml-2">{rightNumber}</Text>
      )}
    </TouchableOpacity>
  )
}
