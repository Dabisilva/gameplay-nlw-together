import { StyleSheet } from "react-native";
import { theme } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  title: {
    paddingVertical: 24,
    fontFamily: theme.fonts.title700,
    fontSize: 20,
    color: theme.colors.heading,
  },
  redText: {
    color: theme.colors.primary,
  },
  buttonContainer: {
    width: "100%",
    flexDirection: "row",
    paddingHorizontal: 24,
    justifyContent: "space-between",
    alignItems: "center",
  },
  noButton: {
    alignItems: "center",
    justifyContent: "center",
    width: 160,
    height: 56,
    borderColor: theme.colors.secondary50,
    borderWidth: 2,
    borderRadius: 8,
  },
  yesButton: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.colors.primary,
    width: 160,
    height: 56,
    borderRadius: 8,
  },
  textButton: {
    fontFamily: theme.fonts.text500,
    color: theme.colors.heading,
    fontSize: 15,
  },
});
