import { PurchaseBlock } from "@/shared/ui/blocks/purchase-block ";
import { BuyButton } from "@/shared/ui/kit/buy-button";
import { LayoutSection } from "@/shared/ui/layout/layout-section";

export default function ProductBuySection({
  price,
  discount,
}: {
  price: number;
  discount: number;
}) {
  return (
    <LayoutSection>
      <PurchaseBlock renderButton={() => {
        return <BuyButton className="w-full h-15" afterText="Купить" />
      }} price={price} discount={discount} />
    </LayoutSection>
  );
}
