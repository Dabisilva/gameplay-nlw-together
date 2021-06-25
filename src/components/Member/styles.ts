import { StyleSheet } from "react-native";
import { theme } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 31,
  },
  content: {
    flex: 1,
    width: "100%",
    borderBottomColor: theme.colors.secondary40,
    borderBottomWidth: 1,
    paddingBottom: 7,
  },
  userName: {
    fontFamily: theme.fonts.title700,
    color: theme.colors.heading,
    fontSize: 18,
  },
  status: {
    flexDirection: "row",
    alignItems: "center",
  },
  statusBullet: {
    width: 8,
    height: 8,
    borderRadius: 8,
    marginRight: 8,
  },
  nameStatus: {
    fontFamily: theme.fonts.text400,
    color: theme.colors.highlight,
    fontSize: 13,
  },
});
