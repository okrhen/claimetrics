import React from "react";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { ISafeContainerProps } from "../../interfaces/components/SafeContainer";
import { colors } from "../../styles/theme";

const SafeContainer = ({ children, backgroundColor }: ISafeContainerProps) => (
  <SafeAreaView
    style={[
      styles.safeContainer,
      backgroundColor === "red" ? styles.bgRed : null,
    ]}
  >
    {children}
  </SafeAreaView>
);

SafeContainer.defaultProps = {
  backgroundColor: "default",
};

const styles = StyleSheet.create({
  safeContainer: {
    display: "flex",
    flex: 1,
  },
  bgRed: {
    backgroundColor: colors.red,
  },
});

export default SafeContainer;
