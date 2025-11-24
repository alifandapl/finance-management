import { TextProps as RNTextProps } from "react-native";
import { fonts } from "../../styles";

type TextVariant =
  | "Heading1"
  | "Heading2"
  | "Heading3"
  | "Heading4"
  | "Heading5"
  | "Heading6"
  | "BodyLargeRegular"
  | "BodyLargeSemibold"
  | "BodyLargeBold"
  | "BodyLargeItalic"
  | "BodyLargeUnderline"
  | "BodyLargeUnderlineSemibold"
  | "BodyLargeUnderlineBold"
  | "BodySmallRegular"
  | "BodySmallSemibold"
  | "BodySmallBold"
  | "BodySmallItalic"
  | "BodySmallUnderline"
  | "BodySmallUnderlineSemibold"
  | "BodySmallUnderlineBold"
  | "CaptionLargeRegular"
  | "CaptionLargeSemibold"
  | "CaptionLargeBold"
  | "CaptionLargeItalic"
  | "CaptionLargeUnderline"
  | "CaptionLargeUnderlineSemibold"
  | "CaptionLargeUnderlineBold"
  | "CaptionSmallRegular"
  | "CaptionSmallSemibold"
  | "CaptionSmallBold"
  | "CaptionSmallItalic"
  | "CaptionSmallUnderline"
  | "CaptionSmallUnderlineSemibold"
  | "CaptionSmallUnderlineBold";

export const DefaultTextVariant: TextVariant = "BodySmallRegular";

export type TextProps = RNTextProps & {
  /**
   * The variant of typography to apply to the text.
   * Check the @fonts file for more details about each style.
   */
  variant?: TextVariant;
};
