import PriceDiscount from "../kit/price-discount";
import { getDiscountPrice } from "@/shared/lib/helpers/get-discount-price";

export default function PriceWithDiscount({
  price,
  discount,
}: {
  price: number;
  discount: number;
}) {
    
  const discountPrice = getDiscountPrice({
    price,
    discount,
  });

  return (
    <>
      <PriceDiscount price={price} discount={discount} />
      <span className="text-2xl font-semibold">
        {discountPrice} <span className="text-lg font-semibold">₴</span>
      </span>
    </>
  );
}
