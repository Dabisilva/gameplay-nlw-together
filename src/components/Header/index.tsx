import React, { ReactNode } from "react";
import { View, Text } from "react-native";
import { BorderlessButton } from "react-native-gesture-handler";
import { Feather, FontAwesome } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { theme } from "../../theme";

import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";

interface HeaderProps {
  title: string;
  action?: ReactNode;
}

export function Header({ title, action }: HeaderProps) {
  const navigation = useNavigation();
  const { secondary100, secondary40, heading, primary } = theme.colors;

  function handleGoBack() {
    navigation.goBack();
  }

  return (
    <LinearGradient colors={[secondary100, secondary40]}>
      <View style={styles.container}>
        <BorderlessButton onPress={handleGoBack}>
          <Feather name="arrow-left" size={24} color={heading} />
        </BorderlessButton>
        <Text style={styles.title}>{title}</Text>

        {action && <View>{action}</View>}
      </View>
    </LinearGradient>
  );
}
