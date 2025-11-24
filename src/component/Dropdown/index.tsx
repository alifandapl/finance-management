import React, { useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import styles from "./styles";
import {
  DefaultDropdownVariant,
  DefaultValue,
  DropdownProps,
  Value,
} from "./utils";
import useDropdown from "./useDropdown";
import Text from "../Text";
import { isEmpty, isNotEmpty } from "../../utils";
import Caption from "../Caption";
import Space from "../Space";
import Modal from "../Modal";
import { Feather } from "@expo/vector-icons";
import { colors } from "../../styles";
import DateTimePicker from "@react-native-community/datetimepicker";

const Dropdown = ({
  type = "default",
  editable = true,
  hintText,
  errorMessage,
  successMessage,
  label = "Label",
  placeholder = "Placeholder...",
  searchPlaceholder = "Cari...",
  style,
  variant = DefaultDropdownVariant,
  prefix,
  suffix,
  showInfo,
  onPressInfo,
  value = DefaultValue,
  setValue,
  list = [DefaultValue],
  onEndReached,
  onSearch,
  showSearch = false,
  state,
  minCharacterSearch = 1,
}: DropdownProps) => {
  const {
    action,
    textFieldStyles,
    searchFieldStyles,
    contentColor,
    search,
    showModal,
    selectedValue,
    data,
    isLoading,
  } = useDropdown({
    editable,
    errorMessage,
    successMessage,
    variant,
    value,
    setValue,
    onSearch,
    list,
    state,
    minCharacterSearch,
  });

  const [modalDate, setModalDate] = useState(false);

  const handleOnPress = () => {
    if (type === "datepicker") {
      setModalDate(true);
    } else {
      action.setShowModal(true);
    }
  };

  return (
    <View style={[styles.wrapper, style]}>
      <View style={styles.label}>
        <Text variant="BodySmallSemibold">{label}</Text>
        {showInfo && (
          <>
            <Space size={4} />
            <TouchableOpacity onPress={onPressInfo}>
              <Text variant="BodySmallSemibold">ⓘ</Text>
            </TouchableOpacity>
          </>
        )}
      </View>
      <TouchableOpacity
        style={[styles.textInput, textFieldStyles]}
        onPress={handleOnPress}
        disabled={!editable}
      >
        {prefix && (
          <>
            <Text variant="CaptionLargeSemibold" style={contentColor}>
              {prefix}
            </Text>
            <View style={styles.divider} />
          </>
        )}
        <View style={styles.flex}>
          <Text
            variant="BodySmallRegular"
            style={isEmpty(value?.key) && styles.placeholder}
            numberOfLines={1}
            ellipsizeMode="tail"
          >
            {isEmpty(value?.key) ? placeholder : value.label}
          </Text>
        </View>
        <Feather name="chevron-down" size={16} style={styles.iconRight} />
        {suffix && (
          <>
            <View style={styles.divider} />
            <Text variant="CaptionLargeSemibold" style={contentColor}>
              {suffix}
            </Text>
          </>
        )}
      </TouchableOpacity>
      {isNotEmpty(errorMessage) ? (
        <Caption caption={errorMessage} isError style={styles.caption} />
      ) : (
        isNotEmpty(successMessage) && (
          <Caption caption={successMessage} isSuccess style={styles.caption} />
        )
      )}
      {hintText && (
        <Text variant="BodySmallRegular" style={styles.hint}>
          {hintText}
        </Text>
      )}
      <Modal
        visible={showModal}
        title={label}
        onRequestClose={() => action.setShowModal(false)}
        primaryButton={{
          label: "Save",
          onPress: action.handleSave,
          disable: isEmpty(selectedValue.label),
        }}
        secondaryButton={{
          label: "Back",
          onPress: action.handleCancel,
        }}
      >
        <View style={styles.modalWrapper}>
          {showSearch && (
            <View style={[styles.searchWrapper, searchFieldStyles]}>
              <Feather name="search" size={16} color={colors.textSecondary} />
              <Space />
              <TextInput
                value={search}
                onChangeText={action.handleSearch}
                onFocus={() => action.setFocused(true)}
                onBlur={() => action.setFocused(false)}
                style={styles.search}
                placeholder={searchPlaceholder}
                placeholderTextColor={colors.textPlaceholder}
              />
              <Space />
              {search.length > 0 && (
                <TouchableOpacity onPress={() => action.handleSearch("")}>
                  <Feather
                    name="x-circle"
                    size={16}
                    color={colors.textSecondary}
                  />
                </TouchableOpacity>
              )}
            </View>
          )}
          {search.length > 0 && search.length < minCharacterSearch && (
            <Caption caption={`Minimal ${minCharacterSearch} karakter`} />
          )}
          {isLoading ? (
            <View style={[styles.list, styles.loading]}>
              <ActivityIndicator size={40} />
            </View>
          ) : (
            <FlatList
              data={data}
              nestedScrollEnabled
              style={styles.list}
              onEndReached={onEndReached}
              keyExtractor={(item: Value) => item.key}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.option}
                  onPress={() => action.handleSelectOption(item)}
                >
                  <Text variant="BodySmallRegular">{item.label}</Text>
                  <Space />
                  {item.key === selectedValue.key && (
                    <Feather
                      name="check-circle"
                      size={16}
                      color={colors.primary500}
                    />
                  )}
                </TouchableOpacity>
              )}
              ListEmptyComponent={() => (
                <Text variant="BodySmallRegular" style={styles.option}>
                  Data tidak ditemukan
                </Text>
              )}
            />
          )}
        </View>
      </Modal>
      <Modal visible={modalDate} onRequestClose={() => setModalDate(false)}>
        <DateTimePicker value={value} onChange={setValue} />
      </Modal>
    </View>
  );
};

export default Dropdown;
