import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { ChipProps } from "./utils";
import styles from "./styles";
import useChip from "./useChip";
import Space from "../Space";
import { Feather } from "@expo/vector-icons";

const Chip = ({
  close,
  label = "Option",
  color,
  size,
  variant,
  onPressClose,
  style,
}: ChipProps) => {
  const { labelColor, fontType, backgroundColor, borderColor, iconSize } =
    useChip({
      color,
      variant,
      size,
    });
  const containerStyles = {
    backgroundColor,
    borderColor,
  };
  const labelStyles = {
    ...fontType,
    color: labelColor,
  };

  return (
    <View style={style}>
      <View style={[styles.container, containerStyles]}>
        <Text style={labelStyles}>{label}</Text>
        <Space size={4} />
        {close && (
          <TouchableOpacity onPress={onPressClose}>
            <Feather name="x" size={iconSize} color={labelColor} />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default Chip;
