import { ArrowBigLeft, ArrowBigRight, Check, HeartPulse, PencilLine, Pill, PillBottle, X } from "lucide-react-native";
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
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
    customJustify?: "center";
    leftIcon?: IconName;
    rightNumber?: number;
    rightIcon?: IconName;
    onPress: () => void;
}

export default function SecondaryButton({ title, onPress, color, leftIcon, rightIcon, rightNumber, customJustify }: SecondaryButtonProps) {
  const buttonColor = colors[color];
  const LeftIconComponent =  leftIcon ? icons[leftIcon] : null;
  const RightIconComponent =  rightIcon ? icons[rightIcon] : null;

  return (
    <TouchableOpacity 
      onPress={onPress}
      style={[
        styles.buttonContainer, 
        { backgroundColor: buttonColor, justifyContent: customJustify || 'space-between' },
        { borderWidth: color=='redPrimary' ? 1 : 0}
      ]}
    >
      {LeftIconComponent && 
        <LeftIconComponent color={color=='bluePrimary' ? 'white' : 'black'} />
      }
      <Text style={[styles.textContainer, {color: color=='bluePrimary' ? 'white' : 'black'}]}>{ title }</Text>
      {RightIconComponent && 
        <RightIconComponent color={color=='bluePrimary' ? 'white' : 'black'} />
      }
      {rightNumber !== undefined && (
        <Text style={styles.textContainer}>{rightNumber}</Text>
      )}
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  textContainer: {
    fontWeight: 'bold',
    fontSize: 14
  },
  buttonContainer: {
    marginVertical: 8,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 4,
    paddingHorizontal: 20,
    paddingVertical: 15,
    gap: 15 
  }
});