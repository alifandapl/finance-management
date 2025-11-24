import React from "react";
import { Text as RNText } from "react-native";
import { DefaultTextVariant, TextProps } from "./utils";
import { fonts } from "../../styles";

const Text = ({
  children,
  style,
  variant = DefaultTextVariant,
  ...props
}: TextProps) => {
  const textStyle = fonts[variant];

  return (
    <RNText style={[textStyle, style]} {...props}>
      {children}
    </RNText>
  );
};

export default Text;
