import { StyleProp, ViewStyle } from "react-native";

export type DropdownVariant = "outline";
export const DefaultDropdownVariant: DropdownVariant = "outline";

export type Value = {
  label: string;
  key: string;
};

export const DefaultValue: Value = {
  label: "",
  key: "",
};

export type State = {
  isLoading: boolean;
  isSuccess: boolean;
  isError: boolean;
  message: string;
  data: Value[];
};

export const DefaultState: State = {
  isLoading: false,
  isSuccess: false,
  isError: false,
  message: "",
  data: [],
};

export type DropdownProps = {
  type?: string;
  /**
   * The hint text displayed below the dropdown.
   * Typically used to provide additional guidance or information to the user.
   */
  hintText?: string;
  /**
   * The error message displayed below the dropdown.
   * This is shown when there is an error related to the input field.
   */
  errorMessage?: string;
  /**
   * The success message displayed below the dropdown.
   * This is shown when the input value is valid or successful.
   */
  successMessage?: string;
  /**
   * The label text displayed above the dropdown.
   */
  label?: string;
  /**
   * Custom styles to be applied to the wrapper container of the dropdown.
   */
  style?: StyleProp<ViewStyle>;
  /**
   * The variant style of the dropdown.
   * Default is 'outline'.
   */
  variant?: DropdownVariant;
  prefix?: string;
  suffix?: string;
  showInfo?: boolean;
  onPressInfo?: () => void;
  value?: Value;
  setValue?: (val: Value) => void;
  list?: Value[];
  editable?: boolean;
  placeholder?: string;
  searchPlaceholder?: string;
  onEndReached?: () => void;
  onSearch?: (val: string) => void;
  showSearch?: boolean;
  state?: State;
  minCharacterSearch?: number;
};
