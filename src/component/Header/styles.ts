import { StyleSheet } from "react-native";
import { colors, layout } from "../../styles";

const styles = StyleSheet.create({
  container: {
    height: layout.size16,
    backgroundColor: colors.white,
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: layout.spacing4,
    borderBottomWidth: 1,
    borderColor: colors.borderDark,
  },
  title: {
    flex: 1,
    textAlign: "center",
    verticalAlign: "middle",
  },
  blankSpace: { width: layout.spacing6 },
});

export default styles;
