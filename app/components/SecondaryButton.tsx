import { ArrowBigLeft, ArrowBigRight, Check, HeartPulse, PencilLine, Pill, PillBottle, X } from "lucide-react-native";
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { colors } from '../constants/colors';

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
    connotation: 'save' | 'cancel';
    customJustify?: "center";
    leftIcon?: IconName;
    rightNumber?: number;
    rightIcon?: IconName;
    onPress: () => void;
}

export default function SecondaryButton({ title, onPress, connotation, leftIcon, rightIcon, rightNumber, customJustify }: SecondaryButtonProps) {
  const LeftIconComponent =  leftIcon ? icons[leftIcon] : null;
  const RightIconComponent =  rightIcon ? icons[rightIcon] : null;

  return (
    <TouchableOpacity 
      onPress={onPress}
      style={[
        connotation == 'cancel' ? styles.buttonContainerCancel : styles.buttonContainerSave,
        { justifyContent: customJustify || 'space-between' }
      ]}
    >
      {LeftIconComponent && 
        <LeftIconComponent color={connotation == 'cancel' ? 'black' : 'white'} />
      }
      <Text style={connotation == 'cancel' ? styles.textContainerCancel : styles.textContainerSave}>{ title }</Text>
      {RightIconComponent && 
        <RightIconComponent color={connotation == 'cancel' ? 'black' : 'white'}/>
      }
      {rightNumber !== undefined && (
        <Text style={connotation == 'cancel' ? styles.textContainerCancel : styles.textContainerSave}>{rightNumber}</Text>
      )}
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  textContainerSave: {
    fontWeight: 'bold',
    fontSize: 14,
    color: 'white'
  },
  textContainerCancel: {
    fontWeight: 'bold',
    fontSize: 14,
    color: 'black'
  },
  buttonContainerSave: {
    marginVertical: 8,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 4,
    paddingHorizontal: 20,
    paddingVertical: 15,
    gap: 15,
    backgroundColor: colors.bluePrimary 
  },
  buttonContainerCancel: {
    marginVertical: 8,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 4,
    paddingHorizontal: 20,
    paddingVertical: 15,
    gap: 15,
    backgroundColor: 'white', 
    borderWidth: 1,
  }
});