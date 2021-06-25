import React from "react";
import { View, ImageBackground, Text, FlatList } from "react-native";
import { BorderlessButton } from "react-native-gesture-handler";
import { Fontisto } from "@expo/vector-icons";
import BannerSvg from "../../assets/banner.png";

import { Background } from "../../components/Background";
import { Header } from "../../components/Header";
import { ListHeader } from "../../components/ListHeader";
import { ButtonIconDisc } from "../../components/Buttons/ButtonIconDisc";
import { Member } from "../../components/Member";

import { theme } from "../../theme";

import { styles } from "./styles";

export function AppointmentsDetails() {
  const members = [
    {
      id: "1",
      username: "Dabi",
      avatar_url:
        "https://instagram.fbsb8-1.fna.fbcdn.net/v/t51.2885-19/s150x150/188764723_306615447625678_3956496782483384419_n.jpg?tp=1&_nc_ht=instagram.fbsb8-1.fna.fbcdn.net&_nc_ohc=kBTqI_VUEdQAX9AxEP1&edm=ABfd0MgBAAAA&ccb=7-4&oh=9682997f6a88e35cd98e7cd55af04278&oe=60DAC27A&_nc_sid=7bff83",
      status: "online",
    },
    {
      id: "2",
      username: "Dabi",
      avatar_url:
        "https://instagram.fbsb8-1.fna.fbcdn.net/v/t51.2885-19/s150x150/188764723_306615447625678_3956496782483384419_n.jpg?tp=1&_nc_ht=instagram.fbsb8-1.fna.fbcdn.net&_nc_ohc=kBTqI_VUEdQAX9AxEP1&edm=ABfd0MgBAAAA&ccb=7-4&oh=9682997f6a88e35cd98e7cd55af04278&oe=60DAC27A&_nc_sid=7bff83",
      status: "offline",
    },
  ];

  return (
    <Background>
      <Header
        title="Detelhes"
        action={
          <BorderlessButton>
            <Fontisto name="share" size={24} color={theme.colors.primary} />
          </BorderlessButton>
        }
      />

      <ImageBackground source={BannerSvg} style={styles.banner}>
        <View style={styles.bannerContent}>
          <Text style={styles.title}>Lendários</Text>
          <Text style={styles.subTitle}>
            É hoje que vamos chegar ao challenger sem perder uma partida da md10
          </Text>
        </View>
      </ImageBackground>
      <ListHeader title="Jogadores" subtitle="Total 3" />

      <FlatList
        data={members}
        keyExtractor={(item) => String(item.id)}
        style={styles.members}
        renderItem={({ item }) => <Member data={item} />}
      />

      <View style={styles.buttonContainer}>
        <ButtonIconDisc title="Entrar na partida" />
      </View>
    </Background>
  );
}
