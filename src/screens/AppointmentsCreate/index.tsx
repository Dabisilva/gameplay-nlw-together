import React, { useState } from "react";
import {
  View,
  Text,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
} from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";

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
  const [category, setCategory] = useState("");
  const [stateModal, setStateModal] = useState(false);
  const [guild, setGuild] = useState<GuildProps | null>({} as GuildProps);

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
                {guild?.icon ? <GuildIcon /> : <View style={styles.image} />}

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
                  <SmallInput maxLength={2} />
                  <Text style={styles.divider}>/</Text>
                  <SmallInput maxLength={2} />
                </View>
              </View>

              <View>
                <Text style={[styles.label, { marginBottom: 12 }]}>
                  Hora e minuto
                </Text>

                <View style={styles.column}>
                  <SmallInput maxLength={2} />
                  <Text style={styles.divider}>:</Text>
                  <SmallInput maxLength={2} />
                </View>
              </View>
            </View>

            <View style={styles.description}>
              <Text style={styles.label}>Descrição</Text>
              <Text style={styles.maxLength}>Max 100 caractéres</Text>
            </View>
            <TextArea />
          </View>

          <View style={styles.buttonContainer}>
            <Button>Agendar</Button>
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
