import { GestureResponderEvent, StyleProp, ViewStyle } from "react-native";

export type ButtonSize = "lg" | "md" | "sm";
export const DefaultButtonSize: ButtonSize = "lg";

export type ButtonVariant = "solid" | "soft" | "outline" | "transparent";
export const DefaultButtonVariant: ButtonVariant = "solid";

export type ButtonColor =
  | "primary"
  | "secondary"
  | "tertiary"
  | "warning"
  | "error"
  | "success"
  | "information";
export const DefaultButtonColor: ButtonColor = "primary";

export type ButtonBaseProps = {
  /**
   * Label text of the button.
   */
  label?: string;
  /**
   * Function to execute on press.
   */
  onPress?: (e: GestureResponderEvent) => void;
  /**
   * Disables the button when set to true.
   * Default is false.
   */
  disable?: boolean;
  /**
   * Displays a loading indicator inside the button when set to true.
   * Default is false.
   */
  isLoading?: boolean;
  /**
   * Test identifier for the button.
   * Default is 'button'.
   */
  testID?: string;
};

export type ButtonProps = ButtonBaseProps & {
  /**
   * Size of the button.
   * Determines the overall size of the button, including height and padding.
   * - 'lg': Large size button (default).
   * - 'md': Medium size button.
   * - 'sm': Small size button.
   */
  size?: ButtonSize;
  /**
   * Visual style or variant of the button.
   * Defines the look of the button, such as its background transparency and border.
   * - 'solid': A solid background button (default).
   * - 'soft': A softer, lighter background button.
   * - 'outline': A button with only a border and transparent background.
   * - 'transparent': A button with no background or border, just the label.
   */
  variant?: ButtonVariant;
  /**
   * Color theme of the button.
   * Defines the color scheme of the button based on the selected variant.
   * - 'primary': Primary theme color (default).
   * - 'secondary': Secondary theme color.
   * - 'tertiary': Tertiary theme color.
   * - 'warning': Warning color theme, typically yellow or orange.
   * - 'error': Error color theme, typically red.
   * - 'success': Success color theme, typically green.
   * - 'information': Information color theme, typically blue.
   */
  color?: ButtonColor;
  /**
   * Custom styles to be applied to the button container.
   * This prop allows for overriding the default button styling by passing a custom style object.
   */
  style?: StyleProp<ViewStyle>;
  numberOfLines?: number;
};
