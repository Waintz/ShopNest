import type { ApiSchemas } from "@/shared/api/schema";
import { Badge } from "@/shared/ui/kit/badge";
import ProductCode from "@/shared/ui/kit/product-code";
import ReviewCount from "@/shared/ui/kit/review-count";
import { Skeleton } from "@/shared/ui/kit/skeleton";
import { StarRating } from "@/shared/ui/kit/star-rating";
import { StockStatus } from "@/shared/ui/kit/stock-status";
import { LayoutSection } from "@/shared/ui/layout/layout-section";

export default function ProductInfo({
  productData,
}: {
  productData?: ApiSchemas["Product"];
}) {
  return (
    <LayoutSection>
      {productData ? (
        <div>
          <div className="line-clamp-2">
            <Badge className="float-left mt-1.5 mr-3" />
            <p className="text-3xl font-bold w-[75%]">
              Смартфон Apple iPhone 14 128Gb Midnight
            </p>
          </div>
          <div className="mt-7 flex items-center justify-between">
            <div className="flex items-center gap-10">
              <StockStatus Available={productData.stockQuantity > 0} />
              <div className="flex gap-4">
                <StarRating value={productData.totalStars} className="" />
                <ReviewCount numberOfReviews={productData.totalReviews} />
              </div>
            </div>
            <ProductCode id={productData.id} />
          </div>
        </div>
      ) : (
        <div>
          <Skeleton className="h-10" />
        </div>
      )}
    </LayoutSection>
  );
}
