import React, { useState } from "react";
import {
  View,
  Text,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
  Alert,
} from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";
import uuid from "react-native-uuid";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";

import { COLLECTION_APPOINTMENT } from "../../configs/storage";

import { Background } from "../../components/Background";
import { Header } from "../../components/Header";
import { CategorySelect } from "../../components/CategorySelect";
import { GuildIcon } from "../../components/GuildIcon";
import { SmallInput } from "../../components/SmallInput";
import { TextArea } from "../../components/TextArea";
import { Button } from "../../components/Buttons/Button";
import { ModalView } from "../../components/ModalView";

import { GuildProps } from "../../@types/AppoinmentsType";

import { Guilds } from "../Guilds";
import { theme } from "../../theme";

import { styles } from "./styles";

export function AppointmentsCreate() {
  const navigation = useNavigation();
  const [category, setCategory] = useState("");
  const [stateModal, setStateModal] = useState(false);
  const [guild, setGuild] = useState<GuildProps | null>({} as GuildProps);

  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [hour, setHour] = useState("");
  const [minute, setMinute] = useState("");
  const [description, setDescription] = useState("");

  function handleOpenGuilds() {
    setStateModal(true);
  }

  function handleCategorySelect(categoryId: string) {
    setCategory(categoryId);
  }

  function handleGuildSelected(guildSelected: GuildProps) {
    setGuild(guildSelected);
    setStateModal(false);
  }
  function handleCloseGuilds() {
    setStateModal(false);
  }

  function handleValidations() {
    if (!!category === false) {
      Alert.alert("Alerta", "Selecione uma categoria!");
    } else if (!!guild === false) {
      Alert.alert("Alerta", "Selecione um servidor!");
    } else if (
      !!day === false ||
      !!month === false ||
      !!hour === false ||
      !!minute === false
    ) {
      Alert.alert("Alerta", "Selecione uma data e hora!");
    } else if (!!description === false) {
      Alert.alert("Alerta", "Faça uma breve descrição!");
    } else {
      handleSave();
    }
  }

  async function handleSave() {
    const newAppointment = {
      id: uuid.v4(),
      guild,
      category,
      date: `${day}/${month} ás ${hour}:${minute}h`,
      description,
    };

    const storage = await AsyncStorage.getItem(COLLECTION_APPOINTMENT);
    const appointments = storage ? JSON.parse(storage) : [];

    await AsyncStorage.setItem(
      COLLECTION_APPOINTMENT,
      JSON.stringify([...appointments, newAppointment])
    );

    navigation.navigate("Home");
  }

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView>
        <Background>
          <Header title="Agendar Partida" />

          <Text
            style={[
              styles.label,
              { marginLeft: 24, marginTop: 36, marginBottom: 18 },
            ]}
          >
            Categoria
          </Text>
          <CategorySelect
            hasCheckBox
            setCategory={handleCategorySelect}
            categorySelected={category}
          />

          <View style={styles.form}>
            <RectButton onPress={handleOpenGuilds}>
              <View style={styles.select}>
                {guild?.icon ? (
                  <GuildIcon guildId={guild.id} iconId={guild.icon} />
                ) : (
                  <View style={styles.image} />
                )}

                <View style={styles.selectBody}>
                  <Text style={styles.label}>
                    {guild?.name ? guild.name : "Selecione um servidor"}
                  </Text>
                </View>
                <Feather
                  name="chevron-right"
                  color={theme.colors.heading}
                  size={18}
                />
              </View>
            </RectButton>
            <View style={styles.field}>
              <View>
                <Text style={[styles.label, { marginBottom: 12 }]}>
                  Dia e mês
                </Text>

                <View style={styles.column}>
                  <SmallInput maxLength={2} onChangeText={setDay} />
                  <Text style={styles.divider}>/</Text>
                  <SmallInput maxLength={2} onChangeText={setMonth} />
                </View>
              </View>

              <View>
                <Text style={[styles.label, { marginBottom: 12 }]}>
                  Hora e minuto
                </Text>

                <View style={styles.column}>
                  <SmallInput maxLength={2} onChangeText={setHour} />
                  <Text style={styles.divider}>:</Text>
                  <SmallInput maxLength={2} onChangeText={setMinute} />
                </View>
              </View>
            </View>

            <View style={styles.description}>
              <Text style={styles.label}>Descrição</Text>
              <Text style={styles.maxLength}>Max 100 caractéres</Text>
            </View>
            <TextArea onChangeText={setDescription} />
          </View>

          <View style={styles.buttonContainer}>
            <Button onPress={handleValidations}>Agendar</Button>
          </View>
        </Background>
      </ScrollView>

      <ModalView
        visible={stateModal}
        onDismiss={handleCloseGuilds}
        onRequestClose={handleCloseGuilds}
        closeModal={handleCloseGuilds}
      >
        <Guilds handleGuildSelected={handleGuildSelected} />
      </ModalView>
    </KeyboardAvoidingView>
  );
}
