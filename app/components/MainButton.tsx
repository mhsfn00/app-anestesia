import { Syringe } from "lucide-react-native";
import { Text, TouchableOpacity, View } from 'react-native';
import { BLUE_PRIMARY } from "../constants/colors";

type MainButtonProps = {
    title: string;
    onPress: () => void;
}

export default function MainButton({ title, onPress }: MainButtonProps) {
  return (
    <TouchableOpacity className='bg-bluePrimary w-full m-3 h-48 flex-row items-center justify-center'>
        <View className="bg-white rounded-full p-5">
            <Syringe color={BLUE_PRIMARY} />
        </View>
        <Text className='p-10 text-2xl text-white text-center'>
            {title}
        </Text>
    </TouchableOpacity>
  )
}
