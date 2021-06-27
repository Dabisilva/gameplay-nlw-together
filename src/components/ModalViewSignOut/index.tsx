import React, { ReactNode } from "react";
import {
  View,
  Modal,
  ModalProps,
  TouchableWithoutFeedback,
} from "react-native";
import { Background } from "../Background";

import { styles } from "./styles";

interface ModalViewSignOutProps extends ModalProps {
  children: ReactNode;
  closeModal: () => void;
}

export function ModalViewSignOut({
  children,
  closeModal,
  ...rest
}: ModalViewSignOutProps) {
  return (
    <Modal transparent statusBarTranslucent animationType="slide" {...rest}>
      <TouchableWithoutFeedback onPress={closeModal}>
        <View style={styles.overlay}>
          <View style={styles.container}>
            <Background>{children}</Background>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
}
