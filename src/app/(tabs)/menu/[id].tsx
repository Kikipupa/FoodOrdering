import { Stack, useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";
const ProductDetailsScreen = () => {
  const { id } = useLocalSearchParams();
  return (
    <View>
      <Stack.Screen options={{ title: "Details" }} />
      <Text>This is product details for: {id}</Text>
    </View>
  );
};

export default ProductDetailsScreen;
