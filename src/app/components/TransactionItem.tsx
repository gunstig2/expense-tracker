import { capitalizeFirstLetter } from "../utils";
import { motion, AnimatePresence } from "framer-motion";

type TransactionItemProps = {
  description: string;
  amount: string;
  type: string;
};

export default function TransactionItem({
  description,
  amount,
  type,
}: TransactionItemProps) {
  return (
    <>
      <AnimatePresence>
        <motion.ul
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
        >
          <ul key={description} className="border rounded-md ">
            {type == "income" ? (
              <li className="rounded-md shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] border-r-green-500 border-r-8 flex justify-between p-2">
                {capitalizeFirstLetter(description)} <span>+{amount}</span>
              </li>
            ) : (
              <li className="rounded-md shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] border-r-red-700 border-r-8 flex justify-between p-2">
                {capitalizeFirstLetter(description)} <span>-{amount}</span>
              </li>
            )}
          </ul>
        </motion.ul>
      </AnimatePresence>
    </>
  );
}
