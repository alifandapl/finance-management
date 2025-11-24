import { StyleProp, ViewStyle } from 'react-native';

type CheckboxSize = 'lg' | 'md' | 'sm';
export const DefaultCheckboxSize: CheckboxSize = 'lg';

export type CheckboxProps = {
  /**
   * A value that determines whether the checkbox is selected (true) or not (false).
   */
  checked?: boolean;
  /**
   * Size of the checkbox.
   * - 'lg': Large size checkbox (default).
   * - 'md': Medium size checkbox.
   * - 'sm': Small size checkbox.
   */
  size?: CheckboxSize;
  /**
   * Disables the checkbox when set to true.
   * Default is false.
   */
  disable?: boolean;
  /**
   * Function to handle checkbox state change.
   */
  onChange?: (checked: boolean) => void;
  /**
   * The label to display next to the checkbox.
   */
  label?: string;
  /**
   * Custom styles to be applied to the checkbox wrapper.
   */
  style?: StyleProp<ViewStyle>;
  /**
   * Indicates whether there is an error related to the checkbox.
   * Default is false.
   */
  isError?: boolean;
};
