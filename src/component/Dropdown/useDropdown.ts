import { useEffect, useState } from 'react';
import {
  DefaultDropdownVariant,
  DefaultValue,
  DropdownProps,
  DropdownVariant,
  Value,
} from './utils';
import { colors } from '../../styles';
import { isNotEmpty } from '../../utils';

const useDropdown = ({
  editable,
  errorMessage,
  successMessage,
  variant = DefaultDropdownVariant,
  value = DefaultValue,
  setValue,
  onSearch,
  list,
  state,
  minCharacterSearch,
}: DropdownProps) => {
  const initialValue = value || DefaultValue;
  const [data, setData] = useState([DefaultValue]);
  const [search, setSearch] = useState('');
  const [focused, setFocused] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [selectedValue, setSelectedValue] = useState<Value>(initialValue);
  const [isLoading, setIsLoading] = useState(false);

  const isVariant = (variantToCompare: DropdownVariant) =>
    variant === variantToCompare;

  const handleSearch = (val: string) => {
    setSearch(val);
    if (onSearch) {
      if (minCharacterSearch) {
        if (val.length > 0 && val.length <= minCharacterSearch) {
          setIsLoading(true);
        }
      }
      onSearch(val);
    }
  };

  const handleSelectOption = (item: Value) => {
    setSelectedValue(item);
  };

  const handleSave = () => {
    if (selectedValue.key !== initialValue.key && setValue) {
      setValue(selectedValue);
    }
    setSearch('');
    setShowModal(false);
    if (onSearch) {
      onSearch('');
    }
  };

  const handleCancel = () => {
    setSelectedValue(initialValue);
    setSearch('');
    setShowModal(false);
    if (onSearch) {
      onSearch('');
    }
  };

  const getTextFieldBackgroundColor = () => {
    if (!editable) {
      return colors.backgroundInactive;
    }

    return isVariant('outline')
      ? colors.backgroundPrimary
      : colors.backgroundSecondary;
  };

  const getTextFieldBorderColor = () => {
    if (isNotEmpty(errorMessage)) {
      return colors.error500;
    } else if (isNotEmpty(successMessage)) {
      return colors.success500;
    }

    return isVariant('outline') ? colors.borderDark : colors.backgroundInactive;
  };

  const getContentColor = () => ({
    color: editable ? colors.textPrimary : colors.textInactive,
  });

  const backgroundColor = getTextFieldBackgroundColor();
  const borderColor = getTextFieldBorderColor();
  const searchBorderColor = focused ? colors.primary500 : colors.borderDark;
  const contentColor = getContentColor();
  const textFieldStyles = {
    backgroundColor,
    borderColor,
  };
  const searchFieldStyles = {
    borderColor: searchBorderColor,
  };

  useEffect(() => {
    setData(state?.data || list || [DefaultValue]);
    if (state) {
      setIsLoading(state.isLoading);
    }
  }, []);

  useEffect(() => {
    if (state) {
      setData(state.data || []);
      setIsLoading(state.isLoading);
    }
  }, [state]);

  return {
    action: {
      setShowModal,
      handleSearch,
      handleSelectOption,
      handleSave,
      handleCancel,
      setFocused,
    },
    textFieldStyles,
    searchFieldStyles,
    contentColor,
    search,
    focused,
    showModal,
    selectedValue,
    data,
    isLoading,
  };
};

export default useDropdown;
