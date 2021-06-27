import React, { useEffect, useState } from "react";
import {
  View,
  ImageBackground,
  Text,
  FlatList,
  Share,
  Platform,
} from "react-native";
import { BorderlessButton } from "react-native-gesture-handler";
import { Fontisto } from "@expo/vector-icons";
import { useRoute } from "@react-navigation/native";
import * as Linking from "expo-linking";

import BannerSvg from "../../assets/banner.png";
import { theme } from "../../theme";
import { AppointmentProps } from "../../@types/AppoinmentsType";

import { Background } from "../../components/Background";
import { Header } from "../../components/Header";
import { ListHeader } from "../../components/ListHeader";
import { Load } from "../../components/Load";
import { ButtonIconDisc } from "../../components/Buttons/ButtonIconDisc";
import { Member, MemberProps } from "../../components/Member";
import { ListDivider } from "../../components/ListDivider";

import { styles } from "./styles";
import { api } from "../../services/api";
import { Alert } from "react-native";

interface MembersProps {
  guildSelected: AppointmentProps;
}

interface WidgetsProps {
  id: string;
  name: string;
  instant_invite: string;
  members: MemberProps[];
  presence_count: number;
}

export function AppointmentsDetails() {
  const route = useRoute();
  const { guildSelected } = route.params as MembersProps;
  const [widget, setWidget] = useState<WidgetsProps>({} as WidgetsProps);
  const [loading, setLoading] = useState(true);

  async function getGuildWidget() {
    try {
      const response = await api.get(
        `/guilds/${guildSelected.guild.id}/widget.json`
      );
      setWidget(response.data);
    } catch {
      Alert.alert(
        "Aleta",
        "Verifique as configurações do servidor, veja se a opção Widget está habilitada!"
      );
    } finally {
      setLoading(false);
    }
  }

  function handleShareInvite() {
    const message =
      Platform.OS === "ios"
        ? `Junte-se a ${guildSelected.guild.name}`
        : widget.instant_invite;

    Share.share({
      message,
      url: widget.instant_invite,
    });
  }

  function handleGoToServer() {
    Linking.openURL(widget.instant_invite);
  }

  useEffect(() => {
    getGuildWidget();
  }, [guildSelected]);

  return (
    <Background>
      <Header
        title="Detelhes"
        action={
          guildSelected.guild.owner && (
            <BorderlessButton onPress={handleShareInvite}>
              <Fontisto name="share" size={24} color={theme.colors.primary} />
            </BorderlessButton>
          )
        }
      />

      <ImageBackground source={BannerSvg} style={styles.banner}>
        <View style={styles.bannerContent}>
          <Text style={styles.title}>{guildSelected.guild.name}</Text>
          <Text style={styles.subTitle}>{guildSelected.description}</Text>
        </View>
      </ImageBackground>

      {loading ? (
        <Load />
      ) : (
        <>
          <ListHeader
            title="Jogadores"
            subtitle={`Total ${widget.members.length}`}
          />

          <FlatList
            data={widget.members}
            keyExtractor={(item) => String(item.id)}
            style={styles.members}
            ItemSeparatorComponent={() => <ListDivider isCentered />}
            renderItem={({ item }) => <Member data={item} />}
          />
        </>
      )}

      {widget.instant_invite && (
        <View style={styles.buttonContainer}>
          <ButtonIconDisc
            onPress={handleGoToServer}
            title="Entrar na partida"
          />
        </View>
      )}
    </Background>
  );
}
