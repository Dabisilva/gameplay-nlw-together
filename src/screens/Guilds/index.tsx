import React, { useState } from "react";
import { View, FlatList } from "react-native";
import { Profile } from "../../components/Profile";
import { ButtonAdd } from "../../components/Buttons/ButtonAdd";
import { CategorySelect } from "../../components/CategorySelect";
import { ListHeader } from "../../components/ListHeader";
import { Guild } from "../../components/Guild";
import { useNavigation } from "@react-navigation/native";

import { styles } from "./styles";
import { GuildProps } from "../../@types/AppoinmentsType";

interface Props {
  handleGuildSelected: (guild: GuildProps) => void;
}

export function Guilds({ handleGuildSelected }: Props) {
  const navigation = useNavigation();
  const [category, setCategory] = useState("");

  const appointments = [
    {
      id: "1",
      name: "Lendários",
      icon: null,
      owner: true,
    },
    {
      id: "2",
      name: "Sogradesce",
      icon: "image.png",
      owner: false,
    },
  ];

  return (
    <View style={styles.container}>
      <FlatList
        data={appointments}
        keyExtractor={(item) => String(item.id)}
        style={styles.guilds}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <Guild data={item} onPress={() => handleGuildSelected(item)} />
        )}
      />
    </View>
  );
}
