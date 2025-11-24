import axios from "axios";

export const currencyConversion = () => {
  return axios({
    method: "GET",
    url: "https://api.exchangerate-api.com/v4/latest/IDR",
  });
};
