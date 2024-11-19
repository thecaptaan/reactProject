import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import { useState } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import 'react-native-reanimated';
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import { Slot } from 'expo-router';
// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const router = useRouter();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });
  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }

  }, [loaded]);

  if (!loaded) {
    return null;
  }

  // if (isAuthenticated) {
  return (<Slot />

    // <SafeAreaProvider>
    // <SafeAreaView>
    // <Stack>
    //   <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    //   <Stack.Screen name="services" options={{ title: "Services", headerShown: true }} />
    //   <Stack.Screen name="settings" options={{ title: "Settings", headerShown: true }} />
    //   <Stack.Screen name="+not-found" />
    //   <StatusBar style="auto" />
    // </Stack>
    // </SafeAreaView>
    // </SafeAreaProvider>
  )
  // }
  // else {
  // return (
  //   <SafeAreaProvider>
  //     <SafeAreaView>
  //       <Stack>
  //         <Stack.Screen name="index" options={{ headerShown: false }} />
  //         <Stack.Screen name="login" options={{ headerShown: false }} />
  //         <Stack.Screen name="register" options={{ headerShown: false }} />
  //         <StatusBar style="auto" />
  //       </Stack>
  //     </SafeAreaView>
  //   </SafeAreaProvider>
  // );
  // }
}
