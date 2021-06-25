import React from "react";
import { ReactNode } from "react";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";
import { Text } from "react-native";
import { styles } from "./styles";

interface ButtonIconDiscProps extends RectButtonProps {
  children?: ReactNode;
  title?: string;
}

export function Button({ children, title, ...rest }: ButtonIconDiscProps) {
  return (
    <RectButton style={styles.container} {...rest}>
      <Text style={styles.text}>{children ? children : title}</Text>
    </RectButton>
  );
}
