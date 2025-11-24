import { Dimensions, StyleSheet } from "react-native";
import { colors } from "../../styles";
const { height } = Dimensions.get("window");

const styles = StyleSheet.create({
  backdrop: {
    flex: 1,
    backgroundColor: colors.backdrop,
  },
  modal: {
    backgroundColor: colors.backgroundPrimary,
    width: "100%",
    position: "absolute",
    bottom: 0,
    borderTopRightRadius: 8,
    borderTopLeftRadius: 8,
    maxHeight: height * 0.9,
  },
  imageWrapper: {
    width: "100%",
    height: 180,
    overflow: "hidden",
    marginBottom: 16,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  title: {
    marginBottom: 16,
    flex: 1,
  },
  description: {
    textAlign: "center",
    margin: 16,
    marginTop: 0,
  },
  buttonWrapper: {
    flexDirection: "row",
    padding: 16,
    paddingTop: 0,
  },
  flex: { flex: 1 },
  titleWrapper: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
  },
  centeredText: { textAlign: "center" },
  close: {
    marginLeft: 16,
    marginTop: -16,
  },
  childrenWrapper: { paddingHorizontal: 16 },
});

export default styles;
