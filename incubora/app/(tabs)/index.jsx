import {
  Image,
  StyleSheet,
  Text,
  Platform,
  View,
  Pressable,
} from "react-native";
import { Link } from "expo-router";

import HomeNavigation from "@/components/HomeNavigation";
export default function HomeScreen() {
  return (
    <View>
      <HomeNavigation />
      <Text>Welcome to Incubora</Text>
      <Link href="/login" asChild>
        <Pressable>
          <Text>Login</Text>
        </Pressable>
      </Link>
      <Link href="/register">Register</Link>
    </View>
  );
}
