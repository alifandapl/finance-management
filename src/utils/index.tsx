import { Platform, PlatformOSType } from "react-native";

export const isEmpty = (variable: any) => {
  if (variable === null || variable === undefined) {
    return true;
  }

  if (typeof variable === "object") {
    if (Array.isArray(variable)) {
      return variable.length === 0;
    } else {
      return Object.keys(variable).length === 0;
    }
  }

  if (typeof variable === "string" || Array.isArray(variable)) {
    return variable.length === 0;
  }

  return false;
};

export const isNotEmpty = (variable: any) => {
  return !isEmpty(variable);
};

export const deviceCheck = (device: PlatformOSType) => {
  return device === Platform.OS;
};

export const formatCurrency = (amount: number) => {
  return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
};
