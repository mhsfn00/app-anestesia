import { Stack, useSegments } from "expo-router";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import NavigationFooter from "../components/NavigationFooter";
import { colors } from "../constants/colors";

const routeTitles: Record<string, string> = {
    home: "SafeBlock-PA",
    dosage: "Dosagem",
    intoxication: "Intoxicação"
}

export default function PagesLayout() {
    const segments = useSegments();
    const routeKey = segments[segments.length -1] || "home";
    const title = routeTitles[routeKey] || "SafeBlock-PA";

    return (
        <SafeAreaView className="flex-1">
            <View className="items-center">
                <Text className="text-2xl p-5">
                    {title}
                </Text>
            </View>
            <Stack screenOptions={{ 
                headerShown: false,
                contentStyle: { backgroundColor: colors.backgroundDefault }
            }} 
            />
            <NavigationFooter />
        </SafeAreaView>
    )
}