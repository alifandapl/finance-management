import { View } from "react-native";
import Text from "../Text";
import { HeaderProps } from "./utils";
import styles from "./styles";
import { Feather } from "@expo/vector-icons";
import { colors, layout } from "../../styles";
import Space from "../Space";
import { useNavigation } from "@react-navigation/native";

const Header = ({ title, back = true }: HeaderProps) => {
  const navigation = useNavigation();

  const goBack = () => {
    navigation.goBack();
  };

  const Blank = () => {
    return <View style={styles.blankSpace} />;
  };

  return (
    <View style={styles.container}>
      {back ? (
        <Feather
          name="chevron-left"
          size={24}
          color={colors.tertiary900}
          onPress={goBack}
        />
      ) : (
        <Blank />
      )}
      <Space size={layout.spacing4} />
      <Text variant="Heading6" style={styles.title}>
        {title}
      </Text>
      <Space size={layout.spacing4} />
      <Blank />
    </View>
  );
};

export default Header;
