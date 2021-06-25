import React from "react";
import { View, Text } from "react-native";
import { Avatar } from "../../components/Avatar";

import { theme } from "../../theme";
import { styles } from "./styles";

export interface MemberProps {
  id: string;
  username: string;
  avatar_url: string;
  status: string;
}

interface Props {
  data: MemberProps;
}

export function Member({ data }: Props) {
  const { status, username, avatar_url } = data;
  const { primary, on } = theme.colors;
  return (
    <View style={styles.container}>
      <Avatar urlImage={avatar_url} />

      <View style={styles.content}>
        <Text style={styles.userName}>{username}</Text>

        <View style={styles.status}>
          <View
            style={[
              styles.statusBullet,
              { backgroundColor: status === "online" ? on : primary },
            ]}
          />
          <Text style={styles.nameStatus}>
            {status === "online" ? "Dispinível" : "Ocupado"}
          </Text>
        </View>
      </View>
    </View>
  );
}
