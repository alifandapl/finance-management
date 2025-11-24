import { useState } from 'react';
import {
  ButtonProps,
  ButtonVariant,
  DefaultButtonColor,
  DefaultButtonSize,
  DefaultButtonVariant,
} from './utils';
import { colors, fonts, layout, theme } from '../../styles';

const useButton = ({
  size = DefaultButtonSize,
  variant = DefaultButtonVariant,
  color = DefaultButtonColor,
  disable,
}: ButtonProps) => {
  const [isPressed, setIsPressed] = useState(false);

  const isVariant = (variantToCompare: ButtonVariant) =>
    variant === variantToCompare;

  const getButtonBackgroundColor = () => {
    if (disable) {
      return isVariant('outline') || isVariant('transparent')
        ? colors.transparent
        : colors.backgroundInactive;
    }

    if ((isVariant('outline') || isVariant('transparent')) && !isPressed) {
      return colors.transparent;
    }

    const backgroundColor = {
      primary: {
        solid: colors.primary500,
        soft: colors.primary25,
        outline: colors.transparent,
        transparent: colors.transparent,
      },
      secondary: {
        solid: colors.secondary500,
        soft: colors.secondary50,
        outline: colors.transparent,
        transparent: colors.transparent,
      },
      tertiary: {
        solid: colors.tertiary500,
        soft: colors.tertiary50,
        outline: colors.transparent,
        transparent: colors.transparent,
      },
      warning: {
        solid: colors.warning500,
        soft: colors.warning50,
        outline: colors.transparent,
        transparent: colors.transparent,
      },
      error: {
        solid: colors.error500,
        soft: colors.error50,
        outline: colors.transparent,
        transparent: colors.transparent,
      },
      success: {
        solid: colors.success500,
        soft: colors.success50,
        outline: colors.transparent,
        transparent: colors.transparent,
      },
      information: {
        solid: colors.information500,
        soft: colors.information50,
        outline: colors.transparent,
        transparent: colors.transparent,
      },
    };

    const backgroundColorPressed = {
      primary: {
        solid: colors.primary700,
        soft: colors.primary200,
        outline: colors.primary100,
        transparent: colors.primary100,
      },
      secondary: {
        solid: colors.secondary700,
        soft: colors.secondary200,
        outline: colors.secondary100,
        transparent: colors.secondary100,
      },
      tertiary: {
        solid: colors.tertiary700,
        soft: colors.tertiary200,
        outline: colors.tertiary100,
        transparent: colors.tertiary100,
      },
      warning: {
        solid: colors.warning700,
        soft: colors.warning200,
        outline: colors.warning100,
        transparent: colors.warning100,
      },
      error: {
        solid: colors.error700,
        soft: colors.error200,
        outline: colors.error100,
        transparent: colors.error100,
      },
      success: {
        solid: colors.success700,
        soft: colors.success200,
        outline: colors.success100,
        transparent: colors.success100,
      },
      information: {
        solid: colors.information700,
        soft: colors.information200,
        outline: colors.information100,
        transparent: colors.information100,
      },
    };

    return isPressed
      ? backgroundColorPressed[color][variant]
      : backgroundColor[color][variant];
  };

  const getButtonBorder = () => {
    if (disable) {
      return isVariant('outline')
        ? colors.textInactive
        : isVariant('transparent')
        ? colors.transparent
        : colors.backgroundInactive;
    }

    const buttonBorderColor = {
      primary: colors.primary700,
      secondary: colors.secondary700,
      tertiary: colors.tertiary300,
      warning: colors.warning700,
      error: colors.error700,
      success: colors.success700,
      information: colors.information700,
    };

    return isVariant('outline')
      ? isPressed
        ? buttonBorderColor[color]
        : theme.baseColor[color]
      : getButtonBackgroundColor();
  };

  const getButtonDimensions = () => {
    const dimensions = {
      lg: {
        height: layout.size14,
        paddingHorizontal: layout.spacing6,
        fontType: fonts.BodyLargeSemibold,
      },
      md: {
        height: layout.size12,
        paddingHorizontal: layout.spacing5,
        fontType: fonts.BodySmallSemibold,
      },
      sm: {
        height: layout.size10,
        paddingHorizontal: layout.spacing4,
        fontType: fonts.CaptionLargeSemibold,
      },
    };

    return dimensions[size];
  };

  const getTextColor = () => {
    if (disable) {
      return colors.textInactive;
    }

    if (isVariant('solid')) {
      return colors.backgroundPrimary;
    }

    const textColorPressed = {
      primary: colors.primary700,
      secondary: colors.secondary700,
      tertiary: colors.tertiary700,
      warning: colors.warning700,
      error: colors.error700,
      success: colors.success700,
      information: colors.information700,
    };

    return isPressed ? textColorPressed[color] : theme.baseColor[color];
  };

  const getIconSize = () => {
    const iconSize = {
      lg: layout.size7,
      md: layout.size6,
      sm: layout.size5,
    };

    return iconSize[size];
  };

  const backgroundColor = getButtonBackgroundColor();
  const borderColor = getButtonBorder();
  const { height, paddingHorizontal, fontType } = getButtonDimensions();
  const textColor = getTextColor();
  const iconSize = getIconSize();

  return {
    backgroundColor,
    borderColor,
    height,
    paddingHorizontal,
    fontType,
    textColor,
    iconSize,
    action: {
      setIsPressed,
    },
  };
};

export default useButton;
