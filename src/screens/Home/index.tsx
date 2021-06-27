import React, { useState, useCallback } from "react";
import { View, FlatList } from "react-native";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { COLLECTION_APPOINTMENT } from "../../configs/storage";
import { AppointmentProps } from "../../@types/AppoinmentsType";

import { Profile } from "../../components/Profile";
import { ButtonAdd } from "../../components/Buttons/ButtonAdd";
import { CategorySelect } from "../../components/CategorySelect";
import { ListHeader } from "../../components/ListHeader";
import { Appointment } from "../../components/Appointment";
import { ListDivider } from "../../components/ListDivider";
import { ModalViewSignOut } from "../../components/ModalViewSignOut";
import { Load } from "../../components/Load";

import { SignOutAlert } from "../SignOutAlert";
import { useAuth } from "../../context/auth";

import { styles } from "./styles";

export function Home() {
  const navigation = useNavigation();
  const { modalOpen, closeAlertSignOut } = useAuth();
  const [category, setCategory] = useState("");
  const [appointments, setAppointments] = useState<AppointmentProps[]>([]);
  const [loading, setLoading] = useState(true);

  function handleCategorySelect(categoryId: string) {
    categoryId === category ? setCategory("") : setCategory(categoryId);
  }

  function handleAppintmentDetails(guildSelected: AppointmentProps) {
    navigation.navigate("AppointmentsDetails", { guildSelected });
  }

  function handleAppintmentCreate() {
    navigation.navigate("AppointmentsCreate");
  }

  async function getAppointments() {
    const storage = await AsyncStorage.getItem(COLLECTION_APPOINTMENT);
    const storageAppointments: AppointmentProps[] = storage
      ? JSON.parse(storage)
      : [];

    if (category) {
      setAppointments(
        storageAppointments.filter((item) => item.category === category)
      );
    } else {
      setAppointments(storageAppointments);
    }

    setLoading(false);
  }

  useFocusEffect(
    useCallback(() => {
      getAppointments();
    }, [category])
  );

  console.log(modalOpen);
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

      {loading ? (
        <Load />
      ) : (
        <>
          <ListHeader
            title="Partidas agendadas"
            subtitle={`Total ${appointments.length}`}
          />
          <FlatList
            data={appointments}
            keyExtractor={(item) => String(item.id)}
            style={styles.matches}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: 69 }}
            ItemSeparatorComponent={() => <ListDivider />}
            renderItem={({ item }) => (
              <Appointment
                data={item}
                onPress={() => handleAppintmentDetails(item)}
              />
            )}
          />
        </>
      )}
      <ModalViewSignOut
        visible={modalOpen}
        onDismiss={closeAlertSignOut}
        onRequestClose={closeAlertSignOut}
        closeModal={closeAlertSignOut}
      >
        <SignOutAlert />
      </ModalViewSignOut>
    </View>
  );
}
