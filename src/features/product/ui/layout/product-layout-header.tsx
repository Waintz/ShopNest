import { useElementVisibility } from "@/shared/lib/hooks/use-element-visibility";
import { Tabs } from "@/shared/ui/kit/tabs";
import type { ProductTabId, productTabsData } from "../../model/constants";
import { useLayoutProductHeader } from "../../model/layout-context/use-layout-product-header";
import { useEffect } from "react";

/**
 * Фиксированный заголовок с навигационными табами для страницы товара.
 *
 * Отображает список табов (разделов товара) и отслеживает прокрутку страницы,
 * чтобы добавлять тень к заголовку, когда он становится "липким" (sticky).
 *
 * При клике на таб вызывает переданный callback с id выбранного таба,
 * позволяя родительскому компоненту управлять навигацией по разделам.
 *
 * Использует хук useElementVisibility для определения момента,
 * когда невидимый элемент уходит за верхнюю границу вьюпорта,
 * чтобы добавить визуальный эффект (тень) к заголовку.
 *
 * @param {Object} props
 * @param {TabItem} props.tabs - Массив данных для табов (id, текст и др.).
 * @param {ProductTabId} props.activeTab - Текущий активный таб.
 * @param {(id: ProductTabId) => void} props.onTabClick - Обработчик клика по табу.
 * @returns {JSX.Element} Компонент заголовка с табами.
 */

export type TabItem = typeof productTabsData;

interface Props {
  tabs: TabItem;
  activeTab: ProductTabId;
  onTabClick: (id: ProductTabId) => void;
}

export function ProductLayoutHeader({ activeTab, onTabClick, tabs }: Props) {
  const { ref, isTopHidden } = useElementVisibility();
  const { headerHeight } = useLayoutProductHeader();

  useEffect(() => {
    console.log(headerHeight);
  }, [headerHeight]);

  return (
    <>
      <div ref={ref} className="opacity-0 pointer-events-none" />

      <div
        className={`sticky -top-[1px] z-50 w-full grid grid-cols-[1fr_1.2fr_1.2fr_1fr_1fr_1fr]
          font-sans text-md transition-shadow ${isTopHidden ? "shadow" : ""}`}
          style={{ height: `${headerHeight}px` }}
      >
        {tabs.map((tab, index) => {
          return (
            <Tabs
              key={index}
              onClick={() => {
                onTabClick(tab.id);
              }}
              className={
                tab.id === activeTab
                  ? "bg-white hover:bg-gray-200 border-b-4 border-green-600"
                  : "bg-white text-black/50 hover:bg-gray-100"
              }
              isFirst={tab.id === "about" && true}
              text={tab.text}
            />
          );
        })}
      </div>
    </>
  );
}
