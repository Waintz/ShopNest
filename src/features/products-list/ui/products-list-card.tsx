import type { ApiSchemas } from "@/shared/api/schema";
import { ROUTES } from "@/shared/model/routes";
import PriceWithDiscount from "@/shared/ui/blocks/price-with-discount";
import { Badge } from "@/shared/ui/kit/badge";
import { BuyButton } from "@/shared/ui/kit/buy-button";
import { GalleryCarousel } from "@/shared/ui/kit/carousel";
import ProductCode from "@/shared/ui/kit/product-code";
import ReviewCount from "@/shared/ui/kit/review-count";
import { CompactStarRating } from "@/shared/ui/kit/star-rating";
import { href, Link } from "react-router-dom";

interface ProductsListCardProps {
  product: ApiSchemas["Product"];
}

export function ProductsListCard({ product }: ProductsListCardProps) {
  return (
    <div className="flex px-4 flex-col bg-white">
      <ProductCode id={product.id} />
      <div className="h-70 flex items-center justify-center">
        <GalleryCarousel
          className="h-70"
          images={product.imageUrl}
          nextPage={false}
          previousPage={false}
        />
      </div>
      <div className="mt-2 pt-1 relative">
        <Badge className="float-left mt-0.5 mr-2 w-15" />
        <Link to={href(ROUTES.PRODUCT, { productId: String(product.id) })}>
          Смартфон Apple iPhone 14 128Gb Midnight
        </Link>
      </div>
      <div className="mt-1 flex items-center gap-4">
        <div className="flex items-center gap-1">
          <CompactStarRating value={product.totalStars} widthStar={20} />
          <span className="opacity-50">{product.totalStars}</span>
        </div>
        <div>
          <ReviewCount
            numberOfReviews={product.totalReviews}
            className="w-12"
          />
        </div>
      </div>
      <div className="flex items-center justify-between py-2 mt-4">
        <div>
          <PriceWithDiscount
            discount={product.discount}
            price={product.price}
          />
        </div>
        <div>
          <BuyButton className="p-2" />
        </div>
      </div>
    </div>
  );
}
