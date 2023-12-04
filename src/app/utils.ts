export interface Transaction {
  id: string;
  description: string;
  amount: string;
  type: string;
}

export const calculateTotalAmountByType = (
  transactions: Transaction[],
  type: "expense" | "income"
): number => {
  return transactions
    .filter((transaction) => transaction.type === type)
    .reduce(
      (total, transaction) => total + parseFloat(transaction.amount.toString()),
      0
    );
};

export const capitalizeFirstLetter = (inputString: string): string => {
  if (inputString.length === 0) {
    return inputString; // Return the original string if it's empty
  }

  const firstLetter = inputString[0].toUpperCase();
  const restOfString = inputString.slice(1);

  return firstLetter + restOfString;
};
