import AsyncStorage from "@react-native-async-storage/async-storage";
import React from "react";
import { View, Text, Alert } from "react-native";
import { RectButton } from "react-native-gesture-handler";

import { useAuth } from "../../context/auth";
import { Avatar } from "../Avatar";
import { styles } from "./styles";

export function Profile() {
  const { user, showAlertSignOut } = useAuth();

  return (
    <View style={styles.container}>
      <RectButton onPress={showAlertSignOut}>
        <Avatar urlImage={user.avatar} />
      </RectButton>

      <View>
        <Text style={styles.greeting}>
          Olá, <Text style={styles.userName}>{user.firstName}</Text>
        </Text>

        <Text style={styles.message}>Hoje é dia de vitória</Text>
      </View>
    </View>
  );
}
