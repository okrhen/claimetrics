import React, { useEffect } from "react";
import { View, StyleSheet, Image } from "react-native";
import { Spinner } from "native-base";
import SafeContainer from "../../components/SafeContainer/SafeContainer";
import { ISplashScreenProps } from "../../interfaces/screens/SplashScreen";

const SplashScreen = ({ navigation }: ISplashScreenProps) => {
  useEffect(() => {
    if (navigation) {
      console.log(navigation);

      setTimeout(() => {
        return navigation.replace("Home");
      }, 1000);

      //   return clearTimeout(timeout);
    }
  }, []);

  return (
    <SafeContainer backgroundColor="red">
      <View style={styles.container}>
        <Image
          source={require("../../../assets/logo/aon-logo.png")}
          resizeMode="contain"
          style={styles.image}
        />
        <Spinner color="#fff" />
      </View>
    </SafeContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "50%",
  },
});

export default SplashScreen;
