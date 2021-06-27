import React, { useEffect, useState } from "react";
import { View, FlatList } from "react-native";
import { ListDivider } from "../../components/ListDivider";
import { Guild } from "../../components/Guild";
import { Load } from "../../components/Load";
import { GuildProps } from "../../@types/AppoinmentsType";

import { styles } from "./styles";
import { api } from "../../services/api";

interface Props {
  handleGuildSelected: (guild: GuildProps) => void;
}

export function Guilds({ handleGuildSelected }: Props) {
  const [guilds, setGuilds] = useState<GuildProps[]>([]);
  const [loading, setLoading] = useState(true);

  async function getGuilds() {
    await api.get("/users/@me/guilds").then((response) => {
      setGuilds(response.data);
      setLoading(false);
    });
  }

  useEffect(() => {
    getGuilds();
  }, []);

  return (
    <View style={styles.container}>
      {loading ? (
        <Load />
      ) : (
        <FlatList
          data={guilds}
          keyExtractor={(item) => String(item.id)}
          style={styles.guilds}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 69, paddingTop: 104 }}
          ItemSeparatorComponent={() => <ListDivider isCentered />}
          ListHeaderComponent={() => <ListDivider isCentered />}
          renderItem={({ item }) => (
            <Guild data={item} onPress={() => handleGuildSelected(item)} />
          )}
        />
      )}
    </View>
  );
}
