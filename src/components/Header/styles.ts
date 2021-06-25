import { StyleSheet } from "react-native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { theme } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 104,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: getStatusBarHeight(),
    paddingHorizontal: 24,
  },
  title: {
    flex: 1,
    textAlign: "center",
    fontFamily: theme.fonts.title700,
    color: theme.colors.heading,
    fontSize: 20,
  },
});
