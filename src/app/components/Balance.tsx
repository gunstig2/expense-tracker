'use client'

import AnimatedCounter from "./AnimatedCounter";

type BalanceProps = {
    income: number
    expense: number
}

function calculateBalance(income: number, expense: number){

    const calculation = income - expense; 

    return calculation;
}
export default function Balance(props: BalanceProps) {
    const balance = calculateBalance(props.income, props.expense);
    return (
        <div className="flex flex-col items-center uppercase font-semibold">
        <h2 className="text-l">Your balance</h2>
        {balance >= 0 ? (
        <AnimatedCounter from={0} to={balance} />
      ) : (
        <AnimatedCounter from={0} to={balance} />
      )}
      </div>
    )
   
};
