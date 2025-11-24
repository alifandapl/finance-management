import React from "react";
import { ActivityIndicator, Text, TouchableOpacity, View } from "react-native";
import {
  ButtonProps,
  DefaultButtonColor,
  DefaultButtonSize,
  DefaultButtonVariant,
} from "./utils";
import useButton from "./useButton";
import styles from "./styles";
import Space from "../Space";

const Button = ({
  label,
  onPress,
  size = DefaultButtonSize,
  variant = DefaultButtonVariant,
  color = DefaultButtonColor,
  style,
  disable = false,
  isLoading = false,
  testID = "button",
  numberOfLines = 2,
}: ButtonProps) => {
  const {
    backgroundColor,
    borderColor,
    height,
    paddingHorizontal,
    fontType,
    textColor,
    iconSize,
    action,
  } = useButton({
    size,
    variant,
    color,
    disable,
  });
  const buttonStyle = {
    backgroundColor,
    borderColor,
    height,
    paddingHorizontal,
  };
  const textStyle = { ...fontType, color: textColor, textAlign: "center" as const };

  const Loader = () => (
    <>
      <Space />
      <ActivityIndicator size={iconSize} color={textColor} />
    </>
  );

  return (
    <View style={style}>
      <TouchableOpacity
        testID={testID}
        onPress={onPress}
        onPressIn={() => action.setIsPressed(true)}
        onPressOut={() => action.setIsPressed(false)}
        style={[styles.container, buttonStyle]}
        disabled={disable || isLoading}
        activeOpacity={1}
      >
        {label &&
          (isLoading ? (
            Loader()
          ) : (
            <Text style={textStyle} numberOfLines={numberOfLines}>
              {label}
            </Text>
          ))}
        {isLoading && Loader()}
      </TouchableOpacity>
    </View>
  );
};

export default Button;
