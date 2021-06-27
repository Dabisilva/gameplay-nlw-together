import React from "react";

import { View, Text, TouchableOpacity } from "react-native";
import { useAuth } from "../../context/auth";

import { styles } from "./styles";

export function SignOutAlert() {
  const { closeAlertSignOut, signOut } = useAuth();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Deseja Sair do Game<Text style={styles.redText}>Play</Text>?
      </Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={closeAlertSignOut}
          style={styles.noButton}
        >
          <Text style={styles.textButton}>NÃO</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={signOut}
          style={styles.yesButton}
        >
          <Text style={styles.textButton}>SIM</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
