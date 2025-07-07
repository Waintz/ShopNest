import { LayoutProductHeaderProvider } from "@/features/product";

export function AppProviders({ children }: { children: React.ReactNode }) {
  return <LayoutProductHeaderProvider>{children}</LayoutProductHeaderProvider>;
}
