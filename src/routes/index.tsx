import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { AuthNavigation } from "./auth.routes";
import { StackRoutes } from "./routes";
import { useAuth } from "../context/auth";

export function Routes() {
  const { user } = useAuth();

  return (
    <NavigationContainer>
      {user?.token ? <StackRoutes /> : <AuthNavigation />}
    </NavigationContainer>
  );
}
