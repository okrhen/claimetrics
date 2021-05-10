import React from "react";
import { StyleSheet } from "react-native";
import { Button, Icon } from "native-base";

import { colors } from "../styles/theme";

export const screenHeaderOptions = {
  headerStyle: {
    backgroundColor: colors.red,
  },
  headerTintColor: colors.white,
};

export const headerRightBtn = ({ iconName, navigation }: any) => {
  const handleClickBtn = () => {
    if (iconName === "home") {
      navigation.popToTop("Home");
    }
  };

  return {
    headerRight: () => (
      <Button transparent onPress={handleClickBtn}>
        <Icon name={iconName} type="FontAwesome5" style={styles.btnIconWhite} />
      </Button>
    ),
  };
};

export const headerBackTitle = {
  headerBackTitle: "Aon",
};

const styles = StyleSheet.create({
  btnIconWhite: {
    color: colors.white,
  },
});
