import React from "react";
import { ReactNode } from "react";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";
import { View, Text, Image } from "react-native";
import DiscordImg from "../../../assets/discord.png";
import { styles } from "./styles";

interface ButtonIconDiscProps extends RectButtonProps {
  children?: ReactNode;
  title?: string;
}

export function ButtonIconDisc({
  children,
  title,
  ...rest
}: ButtonIconDiscProps) {
  return (
    <RectButton style={styles.container} {...rest}>
      <View style={styles.contentWraper}>
        <Image source={DiscordImg} />
      </View>
      <Text style={styles.text}>{children ? children : title}</Text>
    </RectButton>
  );
}
