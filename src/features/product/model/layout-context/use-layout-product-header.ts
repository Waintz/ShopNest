import { useContext } from "react";
import { LayoutProductHeaderContext, type LayoutProductHeaderContextProps  } from "./layout-product-header-context";

export const useLayoutProductHeader = (): LayoutProductHeaderContextProps => {
  const context = useContext(LayoutProductHeaderContext);
  if (!context) {
    throw new Error("useLayoutProductHeader must be used within LayoutProductHeaderProvider");
  }
  return context;
};
