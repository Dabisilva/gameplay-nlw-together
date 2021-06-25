import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { Image } from "react-native";
import { styles } from "./styles";
import { theme } from "../../theme";

interface AvatarProps {
  urlImage: string;
}

export function Avatar({ urlImage }: AvatarProps) {
  const { secondary50, secondary70 } = theme.colors;
  return (
    <LinearGradient
      style={styles.container}
      colors={[secondary50, secondary70]}
    >
      <Image
        style={styles.image}
        source={{
          uri: urlImage,
        }}
      />
    </LinearGradient>
  );
}
