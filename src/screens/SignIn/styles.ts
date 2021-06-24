import { StyleSheet } from "react-native";
import { theme } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.colors.secondary90,
  },
  image: {
    width: "100%",
    height: 360,
  },
  content: {
    marginTop: -40,
    alignItems: "center",
    paddingHorizontal: 50,
  },
  title: {
    color: theme.colors.heading,
    textAlign: "center",
    fontSize: 40,
    fontFamily: theme.fonts.title700,
    marginBottom: 16,
    lineHeight: 40,
  },
  subTitle: {
    color: theme.colors.highlight,
    textAlign: "center",
    fontSize: 15,
    fontFamily: theme.fonts.text400,
    marginBottom: 48,
  },
});
