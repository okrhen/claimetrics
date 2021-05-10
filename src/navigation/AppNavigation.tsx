import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";
import { Home, SplashScreen, Profile, NewReport } from "../screens";
import {
  screenHeaderOptions,
  headerRightBtn,
  headerBackTitle,
} from "./navigationHelpers";

const Stack = createStackNavigator();

const noHeader = { header: () => null };

function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            ...screenHeaderOptions,
            ...headerRightBtn({ iconName: "ellipsis-h" }),
          }}
        />
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={({ navigation }) => ({
            ...screenHeaderOptions,
            ...headerRightBtn({ iconName: "home", navigation }),
            ...headerBackTitle,
          })}
        />
        <Stack.Screen
          name="New Report"
          component={NewReport}
          options={({ navigation }) => ({
            ...screenHeaderOptions,
            ...headerRightBtn({ iconName: "home", navigation }),
            ...headerBackTitle,
          })}
        />
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={noHeader}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigation;
