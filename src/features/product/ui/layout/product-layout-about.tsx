import React from "react";
import { useLayoutProductHeader } from "../../model/layout-context/use-layout-product-header";

export const ProductLayoutAbout = React.forwardRef<
  HTMLDivElement,
  {
    renderCarousel?: () => React.ReactNode;
    renderProductInfo?: () => React.ReactNode;
    renderProductBuySection?: () => React.ReactNode;
  } & React.HTMLAttributes<HTMLDivElement>
>((props, ref) => {
  const { renderCarousel, renderProductInfo, renderProductBuySection } = props;
  const { headerHeight } = useLayoutProductHeader();

  return (
    <div ref={ref} className="w-full grid grid-cols-[1fr_1.4fr] gap-1">
      <div
        className="w-full bg-white h-250 p-10 sticky"
        style={{ top: `${headerHeight}px` }}
      >
        {renderCarousel && renderCarousel()}
      </div>
      <div className="w-full grid gap-1 grid-rows-[repeat(9,1fr)]">
        {renderProductInfo && renderProductInfo()}
        {renderProductBuySection && renderProductBuySection()}
      </div>
    </div>
  );
});

ProductLayoutAbout.displayName = "ProductLayoutContent";
