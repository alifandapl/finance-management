import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TRX_TYPE } from "../screens/TransactionForm/config";

interface ITransaction {
  id: string;
  type: string;
  category: string;
  amount: number;
  date: string;
  description?: string;
}

type Props = {
  data: ITransaction[];
  totalIncome: number;
  totalExpense: number;
};

const initialState: Props = {
  data: [],
  totalIncome: 0,
  totalExpense: 0,
};

const transactionSlice = createSlice({
  name: "transaction",
  initialState,
  reducers: {
    setTransaction(state, action: PayloadAction<ITransaction>) {
      if (!state.data) {
        state.data = [];
        state.totalIncome = 0;
        state.totalExpense = 0;
      }
      state.data = [...state.data, action.payload];
      if (action.payload.type === TRX_TYPE[0].key) {
        state.totalIncome = state.totalIncome + action.payload.amount;
      } else {
        state.totalExpense = state.totalExpense + action.payload.amount;
      }
    },
    editTransaction(state, action: PayloadAction<ITransaction>) {
      const index = state.data.findIndex(
        (item) => item.id === action.payload.id
      );
      if (index !== -1) {
        const oldTransaction = state.data[index];
        if (oldTransaction.type === TRX_TYPE[0].key) {
          state.totalIncome -= oldTransaction.amount;
        } else {
          state.totalExpense -= oldTransaction.amount;
        }
        state.data[index] = action.payload;
        if (action.payload.type === TRX_TYPE[0].key) {
          state.totalIncome += action.payload.amount;
        } else {
          state.totalExpense += action.payload.amount;
        }
      }
    },
    deleteTransaction(state, action: PayloadAction<string>) {
      const index = state.data.findIndex(item => item.id === action.payload);
      if (index !== -1) {
        const transaction = state.data[index];
        if (transaction.type === TRX_TYPE[0].key) {
          state.totalIncome -= transaction.amount;
        } else {
          state.totalExpense -= transaction.amount;
        }
        state.data.splice(index, 1);
      }
    },
  },
});

export const { setTransaction, editTransaction, deleteTransaction } = transactionSlice.actions;
export default transactionSlice.reducer;
