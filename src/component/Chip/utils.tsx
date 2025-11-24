import { StyleProp, ViewStyle } from 'react-native';

type ChipSizeProps = 'lg' | 'md' | 'sm';
export const DefaultChipSize: ChipSizeProps = 'lg';

export type ChipVariantProps = 'outline' | 'solid' | 'soft';
export const DefaultChipVariant: ChipVariantProps = 'outline';

type ChipColorProps =
  | 'primary'
  | 'secondary'
  | 'tertiary'
  | 'information'
  | 'success'
  | 'warning'
  | 'error';
export const DefaultChipColor: ChipColorProps = 'primary';

export type ChipProps = {
  /**
   * The text label displayed inside the chip.
   */
  label?: string;
  /**
   * The size of the chip.
   * Options:
   * - 'lg': Large chip (default).
   * - 'md': Medium chip.
   * - 'sm': Small chip.
   */
  size?: ChipSizeProps;
  /**
   * The visual variant of the chip.
   * Options:
   * - 'outline': Chip with an outline border (default).
   * - 'solid': Chip with a solid background.
   * - 'soft': Chip with a lighter, softer background.
   */
  variant?: ChipVariantProps;
  /**
   * The color theme of the chip.
   * Options:
   * - 'primary': Primary theme color (default).
   * - 'secondary': Secondary theme color.
   * - 'tertiary': Tertiary theme color.
   * - 'warning': Warning color theme, typically yellow or orange.
   * - 'error': Error color theme, typically red.
   * - 'success': Success color theme, typically green.
   * - 'information': Information color theme, typically blue.
   */
  color?: ChipColorProps;
  /**
   * Determines whether to display a close icon in the chip.
   * If true, a close icon will be shown.
   * Default is false.
   */
  close?: boolean;
  /**
   * Callback function triggered when the close icon is pressed.
   * Required if `close` is true.
   */
  onPressClose?: () => void;
  /**
   * Custom style for the chip wrapper.
   */
  style?: StyleProp<ViewStyle>;
};
