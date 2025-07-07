import React from "react";

export interface LayoutProductHeaderContextProps {
  headerHeight: number;
  setHeaderHeight: (height: number) => void;
}

export const LayoutProductHeaderContext = React.createContext<LayoutProductHeaderContextProps | undefined>(undefined);