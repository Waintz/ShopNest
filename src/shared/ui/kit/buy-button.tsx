import { LucideShoppingBasket } from "lucide-react";
import clsx from "clsx";

export function BuyButton({
  className,
  beforeText,
  afterText,
}: {
  className?: string;
  beforeText?: string;
  afterText?: string;
}) {
  return (
    <>
      <button
        className={clsx(
          "bg-green-500 flex gap-2 justify-center items-center rounded-xl hover:bg-orange-500 transition-colors duration-500 cursor-pointer text-white",
          className
        )}
      >
        {beforeText && <span className="font-medium">{beforeText}</span>}
        <LucideShoppingBasket />
        {afterText && <span className="font-medium">{afterText}</span>}
      </button>
    </>
  );
}
