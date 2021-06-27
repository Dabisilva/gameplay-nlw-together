import React from "react";

import { theme } from "../theme";
import { createStackNavigator } from "@react-navigation/stack";

import { SignIn } from "../screens/SignIn";

const { Navigator, Screen } = createStackNavigator();

export function AuthNavigation() {
  return (
    <Navigator
      headerMode="none"
      screenOptions={{
        cardStyle: {
          backgroundColor: theme.colors.secondary100,
        },
      }}
    >
      <Screen name="SignIn" component={SignIn} />
    </Navigator>
  );
}
