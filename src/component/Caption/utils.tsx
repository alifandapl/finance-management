import { StyleProp, ViewStyle } from "react-native";

export type CaptionProps = {
  /**
   * The text to be displayed as the caption, typically below a text area or form input.
   * It can be used to show helpful information, warnings, or error messages.
   */
  caption?: string;
  /**
   * Indicates whether the caption should display an error state.
   * If set to true, the caption will use an error color.
   */
  isError?: boolean;
  /**
   * Indicates whether the caption should display a success state.
   * If set to true, the caption will use a success color.
   */
  isSuccess?: boolean;
  /**
   * Custom styles to be applied to the caption wrapper.
   */
  style?: StyleProp<ViewStyle>;
};
