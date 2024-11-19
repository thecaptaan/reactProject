import { StatusBar } from "expo-status-bar";
import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
export default function SettingsScreen() {
  const settingMenuData = [
    {
      name: "Security",
    },
    {
      name: "Notification",
    },
    {
      name: "Data and Reports",
    },
    {
      name: "Connected Apps",
    },
    {
      name: "Billing",
    },
    {
      name: "Technical Support",
    },
    {
      name: "Logout",
    },
  ];
  return (
    <View>
      {settingMenuData.map((setting, index) => {
        return <Text key={index}>{setting.name}</Text>;
      })}
    </View>
  );
}

const styles = StyleSheet.create({});
