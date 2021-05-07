import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Spinner } from "native-base";

const SplashScreen = () => (
  <SafeAreaView style={styles.safeContainer}>
    <View style={styles.container}>
      <Image
        source={require("../../../assets/logo/aon-logo.png")}
        resizeMode="contain"
        style={styles.image}
      />
      <Spinner color="#fff" />
    </View>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  safeContainer: {
    display: "flex",
    flex: 1,
    backgroundColor: "#e11c23",
  },
  container: {
    display: "flex",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "50%",
    // height: 60,
  },
});

export default SplashScreen;
