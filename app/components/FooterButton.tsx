import { HouseIcon, Star, User } from "lucide-react-native";
// Star, User
import { StyleSheet, Text, View } from "react-native";
import { colors } from "../constants/colors";

const icons = {
    home: HouseIcon,
    user: User,
    star: Star
}
type IconName = keyof typeof icons;

type FooterButtonProps = {
    title: string;
    icon: IconName;
    onPress: () => void;
}

export default function FooterButton({ title, icon, onPress }: FooterButtonProps) {
    const IconComponent = icons[icon];

    return (
        <View className="w-1/3 flex-col justify-center items-center">
            <View
                className="w-3/5 my-1 py-2 flex-row justify-center rounded-l-full rounded-r-full"
                style={style.active} 
            >
                <IconComponent 
                    size={26}
                    strokeWidth={2}
                    color={"white"}
                />
            </View>
            <Text className="font-semibold">
                { title }
            </Text>
        </View>
    );
}

const style = StyleSheet.create({
    active: {
        backgroundColor: colors.bluePrimary,
        color: "white"
    }
})
