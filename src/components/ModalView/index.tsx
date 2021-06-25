import React, { ReactNode } from "react";
import { View, Modal, ModalProps } from "react-native";
import { Background } from "../Background";

import { styles } from "./styles";

interface ModalViewProps extends ModalProps {
  children: ReactNode;
}

export function ModalView({ children, ...rest }: ModalViewProps) {
  return (
    <Modal transparent animationType="slide" {...rest}>
      <View style={styles.overlay}>
        <View style={styles.container}>
          <Background>
            <View style={styles.barr} />

            {children}
          </Background>
        </View>
      </View>
    </Modal>
  );
}