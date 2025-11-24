import {
  Alert,
  FlatList,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { Button, Header, Space, Text } from "../../component";
import { useNavigation } from "@react-navigation/native";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { colors } from "../../styles";
import moment from "moment";
import { formatCurrency } from "../../utils";
import { deleteTransaction } from "../../store/transactionSlice";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function HomeScreen() {
  const dispatch = useAppDispatch();
  const navigation = useNavigation<any>();
  const transaction = useAppSelector((state) => state.transaction);
  const insets = useSafeAreaInsets();

  const handleDeleteTrx = (item: any) => {
    dispatch(deleteTransaction(item.id));
    Alert.alert("Success", "Transaction deleted successfully!");
  };

  const goToTransactionForm = (item: any = {}) => {
    navigation.navigate("TransactionForm", { data: item });
  };

  const ListEmptyComponent = () => (
    <View>
      <Text style={styles.message}>You don't have any transaction yet</Text>
    </View>
  );

  const List = ({ label, value }) => {
    return (
      <View style={styles.list}>
        <Text>{label}: </Text>
        <Text>{value}</Text>
      </View>
    );
  };

  const renderItem = ({ item, index }) => {
    return (
      <TouchableOpacity
        key={index.toString()}
        style={styles.card}
        activeOpacity={0.5}
        onPress={() => goToTransactionForm(item)}
      >
        <List label={"Type"} value={item.type} />
        <List label={"Category"} value={item.category} />
        <List label={"Amount"} value={`Rp${formatCurrency(item.amount)}`} />
        <List
          label={"Date"}
          value={moment(item.date).format("DD MMM Y, HH:mm")}
        />
        <List label={"Note"} value={item.description || "-"} />
        <Button
          size="sm"
          color="error"
          label="Delete"
          style={styles.deleteBtn}
          onPress={() => handleDeleteTrx(item)}
        />
      </TouchableOpacity>
    );
  };

  const ListHeaderComponent = () => {
    return (
      <View>
        <View style={styles.topContent}>
          <View style={styles.bigCard}>
            <Text variant="CaptionLargeBold">Total Income</Text>
            <Text variant="Heading3" style={styles.income}>
              Rp
              {transaction.totalIncome
                ? formatCurrency(transaction.totalIncome)
                : 0}
            </Text>
          </View>
          <View style={styles.bigCard}>
            <Text variant="CaptionLargeBold">Total Expense</Text>
            <Text variant="Heading3" style={styles.expense}>
              Rp
              {transaction.totalExpense
                ? formatCurrency(transaction.totalExpense)
                : 0}
            </Text>
          </View>
        </View>
        <View>
          <Text variant="Heading5">Menu</Text>
          <Space size={12} />
          <View style={styles.menus}>
            <Button
              label="Add Transaction"
              onPress={() => goToTransactionForm()}
            />
          </View>
          <Space size={40} />
          <Text variant="Heading5">Your Transactions</Text>
          <Space size={12} />
        </View>
      </View>
    );
  };

  return (
    <View>
      <Header title="Finance Management" back={false} />
      <FlatList
        data={transaction.data}
        renderItem={renderItem}
        ItemSeparatorComponent={() => <Space size={12} />}
        ListHeaderComponent={ListHeaderComponent}
        ListEmptyComponent={ListEmptyComponent}
        contentContainerStyle={[
          styles.container,
          { paddingBottom: insets.bottom + 20 },
        ]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  list: {
    flexDirection: "row",
  },
  message: {
    textAlign: "center",
    color: colors.textSecondary,
    marginTop: 40,
  },
  menus: {
    flexDirection: "row",
    gap: 12,
  },
  card: {
    padding: 12,
    backgroundColor: colors.white,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.borderDark,
    gap: 4,
  },
  bigCard: {
    padding: 16,
    backgroundColor: colors.white,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.borderDark,
    alignItems: "center",
    gap: 4,
  },
  topContent: {
    gap: 12,
    marginBottom: 40,
  },
  income: {
    color: colors.success500,
  },
  expense: {
    color: colors.error500,
  },
  deleteBtn: {
    alignSelf: "flex-end",
  },
});
