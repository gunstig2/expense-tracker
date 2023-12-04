type BalanceProps = {
  income: number;
  expense: number;
};

export default function IncomeExpense(props: BalanceProps) {
  return (
    <div className="grid grid-cols-2 shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] py-4 uppercase font-semibold divide-x-2 divide-black">
      <div className="flex flex-col items-center px-7">
        <h3>Income</h3>
        <p className="text-green-500">€{props.income}</p>
      </div>

      <div className="flex flex-col items-center">
        <h3>Expense</h3>
        <p className="text-red-700">€{props.expense}</p>
      </div>
    </div>
  );
}
