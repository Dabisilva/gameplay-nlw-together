import React from "react";
import { View, Text } from "react-native";
import { Avatar } from "../Avatar";
import { styles } from "./styles";

export function Profile() {
  return (
    <View style={styles.container}>
      <Avatar urlImage="https://instagram.fbsb8-1.fna.fbcdn.net/v/t51.2885-19/s150x150/188764723_306615447625678_3956496782483384419_n.jpg?tp=1&_nc_ht=instagram.fbsb8-1.fna.fbcdn.net&_nc_ohc=kBTqI_VUEdQAX9AxEP1&edm=ABfd0MgBAAAA&ccb=7-4&oh=9682997f6a88e35cd98e7cd55af04278&oe=60DAC27A&_nc_sid=7bff83" />

      <View>
        <Text style={styles.greeting}>
          Olá, <Text style={styles.userName}>Davi</Text>
        </Text>

        <Text style={styles.message}>Hoje é dia de vitória</Text>
      </View>
    </View>
  );
}
