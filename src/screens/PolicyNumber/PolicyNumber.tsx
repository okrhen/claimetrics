import SafeContainer from "../../components/SafeContainer/SafeContainer";
import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { List, ListItem, Left, Body, Right, Icon, Button, Form, Input, Item, Label, Tab } from "native-base";
import { IHomeScreenProps } from "../../interfaces/screens/Home";
import { colors } from "../../styles/theme";

const PolicyNumber = ({ navigation }: IHomeScreenProps) => {
  const handlePressItem = () => {
    navigation.navigate("Impact Of Damage");
  };

  return (
    <View style={styles.container}>
      <Form>
        <Item floatingLabel>
          <Label>Policy Number*</Label>
          <Input />
        </Item>
      </Form>
      <View style={styles.btnItemContent}>
        <Button style={styles.btnItem} onPress={() => handlePressItem}>
          <Text style={styles.btnItemText}>Next</Text>
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
  },
  btnItemContent: {
    height: "100%",
    position: 'absolute',
    top: "70%",
    alignSelf: "center",
  },
  btnItem: {
    height: 50,
    width: 130,
    backgroundColor: "black",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 20,
    padding: 0,
  },
  btnItemText: {
    color: "white",
  },
});

export default PolicyNumber;
