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
  contentWraper: {
    width: 56,
    height: 56,
    justifyContent: "center",
    alignItems: "center",
    borderRightWidth: 1,
    borderRightColor: theme.colors.line,
  },
  text: {
    flex: 1,
    color: theme.colors.heading,
    fontFamily: theme.fonts.text500,
    fontSize: 15,
    textAlign: "center",
  },
});
