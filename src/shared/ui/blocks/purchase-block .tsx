import clsx from "clsx";
import FavoriteButton from "../kit/favorite-button";
import PriceWithDiscount from "./price-with-discount";

export function PurchaseBlock({
  price,
  discount,
  renderButton,
  className,
}: {
  price: number;
  discount: number;
  renderButton?: () => React.ReactNode;
  className?: string;
}) {
  return (
    <div className={clsx('bg-white', className)}>
      <div className="flex items-center justify-between">
        <div>
          <PriceWithDiscount discount={discount} price={price} />
        </div>
        <div>
          <FavoriteButton />
        </div>
      </div>
      <div className="mt-3">
        {renderButton && renderButton()}
      </div>
    </div>
  );
}
