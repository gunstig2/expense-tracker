"use client";

import React, { useState } from "react";
import Balance from "./components/Balance";
import IncomeExpense from "./components/IncomeExpense";
import TransactionHistory from "./components/TransactionHistory";
import { calculateTotalAmountByType, Transaction } from "./utils";

export default function Home() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  function addTransaction(data: FormData) {
    const transactionObject: Transaction = {
      id: Math.random().toString(),
      description: Object.fromEntries(data).description.toString(),
      amount: Object.fromEntries(data).amount.toString(),
      type: Object.fromEntries(data).type.toString(),
    };
    setTransactions([...transactions, transactionObject]);
  }

  // Calculate total expense
  const totalExpense = calculateTotalAmountByType(transactions, "expense");

  // Calculate total income
  const totalIncome = calculateTotalAmountByType(transactions, "income");

  return (
    <div className="flex flex-col items-center gap-5">
      <h1 className="text-xl">Expense Tracker by Fortuné</h1>

      <Balance income={totalIncome} expense={totalExpense} />

      <IncomeExpense income={totalIncome} expense={totalExpense} />

      <TransactionHistory transactions={transactions} />

      <h2 className="border-b-4 border-black">Add New Transaction</h2>

      <form action={addTransaction} className="w-1/2 flex flex-col gap-4">
        <label className="block">
          <span className="block text-sm font-medium">Description</span>
          <input
            type="text"
            name="description"
            className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-black focus:ring-black block w-full rounded-md sm:text-sm focus:ring-1"
            placeholder="Details of transaction"
            required
            maxLength={30}
          />
        </label>
        <label className="block">
          <span className="block text-sm font-medium">Transaction Amount</span>
          <input
            type="text"
            name="amount"
            className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-black focus:ring-black block w-full rounded-md sm:text-sm focus:ring-1"
            placeholder="Value of transaction"
            required
          />
        </label>

        <fieldset className="flex gap-1">
          <input
            id="income"
            className="peer/income"
            type="radio"
            name="type"
            value="income"
            required
          />
          <label
            htmlFor="income"
            className="peer-checked/income:text-green-500 mr-2"
          >
            Income
          </label>

          <input
            id="expense"
            className="peer/expense"
            type="radio"
            name="type"
            value="expense"
          />
          <label
            htmlFor="expense"
            className="peer-checked/expense:text-red-700"
          >
            Expense
          </label>
        </fieldset>

        <button
          type="submit"
          className="bg-black text-white font-bold p-2 hover:bg-gray-600"
        >
          Add Transaction
        </button>
      </form>
    </div>
  );
}
