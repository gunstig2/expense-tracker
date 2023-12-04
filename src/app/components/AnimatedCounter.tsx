import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { useEffect, useRef } from "react";

type CounterProps = {
  from: number;
  to: number;
};

export default function AnimatedCounter({ from, to }: CounterProps) {
  const count = useMotionValue(from);
  const rounded = useTransform(count, (latest) => {
    return Math.round(latest);
  });
  const ref = useRef(null);
  const inView = useInView(ref);

  // while in view animate the count
  useEffect(() => {
    if (inView) {
      animate(count, to, { duration: 2 });
    }
  }, [count, inView, to]);

  const color = to >= from ? "text-green-500" : "text-red-700";

  return (
    <motion.span ref={ref} className={color}>
      {rounded}
    </motion.span>
  );
}
