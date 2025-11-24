import { useEffect, useRef, useState } from 'react';
import {
  DefaultTextFieldVariant,
  TextFieldProps,
  TextFieldVariant,
} from './utils';
import { colors } from '../../styles';
import { isNotEmpty } from '../../utils';
import { TextInput } from 'react-native';

const useTextField = ({
  editable,
  errorMessage,
  successMessage,
  variant = DefaultTextFieldVariant,
  secureTextEntry,
  autoFocus,
}: TextFieldProps) => {
  const [focused, setFocused] = useState(false);
  const [secure, setSecure] = useState(secureTextEntry);
  const inputRef = useRef<TextInput>(null);

  const isVariant = (variantToCompare: TextFieldVariant) =>
    variant === variantToCompare;

  const getTextFieldBackgroundColor = () => {
    if (!editable) {
      return colors.backgroundInactive;
    }

    return isVariant('outline')
      ? colors.backgroundPrimary
      : colors.backgroundSecondary;
  };

  const getTextFieldBorderColor = () => {
    if (focused) {
      return colors.primary500;
    } else if (isNotEmpty(errorMessage)) {
      return colors.error500;
    } else if (isNotEmpty(successMessage)) {
      return colors.success500;
    }

    return isVariant('outline') ? colors.borderDark : colors.backgroundInactive;
  };

  const getContentColor = () => ({
    color: editable ? colors.textPrimary : colors.textInactive,
  });

  const backgroundColor = getTextFieldBackgroundColor();
  const borderColor = getTextFieldBorderColor();
  const contentColor = getContentColor();
  const textFieldStyles = {
    backgroundColor,
    borderColor,
  };

  useEffect(() => {
    if (autoFocus && inputRef.current) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    }
  }, []);

  return {
    action: { setFocused, setSecure },
    textFieldStyles,
    contentColor,
    secure,
    inputRef,
  };
};

export default useTextField;
