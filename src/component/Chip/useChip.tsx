import { colors, fonts, layout } from '../../styles';
import { baseColor } from '../../styles/theme';
import {
  ChipProps,
  ChipVariantProps,
  DefaultChipColor,
  DefaultChipSize,
  DefaultChipVariant,
} from './utils';

const useChip = ({
  color = DefaultChipColor,
  variant = DefaultChipVariant,
  size = DefaultChipSize,
}: ChipProps) => {
  const isVariant = (variantToCompare: ChipVariantProps) => {
    return variant === variantToCompare;
  };

  const getLabelColor = () => {
    return isVariant('solid') ? colors.backgroundPrimary : baseColor[color];
  };

  const getFontType = () => {
    const fontType = {
      lg: fonts.BodyLargeSemibold,
      md: fonts.BodySmallSemibold,
      sm: fonts.CaptionLargeSemibold,
    };

    return fontType[size];
  };

  const getBackgroundColor = () => {
    const backgroundColor = {
      primary: colors.primary50,
      secondary: colors.secondary25,
      tertiary: colors.tertiary50,
      warning: colors.warning50,
      error: colors.error50,
      success: colors.success25,
      information: colors.information25,
    };

    return isVariant('outline')
      ? colors.backgroundPrimary
      : isVariant('solid')
      ? baseColor[color]
      : backgroundColor[color];
  };

  const getIconSize = () => {
    const iconSize = {
      lg: layout.size6,
      md: layout.size5,
      sm: layout.size4,
    };

    return iconSize[size];
  };

  const labelColor = getLabelColor();
  const fontType = getFontType();
  const backgroundColor = getBackgroundColor();
  const borderColor = isVariant('outline')
    ? baseColor[color]
    : getBackgroundColor();
  const iconSize = getIconSize();

  return {
    labelColor,
    fontType,
    backgroundColor,
    borderColor,
    iconSize,
  };
};

export default useChip;
