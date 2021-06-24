import React from "react";
import { ReactNode } from "react";

import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TouchableOpacityProps,
} from "react-native";
import DiscordImg from "../../../assets/discord.png";
import { styles } from "./styles";

interface ButtonIconDiscProps extends TouchableOpacityProps {
  children?: ReactNode;
  title?: string;
}

export function ButtonIconDisc({
  children,
  title,
  ...rest
}: ButtonIconDiscProps) {
  return (
    <TouchableOpacity style={styles.container} {...rest}>
      <View style={styles.contentWraper}>
        <Image source={DiscordImg} />
      </View>
      <Text style={styles.text}>{children ? children : title}</Text>
    </TouchableOpacity>
  );
}
