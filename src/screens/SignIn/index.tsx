import React from "react";
import { Text, View, Image, Alert, ActivityIndicator } from "react-native";
import IllustrationImg from "../../assets/illustration.png";
import { Background } from "../../components/Background";
import { ButtonIconDisc } from "../../components/Buttons/ButtonIconDisc";
import { styles } from "./styles";
import { useAuth } from "../../context/auth";
import { theme } from "../../theme";

export function SignIn() {
  const { signIn, loading } = useAuth();
  async function handleSubmit() {
    try {
      await signIn();
    } catch (error) {
      Alert.alert(error);
    }
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
          {loading ? (
            <ActivityIndicator color={theme.colors.primary} size="large" />
          ) : (
            <ButtonIconDisc onPress={handleSubmit}>
              Entrar com Discord
            </ButtonIconDisc>
          )}
        </View>
      </View>
    </Background>
  );
}
