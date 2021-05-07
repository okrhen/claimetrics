import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";
import { SplashScreen } from "./src/screens";
import AppNavigation from "./src/navigation/AppNavigation";

export default function App() {
  const [isAppReady, setIsAppReady] = useState<boolean>(false);

  useEffect(() => {
    Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      ...Ionicons.font,
    });

    return setIsAppReady(true);
  }, []);

  if (isAppReady) {
    return (
      <>
        <StatusBar style="dark" />
        <AppNavigation />
      </>
    );
  }

  return <SplashScreen />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
