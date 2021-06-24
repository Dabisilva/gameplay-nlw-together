import React from "react";
import { Text, View, Image, TouchableOpacity, StatusBar } from "react-native";
import IllustrationImg from "../../assets/illustration.png";
import { ButtonIconDisc } from "../../components/Buttons/ButtonIconDisc";
import { styles } from "./styles";

export function SignIn() {
  return (
    <View style={styles.container}>
      <Image
        source={IllustrationImg}
        style={styles.image}
        resizeMode="stretch"
      />

      <View style={styles.content}>
        <Text style={styles.title}>
          Conecte-se {"\n"} e organize suas {"\n"} jogatinas
        </Text>
        <Text style={styles.subTitle}>
          Crie grupos para jogar seus games {"\n"} favoritos com seus amigos
        </Text>

        <ButtonIconDisc activeOpacity={0.8}>Entrar com Discord</ButtonIconDisc>
      </View>
    </View>
  );
}
