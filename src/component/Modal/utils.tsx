import React from "react";
import { ButtonBaseProps } from "../Button/utils";
import { ImageSourcePropType } from "react-native";

export type ModalProps = {
  /**
   * Determines whether the back button on the android device is allowed to close the modal.
   * Default is true.
   */
  allowBackPress?: boolean;
  /**
   * The content to be displayed within the component.
   * Can include elements, text, numbers, or any other valid React nodes.
   */
  children?: React.ReactNode;
  /**
   * The description text to be displayed within the modal.
   */
  description?: string;
  /**
   * An image to be displayed within the modal.
   * Can be a PNG, JPG, or JPEG file.
   */
  image?: ImageSourcePropType;
  /**
   * Callback function to be invoked when the modal is requested to be closed.
   */
  onRequestClose?: (() => void) | undefined;
  /**
   * Properties for the primary button in the modal.
   */
  primaryButton?: ButtonBaseProps;
  /**
   * Properties for the secondary button in the modal.
   */
  secondaryButton?: ButtonBaseProps;
  /**
   * The title text to be displayed within the modal.
   */
  title?: string;
  /**
   * Controls the visibility of the modal.
   */
  visible?: boolean;
  showClose?: boolean;
  withPadding?: boolean;
};
