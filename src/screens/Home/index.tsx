import React, { useState } from "react";
import { View, FlatList } from "react-native";
import { Profile } from "../../components/Profile";
import { ButtonAdd } from "../../components/Buttons/ButtonAdd";
import { CategorySelect } from "../../components/CategorySelect";
import { ListHeader } from "../../components/ListHeader";
import { Appointment } from "../../components/Appointment";
import { useNavigation } from "@react-navigation/native";

import { styles } from "./styles";

export function Home() {
  const navigation = useNavigation();
  const [category, setCategory] = useState("");

  const appointments = [
    {
      id: "1",
      guild: {
        id: "1",
        name: "Lendários",
        icon: null,
        owner: true,
      },
      category: "1",
      date: "22/06 às 20h40",
      description:
        "É hoje que vamos chegar ao challenger sem perder uma partida da md10",
    },
    {
      id: "2",
      guild: {
        id: "1",
        name: "Sogradesce",
        icon: null,
        owner: false,
      },
      category: "1",
      date: "22/06 às 20h40",
      description:
        "É hoje que vamos chegar ao challenger sem perder uma partida da md10",
    },
  ];

  function handleCategorySelect(categoryId: string) {
    categoryId === category ? setCategory("") : setCategory(categoryId);
  }

  function handleAppintmentDetails() {
    navigation.navigate("AppointmentsDetails");
  }

  function handleAppintmentCreate() {
    navigation.navigate("AppointmentsCreate");
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Profile />
        <ButtonAdd onPress={handleAppintmentCreate} />
      </View>

      <CategorySelect
        categorySelected={category}
        setCategory={handleCategorySelect}
      />

      <View style={styles.content}>
        <ListHeader title="Partidas agendadas" subtitle="Total 6" />

        <FlatList
          data={appointments}
          keyExtractor={(item) => String(item.id)}
          style={styles.matches}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <Appointment data={item} onPress={handleAppintmentDetails} />
          )}
        />
      </View>
    </View>
  );
}
