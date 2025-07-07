import React from "react";

export function ProductLayout({
  header,
  children,
}: {
  header: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div className="container mx-auto px-10 gap-1 grid">
      {header}
      {children}
    </div>
  );
}