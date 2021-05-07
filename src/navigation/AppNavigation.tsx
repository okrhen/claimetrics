import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";
import { Home, SplashScreen } from "../screens";

const Stack = createStackNavigator();

const noHeader = { header: () => null };

function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen">
        <Stack.Screen name="Home" component={Home} options={noHeader} />
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
