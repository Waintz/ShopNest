type ProductslistLayoutProps = {
  children: React.ReactNode;
}

export function ProductslistLayout({
  children
}: ProductslistLayoutProps) {
  return (
    <div className="container mx-auto p-4 gap-6">
      {children}
    </div>
  )
}

export function ProductsListLayoutContent({
  children,
  isPending,
  isPendingNext,
  cursorRef,
  hasCursor,
  render,
}: {
  children: React.ReactNode;
  isEmpty: boolean;
  isPending: boolean;
  isPendingNext?: boolean;
  cursorRef?: React.RefCallback<HTMLDivElement>;
  hasCursor?: boolean;
  render: () => React.ReactNode;
}) {
  return (

    <div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-5 gap-6">
        {render()}
      </div>

      {!isPending && children}
      
      {hasCursor ? (
        <div ref={cursorRef} className="text-center py-8"></div>
      ) : (
        <div className="text-center py-10">Товары не найдены</div>
      )}
      {isPendingNext && <div className="text-center py-10">Загрузка товаров...</div>}

    </div>
  )
}