import { StyleSheet } from "react-native";
import { theme } from "../../theme";
import { getBottomSpace } from "react-native-iphone-x-helper";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  label: {
    fontSize: 18,
    fontFamily: theme.fonts.title700,
    color: theme.colors.heading,
  },
  form: {
    paddingHorizontal: 24,
    marginTop: 32,
  },
  select: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    height: 68,
    borderColor: theme.colors.secondary50,
    borderWidth: 1,
    borderRadius: 8,
    paddingRight: 25,
    overflow: "hidden",
  },
  image: {
    width: 64,
    height: 68,
    borderRadius: 8,
    backgroundColor: theme.colors.secondary40,
    borderColor: theme.colors.secondary50,
    borderWidth: 1,
  },
  selectBody: {
    flex: 1,
    alignItems: "center",
  },
  field: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 30,
  },
  column: {
    flexDirection: "row",
    alignItems: "center",
  },
  divider: {
    marginRight: 4,
    fontFamily: theme.fonts.text500,
    color: theme.colors.highlight,
    fontSize: 15,
  },
  description: {
    marginTop: 28,
    marginBottom: 12,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  maxLength: {
    fontSize: 13,
    fontFamily: theme.fonts.text400,
    color: theme.colors.highlight,
  },
  buttonContainer: {
    paddingHorizontal: 24,
    marginVertical: 56,
  },
});
