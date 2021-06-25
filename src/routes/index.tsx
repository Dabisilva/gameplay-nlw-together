import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { AuthNavigation } from "./auth.routes";

export function Routes() {
  return (
    <NavigationContainer>
      <AuthNavigation />
    </NavigationContainer>
  );
}
