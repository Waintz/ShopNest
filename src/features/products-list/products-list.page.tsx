import { useProductsList } from "./model/use-products-list";
import { ProductsListCard } from "./ui/products-list-card";
import {
  ProductslistLayout,
  ProductsListLayoutContent,
} from "./ui/products-list-layout";

function ProductsListPage() {
  const productsQuery = useProductsList({ limit: 10 });

  return (
    <div>
      <ProductslistLayout>
        <ProductsListLayoutContent
          isEmpty={productsQuery.products.length === 0}
          isPending={productsQuery.isPending}
          isPendingNext={productsQuery.isFetchingNextPage}
          hasCursor={productsQuery.hasNextPage}
          children
          cursorRef={productsQuery.cursorRef}
          render={() => {
            return (
              <>
                {productsQuery.products.map((product) => {
                  return (
                    <ProductsListCard key={product.id} product={product} />
                  );
                })}
              </>
            );
          }}
        />
      </ProductslistLayout>
    </div>
  );
}

export const Component = ProductsListPage;
