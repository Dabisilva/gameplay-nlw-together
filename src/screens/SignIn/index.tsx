import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Text, View, Image } from "react-native";
import IllustrationImg from "../../assets/illustration.png";
import { Background } from "../../components/Background";
import { ButtonIconDisc } from "../../components/Buttons/ButtonIconDisc";
import { styles } from "./styles";

export function SignIn() {
  const navigation = useNavigation();

  function handleSubmit() {
    navigation.navigate("Home");
  }

  return (
    <Background>
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

          <ButtonIconDisc onPress={handleSubmit}>
            Entrar com Discord
          </ButtonIconDisc>
        </View>
      </View>
    </Background>
  );
}
