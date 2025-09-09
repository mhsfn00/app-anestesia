import { Href, router, useSegments } from "expo-router";
import { HouseIcon, Star, User } from "lucide-react-native";
import { Pressable, StyleSheet, Text, View } from "react-native";
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
    navigateTo: Href;
}

const handlePress = (goTo: Href) => {
    router.navigate(goTo);
}

export default function FooterButton({ title, icon, navigateTo }: FooterButtonProps) {
    const IconComponent = icons[icon];
    const segments = useSegments();
    const currentSegment = segments.length > 0 ? segments[segments.length - 1] : "home";
    const currentRoute = "/" + currentSegment;
    
    return (
        <Pressable 
            className="w-1/3 flex-col justify-center items-center"
            onPress={() => {handlePress(navigateTo)}}
        >
            <View
                style={[styles.default, currentRoute === navigateTo && styles.active]}
            >
                <IconComponent
                    size={26}
                    strokeWidth={2}
                    color={currentRoute === navigateTo ? "white" : "black"}
                />
            </View>
            <Text className="font-semibold">
                { title }
            </Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    default: {
        flexDirection: 'row',
        justifyContent: 'center',
        borderRadius: 50,
        backgroundColor: colors.backgroundDefault,
        marginVertical: 5,
        paddingVertical: 5,
        width: 60
    },

    active: {
        flexDirection: 'row',
        justifyContent: 'center',
        borderRadius: 50,
        backgroundColor: colors.bluePrimary,
        marginVertical: 5,
        paddingVertical: 5,
        width: 60
    },
})
