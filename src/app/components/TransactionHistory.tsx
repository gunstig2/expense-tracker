import React from "react";
import TransactionItem from "./TransactionItem";

type TransactionProps = {
  transactions: {
    id: string;
    description: string;
    amount: string;
    type: string;
  }[];
};

export default function TransactionHistory(props: TransactionProps) {
  return (
    <>
      <h2 className="border-b-4 border-black">Transaction History</h2>

      <div className="w-1/2 flex flex-col gap-3 overflow-auto max-h-40 ">
        {props.transactions.length > 0 ? (
          props.transactions.map((transaction) => {
            return <TransactionItem key={transaction.id} {...transaction} />;
          })
        ) : (
          <p className="text-red-700 text-center">No Transactions Found!</p>
        )}
      </div>
    </>
  );
}
