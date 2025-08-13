import { router } from "expo-router";
import { Button, Text, View } from "react-native";

export default function Index() {
  return (
    <View className="flex-1 justify-center items-center">
      <Text className="text-4xl text-primary mb-20">
          App-Anestesia
      </Text>
      <View className="mb-5">
        <Button  title="Dosagem" onPress={() => router.navigate('/dosage')} />
      </View>
      <View className="mb-5">
        <Button title="Intoxicação" onPress={() => router.navigate('/intoxication')} />
      </View>
    </View>
  );
}
