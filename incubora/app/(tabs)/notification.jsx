import {
  Image,
  StyleSheet,
  Text,
  Platform,
  View,
  Pressable,
} from "react-native";
import { Link } from "expo-router";

export default function NotificationScreen() {
  return (
    <View>
      <Text>Welcome to Notification</Text>
      <Link href="/notification" asChild>
        <Pressable>
          <Text>Login</Text>
        </Pressable>
      </Link>
      <Link href="/register">Register</Link>
    </View>
  );
}

const styles = StyleSheet.create({});
