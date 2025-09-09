import { Stack } from "expo-router";
import { colors } from "./constants/colors";
import "./globals.css";

export default function RootLayout() {
  return <Stack>
    <Stack.Screen 
      name="(pages)"
      options={{ 
        headerShown: false,
        contentStyle: { backgroundColor: colors.backgroundDefault }
       }}
    />
  </Stack>;
}
