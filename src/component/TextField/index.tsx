import React from "react";
import { TextInput, TouchableOpacity, View } from "react-native";
import styles from "./styles";
import { DefaultTextFieldVariant, TextFieldProps } from "./utils";
import useTextField from "./useTextField";
import Text from "../Text";
import { colors } from "../../styles";
import { isNotEmpty } from "../../utils";
import Caption from "../Caption";
import Space from "../Space";

const TextField = ({
  editable = true,
  hintText,
  errorMessage,
  successMessage,
  label,
  placeholder = "Placeholder...",
  style,
  variant = DefaultTextFieldVariant,
  prefix,
  suffix,
  showInfo,
  onPressInfo,
  secureTextEntry,
  onPressSuffix,
  autoFocus,
  inputStyles,
  subLabel,
  labelStyle,
  onFocus,
  onBlur,
  ...props
}: TextFieldProps) => {
  const { action, textFieldStyles, contentColor, secure, inputRef } =
    useTextField({
      editable,
      errorMessage,
      successMessage,
      variant,
      secureTextEntry,
      autoFocus,
    });

  return (
    <View style={[styles.wrapper, style]}>
      {label && (
        <View style={styles.label}>
          <Text variant="BodySmallSemibold" style={labelStyle}>
            {label}
            {subLabel && <Text style={styles.subLabel}>{`  ${subLabel}`}</Text>}
          </Text>
          {showInfo && (
            <>
              <Space size={4} />
              <TouchableOpacity onPress={onPressInfo}>
                <Text variant="BodySmallSemibold">ⓘ</Text>
              </TouchableOpacity>
            </>
          )}
        </View>
      )}
      <View style={[styles.textInput, inputStyles, textFieldStyles]}>
        {prefix && (
          <>
            <Text variant="CaptionLargeSemibold" style={contentColor}>
              {prefix}
            </Text>
            <View style={styles.divider} />
          </>
        )}
        <TextInput
          ref={inputRef}
          onFocus={() => {
            action.setFocused(true);
            onFocus?.();
          }}
          onBlur={() => {
            action.setFocused(false);
            onBlur?.();
          }}
          style={[styles.input, inputStyles]}
          placeholder={placeholder}
          placeholderTextColor={colors.textPlaceholder}
          editable={editable}
          secureTextEntry={secure}
          {...props}
        />
        {suffix && (
          <>
            <View style={styles.divider} />
            {typeof onPressSuffix === "function" ? (
              <TouchableOpacity onPress={onPressSuffix}>
                <Text variant="BodySmallBold" style={styles.buttonText}>
                  {suffix}
                </Text>
              </TouchableOpacity>
            ) : (
              <Text variant="CaptionLargeSemibold" style={contentColor}>
                {suffix}
              </Text>
            )}
          </>
        )}
      </View>
      {isNotEmpty(errorMessage) ? (
        <Caption caption={errorMessage} isError style={styles.caption} />
      ) : (
        isNotEmpty(successMessage) && (
          <Caption caption={successMessage} isSuccess style={styles.caption} />
        )
      )}
      {hintText && (
        <Text variant="BodySmallRegular" style={styles.hint}>
          {hintText}
        </Text>
      )}
    </View>
  );
};

export default TextField;
