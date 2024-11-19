import React from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Entypo from "@expo/vector-icons/Entypo";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";

import {
  Text,
  View,
  Dimensions,
  StyleSheet,
  Pressable,
  Button,
  TouchableWithoutFeedback,
} from "react-native";
import { Link } from "expo-router";
import { useState } from "react";

export default function HomeNavigation() {
  const sideBarNavData = [
    {
      title: "Courses",
      link: "/courses",
      iconTheme: Entypo,
      iconName: "video",
    },
    {
      title: "Premium",
      link: "/premium",
      iconTheme: FontAwesome5,
      iconName: "crown",
    },
    {
      title: "Services",
      link: "/services",
      iconTheme: FontAwesome5,
      iconName: "tools",
    },
    {
      title: "Settings",
      link: "/settings",
      iconTheme: FontAwesome,
      iconName: "cog",
    },
  ];
  const [showSideDrawer, setShowSideDrawer] = useState(false);
  const toggleSideDrawer = () => {
    setShowSideDrawer(!showSideDrawer);
  };
  const screenHeight = Dimensions.get("window").height;

  return (
    <View style={styles.navigation}>
      <Pressable onPress={toggleSideDrawer}>
        <FontAwesome name="user" size={26} color="black" />
      </Pressable>
      <View>
        <Text>INCUBORA</Text>
      </View>
      <View>
        <Link href="/message">
          <AntDesign name="message1" size={26} color="black" />
        </Link>
      </View>

      {/* Side Drawer */}
      {showSideDrawer && (
        <Pressable
          style={[styles.overlay, { height: screenHeight }]}
          onPress={toggleSideDrawer}
        >
          <View
            style={[
              styles.sideDrawer,
              {
                height: screenHeight,
                display: showSideDrawer ? "flex" : "none",
              },
            ]}
          >
            <View>
              <Link href="/profile" style={styles.drawerProfile}>
                <View></View>
                <View>
                  <Text>Ayush Anand</Text>
                  <Text>thecaptaan@gmail.com</Text>
                </View>
              </Link>
              {sideBarNavData.map((navItem) => (
                <Link
                  style={styles.drawerMenuItem}
                  key={navItem.title}
                  href={navItem.link}
                >
                  <Pressable style={styles.drawerMenuItemPressable}>
                    <navItem.iconTheme
                      name={navItem.iconName}
                      size={24}
                      color="black"
                    />
                    <Text style={styles.drawerMenuItemText}>
                      {navItem.title}
                    </Text>
                  </Pressable>
                </Link>
              ))}
            </View>
          </View>
        </Pressable>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  navigation: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    width: "100%",
    height: 60,
    backgroundColor: "white",
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
  },
  overlay: {
    width: "100%",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1, // Places overlay above other components
  },
  sideDrawer: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "70%",
    backgroundColor: "#fff",
    zIndex: 3,
  },
  drawerProfile: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
  },
  drawerMenuItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
  drawerMenuItemPressable: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  drawerMenuItemText: {
    fontSize: 16,
    marginLeft: 10,
  },
});
