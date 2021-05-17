import SafeContainer from "../../components/SafeContainer/SafeContainer";
import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { List, ListItem, Left, Body, Right, Icon, Button } from "native-base";
import { IHomeScreenProps } from "../../interfaces/screens/Home";
import { colors } from "../../styles/theme";

const NewReport = ({ navigation }: IHomeScreenProps) => {
  const handlePressItem = () => {
    navigation.navigate("Policy Number");
  };

  return (
    <View style={styles.container}>
      <List>
        <ListItem
          style={styles.listItem}
          onPress={() => handlePressItem()}>
          <Left>
            <View style={styles.listItemContent}>
              <Button style={styles.listItemBtn} danger>
                <Icon
                  name="user-tag"
                  type="FontAwesome5"
                  style={styles.listItemIcon}
                />
              </Button>
              <Text>My Property</Text>
            </View>
          </Left>
        </ListItem>
        <ListItem
          style={styles.listItem}
          onPress={() => handlePressItem()}>
          <Left>
            <View style={styles.listItemContent}>
              <Button light style={styles.listItemBtn} dark>
                <Icon
                  name="user-friends"
                  type="FontAwesome5"
                  style={[styles.listItemIcon, styles.iconWhite]}
                />
              </Button>
              <Text>Third Party</Text>
            </View>
          </Left>
        </ListItem>
      </List>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
  },
  listItem: {
    minHeight: 80,
  },
  listItemContent: {
    height: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  listItemBtn: {
    height: 50,
    width: 50,
    borderRadius: 50 / 2,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 20,
    padding: 0,
  },
  listItemIcon: {
    fontSize: 16,
    margin: 0,
  },
  iconWhite: {
    color: colors.white,
  },
});

export default NewReport;
