import { View, Text, Pressable } from "react-native";
import { Link } from "expo-router";
export default function NetworkScreen() {
  return (
    <View>
      <Text>Welcome to Network</Text>
      <Link href="/network" asChild>
        <Pressable>
          <Text>Login</Text>
        </Pressable>
      </Link>
      <Link href="/register">Register</Link>
    </View>
  );
}
