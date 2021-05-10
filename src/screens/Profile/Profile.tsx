import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { Form, Input, Item, Label } from "native-base";

const Profile = () => {
  const handlePressItem = () => {};

  return (
    <View style={styles.container}>
      <Form>
        <Item floatingLabel>
          <Label>First Name</Label>
          <Input />
        </Item>
        <Item floatingLabel>
          <Label>Last Name</Label>
          <Input />
        </Item>
        <Item floatingLabel>
          <Label>Email</Label>
          <Input />
        </Item>
        <Item floatingLabel>
          <Label>Phone</Label>
          <Input />
        </Item>
        <Item floatingLabel>
          <Label>Client Name*</Label>
          <Input />
        </Item>
      </Form>
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

export default Profile;
