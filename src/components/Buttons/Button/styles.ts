import { StyleSheet } from "react-native";
import { theme } from "../../../theme";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 56,
    borderRadius: 8,
    backgroundColor: theme.colors.primary,
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    flex: 1,
    color: theme.colors.heading,
    fontFamily: theme.fonts.text500,
    fontSize: 15,
    textAlign: "center",
  },
});
