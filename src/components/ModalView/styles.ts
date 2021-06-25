import { StyleSheet } from "react-native";
import { theme } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
  },
  overlay: {
    flex: 1,
    backgroundColor: theme.colors.overlay,
  },
  barr: {
    width: 39,
    height: 2,
    borderRadius: 2,
    backgroundColor: theme.colors.secondary30,
    alignSelf: "center",
    marginTop: 13,
  },
});