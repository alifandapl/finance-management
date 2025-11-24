import { colors, fonts, layout } from '../../styles';
import { CheckboxProps, DefaultCheckboxSize } from './utils';

const useCheckbox = ({
  checked,
  size = DefaultCheckboxSize,
  disable,
  isError,
}: CheckboxProps) => {
  const getboxSize = () => {
    const boxSize = {
      lg: layout.size7,
      md: layout.size6,
      sm: layout.size5,
    };

    return boxSize[size];
  };

  const getIconSize = () => {
    const iconSize = {
      lg: layout.size6,
      md: layout.size5,
      sm: layout.size4,
    };

    return iconSize[size];
  };

  const getLabelSize = () => {
    const labelSize = {
      lg: fonts.BodyLargeRegular,
      md: fonts.BodySmallRegular,
      sm: fonts.CaptionLargeRegular,
    };

    return labelSize[size];
  };

  const getBoxBorderRadius = () => {
    const borderRadius = {
      lg: layout.radius3,
      md: 5, // radius 2.5
      sm: layout.radius2,
    };

    return borderRadius[size];
  };

  const getCheckboxBackgroundColor = () => {
    return disable
      ? colors.backgroundInactive
      : checked
      ? colors.primary500
      : colors.backgroundPrimary;
  };

  const getCheckboxBorderColor = () => {
    if (disable) {
      return colors.textInactive;
    }
    if (isError) {
      return colors.error500;
    }
    if (checked) {
      return colors.primary300;
    }

    return colors.textInactive;
  };

  const getIconColor = () => {
    return disable ? colors.textInactive : colors.backgroundPrimary;
  };

  const boxSize = getboxSize();
  const iconSize = getIconSize();
  const labelSize = getLabelSize();
  const borderRadius = getBoxBorderRadius();
  const backgroundColor = getCheckboxBackgroundColor();
  const borderColor = getCheckboxBorderColor();
  const iconColor = getIconColor();

  return {
    boxSize,
    iconSize,
    labelSize,
    borderRadius,
    backgroundColor,
    borderColor,
    iconColor,
  };
};

export default useCheckbox;
