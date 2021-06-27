import React, { useState } from "react";
import { View, FlatList } from "react-native";
import { Profile } from "../../components/Profile";
import { ButtonAdd } from "../../components/Buttons/ButtonAdd";
import { CategorySelect } from "../../components/CategorySelect";
import { ListDivider } from "../../components/ListDivider";
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
    {
      id: "3",
      name: "Sogradesce",
      icon: "image.png",
      owner: false,
    },
    {
      id: "4",
      name: "Sogradesce",
      icon: "image.png",
      owner: false,
    },
    {
      id: "5",
      name: "Sogradesce",
      icon: "image.png",
      owner: false,
    },
    {
      id: "6",
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
        contentContainerStyle={{ paddingBottom: 69, paddingTop: 104 }}
        ItemSeparatorComponent={() => <ListDivider isCentered />}
        ListHeaderComponent={() => <ListDivider isCentered />}
        renderItem={({ item }) => (
          <Guild data={item} onPress={() => handleGuildSelected(item)} />
        )}
      />
    </View>
  );
}
