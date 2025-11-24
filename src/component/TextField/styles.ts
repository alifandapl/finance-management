import { StyleSheet } from "react-native";
import { colors, fonts, layout } from "../../styles";

const styles = StyleSheet.create({
  wrapper: { width: "100%" },
  label: {
    marginBottom: 8,
    flexDirection: "row",
    alignItems: "center",
  },
  textInput: {
    paddingHorizontal: 16,
    height: 44,
    borderWidth: 1,
    borderRadius: layout.radius2,
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    ...fonts.BodySmallRegular,
    padding: 0,
    flex: 1,
    flexWrap: "nowrap",
  },
  caption: {
    marginTop: 8,
  },
  hint: {
    marginTop: 8,
  },
  divider: {
    width: 1,
    height: 20,
    marginHorizontal: 8,
    backgroundColor: colors.borderDark,
  },
  buttonText: { color: colors.primary500 },
  subLabel: {
    ...fonts.CaptionSmallRegular,
    color: colors.textInactive,
  },
});

export default styles;
