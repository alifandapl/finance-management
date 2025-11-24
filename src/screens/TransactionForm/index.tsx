import { ActivityIndicator, Alert, StyleSheet, View } from "react-native";
import { Button, Dropdown, Header, Space, TextField } from "../../component";
import { TRX_CATEGORY, TRX_TYPE } from "./config";
import { useNavigation } from "@react-navigation/native";
import { Controller, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { editTransaction, setTransaction } from "../../store/transactionSlice";
import { currencyConversion } from "../../services/transaction";
import { useEffect, useState } from "react";
import { formatCurrency } from "../../utils";

export default function TransactionFormScreen({ route }: any) {
  const { data } = route.params || {};
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState(false);
  const [convertedAmount, setConvertedAmount] = useState("0");
  const [currency, setCurrency] = useState({});

  const isEdit = data?.id ? true : false;

  const {
    control,
    handleSubmit,
    formState: { isValid },
    getValues,
  } = useForm({
    defaultValues: {
      date: new Date().toISOString(),
      type: isEdit ? TRX_TYPE.find((item) => item.key === data.type) || "" : "",
      category: isEdit
        ? TRX_CATEGORY.find((item) => item.key === data.category) || ""
        : "",
      amount: isEdit ? data.amount.toString() : "",
      description: isEdit ? data.description || "" : "",
    },
  });

  const goBack = () => {
    navigation.goBack();
  };

  const onSubmit = (payload: any) => {
    const transaction = {
      id: new Date().getTime().toString(),
      type: payload?.type?.key || "-",
      category: payload?.category?.key || "-",
      amount: Number(convertedAmount) || 0,
      date: new Date().toISOString(),
      description: payload?.description || "-",
    };

    if (isEdit) {
      transaction.id = data.id;
      dispatch(editTransaction(transaction));
      Alert.alert("Success", "Transaction updated successfully!");
    } else {
      dispatch(setTransaction(transaction));
      Alert.alert("Success", "Transaction added successfully!");
    }

    goBack();
  };

  const getCurrency = async () => {
    setIsLoading(true);
    try {
      const response = await currencyConversion();
      const result = response.data;
      setCurrency(
        Object.entries(result.rates || {}).map(([key, value]) => ({
          key,
          value,
          label: `${key} (${value})`,
        }))
      );
    } catch (error: any) {
      console.log(error.response);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getCurrency();
  }, []);

  return (
    <View style={styles.flex}>
      <Header title={`${isEdit ? "Edit" : "Add"} Transaction`} />
      {isLoading ? (
        <ActivityIndicator size={40} />
      ) : (
        <>
          <View style={styles.container}>
            <Controller
              control={control}
              rules={{
                required: true,
              }}
              render={({ field: { onChange, value } }) => (
                <Dropdown
                  label="Type"
                  list={TRX_TYPE}
                  setValue={onChange}
                  value={value}
                  placeholder="Choose transaction type..."
                />
              )}
              name="type"
            />
            <Controller
              control={control}
              rules={{
                required: true,
              }}
              render={({ field: { onChange, value } }) => (
                <Dropdown
                  label="Category"
                  list={TRX_CATEGORY}
                  setValue={onChange}
                  value={value}
                  placeholder="Choose transaction category..."
                />
              )}
              name="category"
            />
            <View style={styles.row}>
              <View style={styles.flex}>
                <Controller
                  control={control}
                  rules={{
                    required: true,
                  }}
                  render={({ field: { onChange, value } }) => (
                    <Dropdown
                      label="Currency"
                      list={currency}
                      value={value}
                      setValue={(selectedCurrency) => {
                        onChange(selectedCurrency);
                        const amount = Number(getValues("amount")) || 0;
                        const rate = selectedCurrency?.value || 0;
                        setConvertedAmount(String(Math.abs(amount * rate)));
                      }}
                    />
                  )}
                  name="currency"
                />
              </View>
              <View style={styles.flex}>
                <Controller
                  control={control}
                  rules={{
                    required: true,
                  }}
                  render={({ field: { onChange, value } }) => (
                    <TextField
                      label="Amount"
                      onChangeText={(newAmount) => {
                        onChange(newAmount);
                        const currency = getValues("currency");
                        const rate = currency?.value || 0;
                        setConvertedAmount(
                          String(Math.abs(Number(newAmount) * rate))
                        );
                      }}
                      value={value}
                      keyboardType="numeric"
                      placeholder="Input amount"
                    />
                  )}
                  name="amount"
                />
              </View>
            </View>
            <TextField
              label="Conversion"
              prefix="Rp"
              value={formatCurrency(Number(convertedAmount))}
              editable={false}
            />
            <TextField
              label="Date"
              value={new Date().toLocaleDateString()}
              editable={false}
            />
            <Controller
              control={control}
              render={({ field: { onChange, value } }) => (
                <TextField
                  label="Description"
                  subLabel="(optional)"
                  placeholder="You can add your description here"
                  onChangeText={onChange}
                  value={value}
                />
              )}
              name="description"
            />
          </View>
          <View style={styles.buttons}>
            <Button
              label="Cancel"
              variant="outline"
              color="secondary"
              onPress={goBack}
              style={styles.flex}
            />
            <Button
              label="Save"
              style={styles.flex}
              onPress={handleSubmit(onSubmit)}
              disable={!isValid}
            />
          </View>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flex: 1,
    gap: 12,
  },
  flex: { flex: 1 },
  buttons: {
    flexDirection: "row",
    padding: 16,
    gap: 12,
  },
  row: {
    flexDirection: "row",
    gap: 12,
  },
});
