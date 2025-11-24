import React, { useEffect, useState } from "react";
import {
  Dimensions,
  Image,
  Keyboard,
  Modal as RNModal,
  Platform,
  ScrollView,
  TouchableOpacity,
  View,
} from "react-native";
import { ModalProps } from "./utils";
import styles from "./styles";
import Space from "../Space";
import { colors, layout } from "../../styles";
import Button from "../Button";
import Text from "../Text";
import { Feather } from "@expo/vector-icons";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const { height } = Dimensions.get("window");

const Modal = ({
  allowBackPress = true,
  children,
  description,
  image,
  onRequestClose,
  primaryButton,
  secondaryButton,
  title,
  visible,
  showClose,
  withPadding,
}: ModalProps) => {
  const insets = useSafeAreaInsets();
  const [keyboardVisible, setKeyboardVisible] = useState(false);

  useEffect(() => {
    const showEvt =
      Platform.OS === "ios" ? "keyboardWillShow" : "keyboardDidShow";
    const hideEvt =
      Platform.OS === "ios" ? "keyboardWillHide" : "keyboardDidHide";

    const showSub = Keyboard.addListener(showEvt, () =>
      setKeyboardVisible(true)
    );
    const hideSub = Keyboard.addListener(hideEvt, () =>
      setKeyboardVisible(false)
    );

    return () => {
      showSub.remove();
      hideSub.remove();
    };
  }, []);

  const childrenStyle = [
    withPadding && styles.childrenWrapper,
    keyboardVisible && { maxHeight: height * 0.5 },
  ];
  return (
    <>
      <RNModal
        visible={visible}
        transparent
        statusBarTranslucent
        animationType="fade"
      >
        <View style={styles.backdrop} />
      </RNModal>
      <RNModal
        visible={visible}
        transparent
        statusBarTranslucent
        animationType="slide"
        onRequestClose={allowBackPress ? onRequestClose : undefined}
      >
        <TouchableOpacity
          style={styles.flex}
          onPress={onRequestClose}
          activeOpacity={1}
        />
        <View>
          <View style={styles.modal}>
            <Space size={16} />
            {image && (
              <View style={styles.imageWrapper}>
                <Image
                  source={image}
                  style={styles.image}
                  resizeMode="contain"
                />
              </View>
            )}
            <View style={styles.titleWrapper}>
              {title && (
                <Text
                  variant="Heading6"
                  style={[styles.title, !showClose && styles.centeredText]}
                >
                  {title}
                </Text>
              )}
              {showClose && (
                <TouchableOpacity onPress={onRequestClose} style={styles.close}>
                  <Feather name="x" size={25} color={colors.textPrimary} />
                </TouchableOpacity>
              )}
            </View>
            {description && (
              <Text variant="BodySmallRegular" style={styles.description}>
                {description}
              </Text>
            )}
            <View style={childrenStyle as any}>
              {children}
            </View>
            {(primaryButton || secondaryButton) && (
              <View style={styles.buttonWrapper}>
                {secondaryButton && (
                  <Button
                    size="md"
                    color="tertiary"
                    variant="outline"
                    style={styles.flex}
                    numberOfLines={1}
                    {...secondaryButton}
                  />
                )}
                {primaryButton && secondaryButton && (
                  <Space size={layout.size5} />
                )}
                {primaryButton && (
                  <Button
                    size="md"
                    style={styles.flex}
                    numberOfLines={1}
                    {...primaryButton}
                  />
                )}
              </View>
            )}
            <View style={{ height: insets.bottom }} />
          </View>
        </View>
      </RNModal>
    </>
  );
};

export default Modal;
