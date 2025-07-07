import { useParams } from "react-router-dom";
import { useProduct } from "./api/use-product";
import { ProductLayout } from "./ui/layout/product-layout";
import { GalleryCarousel } from "@/shared/ui/kit/carousel";
import { ProductLayoutAbout } from "./ui/layout/product-layout-about";
import ProductInfo from "./ui/section/product-info-section";
import { useProductSectionsNavigation } from "./model/use-product-sections-navigation";
import { productTabsData } from "./model/constants";
import ProductBuySection from "./ui/section/product-buy-section";
import { ProductLayoutHeader } from "./ui/layout/product-layout-header";

function ProductPage() {
  const params = useParams<{ productId: string }>();
  const productId: string = String(params.productId);

  const { handleTabClick, refs, activeTab } = useProductSectionsNavigation();

  const { data } = useProduct({ productId });

  return (
    <ProductLayout
      header={
        <ProductLayoutHeader
          activeTab={activeTab}
          onTabClick={handleTabClick}
          tabs={productTabsData}
        />
      }
    >
      <section className="scroll-mt-20" ref={refs.aboutRef}>
        <ProductLayoutAbout
          renderCarousel={() => {
            return (
              data?.imageUrl && (
                <GalleryCarousel
                  autoPlayOpts={{ autoScroll: true, delayScroll: 15000 }}
                  images={data?.imageUrl}
                />
              )
            );
          }}
          renderProductInfo={() => {
            return data && <ProductInfo productData={data} />;
          }}
          renderProductBuySection={() => {
            return data && <ProductBuySection price={data.price} discount={data.discount}   />
          }}
        />
      </section>
    </ProductLayout>
  );
}

export const Component = ProductPage;
