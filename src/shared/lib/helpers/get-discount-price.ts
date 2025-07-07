export function getDiscountPrice({price, discount}: {
    price: number;
    discount: number;
}) {
    const discountPrice = Math.floor(
    price * (1 - discount / 100)
  );

  return discountPrice;
}
