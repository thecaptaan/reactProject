import { Text, View, Pressable } from "react-native";
import { Link } from "expo-router";
export default function HireScreen() {
  return (
    <View>
      <Text>Welcome to Hire</Text>
      <Link href="/hire" asChild>
        <Pressable>
          <Text>Login</Text>
        </Pressable>
      </Link>
      <Link href="/register">Register</Link>
    </View>
  );
}
