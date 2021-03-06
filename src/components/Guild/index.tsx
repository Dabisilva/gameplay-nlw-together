import React from "react";
import {
  TouchableOpacity,
  TouchableOpacityProps,
  View,
  Text,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Feather } from "@expo/vector-icons";
import { GuildIcon } from "../../components/GuildIcon";
import { styles } from "./styles";
import { theme } from "../../theme";
import { GuildProps } from "../../@types/AppoinmentsType";

interface Props extends TouchableOpacityProps {
  data: GuildProps;
}

export function Guild({ data, ...rest }: Props) {
  return (
    <TouchableOpacity {...rest} activeOpacity={0.7} style={styles.container}>
      <LinearGradient
        style={styles.guildIconContainer}
        colors={[theme.colors.secondary50, theme.colors.secondary70]}
      >
        <GuildIcon guildId={data.id} iconId={data.icon} />
      </LinearGradient>

      <View style={styles.content}>
        <View>
          <Text style={styles.title}>{data.name}</Text>

          <Text style={styles.type}>
            {data.owner ? "Administrador" : "Convidado"}
          </Text>
        </View>
      </View>
      <Feather name="chevron-right" color={theme.colors.heading} size={24} />
    </TouchableOpacity>
  );
}
