import React from "react";
import { Text, View, Button, StyleSheet, Pressable } from "react-native";
import { Link } from "expo-router";
export default function IndexScreen() {
  return (
    <View style={styles.welcome}>
      <View>
        <Text style={styles.welcomeText}>Incubora</Text>
        <Text style="">India Largest</Text>
        <Text>Startup Community</Text>
      </View>

      <View>
        <Link style={styles.loginLink} href="/login" asChild>
          <Pressable style={styles.loginLinkButton}>
            <Text style={styles.loginLinkButtonText}>Connect To Incubora</Text>
          </Pressable>
        </Link>
      </View>
    </View>
  );
}
const styles = new StyleSheet.create({
  welcome: {
    fontSize: 20,
    margin: 10,
  },
  welcomeText: {
    fontSize: 18,
    color: "gray",
  },
  loginLink: {
    width: "",
  },
  loginLinkButton: {
    color: "white",
    width: "90%",
    height: 40,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "blue",
    textDecorationLine: "underline",
  },
  loginLinkButtonText: {
    color: "white",
    fontSize: 15,
  },
});
