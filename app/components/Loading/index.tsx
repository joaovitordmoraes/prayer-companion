import { ActivityIndicator, View } from "react-native";

export function Loading() {
  return (
    <View>
      <ActivityIndicator size="large" color="#ffffff" />
    </View>
  );
}