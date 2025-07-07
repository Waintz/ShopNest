import React, { useState, useMemo } from "react";
import { LayoutProductHeaderContext, type LayoutProductHeaderContextProps } from "./layout-product-header-context";

export const LayoutProductHeaderProvider = ({ children }: { children: React.ReactNode }) => {
  const [headerHeight, setHeaderHeight] = useState(80);

  const value = useMemo<LayoutProductHeaderContextProps>(() => ({ headerHeight, setHeaderHeight }), [headerHeight]);

  return (
    <LayoutProductHeaderContext.Provider value={value}>
      {children}
    </LayoutProductHeaderContext.Provider>
  );
};
