import { Stack, useSegments } from "expo-router";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const routeTitles: Record<string, string> = {
    index: "Início",
    dosage: "Dosagem",
    intoxication: "Intoxicação"
}

export default function PagesLayout() {
    const segments = useSegments();
    const routeKey = segments[segments.length -1] || "index";
    const title = routeTitles[routeKey] || "Início";

    return (
        <SafeAreaView className="flex-1">
            <View className="items-center">
                <Text className="text-2xl p-5">
                    {title}
                </Text>
            </View>
            <Stack screenOptions={{ headerShown: false }} />
        </SafeAreaView>
    )
}