import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { CheckboxProps, DefaultCheckboxSize } from "./utils";
import styles from "./styles";
import useCheckbox from "./useCheckbox";
import { Feather } from "@expo/vector-icons";

const Checkbox = ({
  checked = true,
  size = DefaultCheckboxSize,
  disable = false,
  onChange,
  label,
  style,
  isError,
}: CheckboxProps) => {
  const {
    boxSize,
    iconSize,
    labelSize,
    borderRadius,
    backgroundColor,
    borderColor,
    iconColor,
  } = useCheckbox({
    checked,
    size,
    disable,
    isError,
  });
  const checkboxStyle = {
    width: boxSize,
    height: boxSize,
    borderRadius,
    backgroundColor,
    borderColor,
  };
  const labelStyle = {
    ...labelSize,
  };

  return (
    <View style={style}>
      <View>
        <TouchableOpacity
          onPress={() => onChange?.(!checked)}
          disabled={disable}
          style={styles.wrapper}
        >
          <View style={[styles.checkebox, checkboxStyle]}>
            {checked && (
              <Feather name="check" size={iconSize - 2} color={iconColor} />
            )}
          </View>
          <Text style={[styles.label, labelStyle]}>{label}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Checkbox;
