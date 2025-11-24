import { StyleProp, TextInputProps, TextStyle, ViewStyle } from "react-native";

export type TextFieldVariant = "outline";
export const DefaultTextFieldVariant: TextFieldVariant = "outline";

export type TextFieldProps = TextInputProps & {
  /**
   * The hint text displayed below the text field.
   * Typically used to provide additional guidance or information to the user.
   */
  hintText?: string;
  /**
   * The error message displayed below the text field.
   * This is shown when there is an error related to the input field.
   */
  errorMessage?: string;
  /**
   * The success message displayed below the text field.
   * This is shown when the input value is valid or successful.
   */
  successMessage?: string;
  /**
   * The label text displayed above the text field.
   */
  label?: string;
  /**
   * Custom styles to be applied to the wrapper container of the text field.
   */
  style?: StyleProp<ViewStyle>;
  /**
   * The variant style of the text field.
   * Default is 'outline'.
   */
  variant?: TextFieldVariant;
  prefix?: string;
  suffix?: string;
  showInfo?: boolean;
  onPressInfo?: () => void;
  onPressSuffix?: () => void;
  autoFocus?: boolean;
  inputStyles?: StyleProp<TextStyle>;
  subLabel?: string;
  labelStyle?: StyleProp<TextStyle>;
  onFocus?: () => void;
  onBlur?: () => void;
};
