import SafeContainer from "../../components/SafeContainer/SafeContainer";
import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { List, ListItem, Left, Body, Right, Icon, Button } from "native-base";
import { IHomeScreenProps } from "../../interfaces/screens/Home";

const Home = ({ navigation }: IHomeScreenProps) => {
  const handlePressItem = (screen: string) => {
    navigation.navigate(screen);
  };

  return (
    <View style={styles.container}>
      <List>
        <ListItem
          style={styles.listItem}
          onPress={() => handlePressItem("New Report")}
        >
          <Left>
            <View style={styles.listItemContent}>
              <Button style={styles.listItemBtn}>
                <Icon
                  name="plus"
                  type="FontAwesome5"
                  style={styles.listItemIcon}
                />
              </Button>
              <Text>New Report</Text>
            </View>
          </Left>
        </ListItem>
        <ListItem
          style={styles.listItem}
          onPress={() => handlePressItem("Profile")}
        >
          <Left>
            <View style={styles.listItemContent}>
              <Button light style={styles.listItemBtn}>
                <Icon
                  name="user"
                  type="FontAwesome5"
                  style={styles.listItemIcon}
                />
              </Button>
              <Text>My Profile</Text>
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
    // justifyContent: 'center',
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
    fontSize: 20,
  },
});

export default Home;
