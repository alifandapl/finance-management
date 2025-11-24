import React from "react";
import { Text, View } from "react-native";
import { CaptionProps } from "./utils";
import styles from "./styles";
import useCaption from "./useCaption";

const Caption = ({ caption, isError, isSuccess, style }: CaptionProps) => {
  const { color } = useCaption({ isError, isSuccess });

  return (
    <View style={style}>
      <View style={styles.captionWrapper}>
        <Text style={[styles.caption, { color }]}>{caption}</Text>
      </View>
    </View>
  );
};

export default Caption;
