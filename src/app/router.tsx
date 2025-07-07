import { createBrowserRouter, redirect } from "react-router-dom";
import { Providers } from "./providers";
import { App } from "./App";
import { ROUTES } from "@/shared/model/routes";
import { ProtectedRoute } from "./protected-route";
import AppHeader from "@/features/header";
import { protectedLoader } from "./protected-loader";
import { PurchaseBlock } from "@/shared/ui/blocks/purchase-block ";

export const router = createBrowserRouter([
  {
    element: (
      <Providers>
        <App />
      </Providers>
    ),
    children: [
      {
        loader: protectedLoader,
        element: (
          <>
            <AppHeader />
            <ProtectedRoute />
          </>
        ),
        children: [
          {
            path: ROUTES.PRODUCTS,
            lazy: () => import("@/features/products-list/products-list.page"),
          },
          {
            path: ROUTES.PRODUCT,
            lazy: () => import("@/features/product/product.page"),
          },
          {
            element: <PurchaseBlock discount={25} price={100} />,
            path: 'test',
          }
        ],
      },
      {
        path: ROUTES.HOME,
        loader: () => redirect(ROUTES.PRODUCTS),
      },
    ],
  },
]);
