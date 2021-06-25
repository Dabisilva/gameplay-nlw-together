import { StyleSheet } from "react-native";
import { theme } from "../../theme";
import { getBottomSpace } from "react-native-iphone-x-helper";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  banner: {
    width: "100%",
    height: 234,
    marginBottom: 24,
  },
  bannerContent: {
    flex: 1,
    justifyContent: "flex-end",
    paddingHorizontal: 24,
    marginBottom: 24,
  },
  title: {
    fontFamily: theme.fonts.title700,
    color: theme.colors.heading,
    fontSize: 28,
  },
  subTitle: {
    fontFamily: theme.fonts.text400,
    color: theme.colors.heading,
    fontSize: 13,
  },
  members: {
    marginLeft: 24,
    marginTop: 27,
  },
  buttonContainer: {
    paddingHorizontal: 24,
    paddingVertical: 30,
    marginBottom: getBottomSpace(),
  },
});
