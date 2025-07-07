import { publicRqClient } from "@/shared/api/instance";
import type { ApiSchemas } from "@/shared/api/schema";
import { keepPreviousData } from "@tanstack/react-query";
import React from "react";

type UseProductsListParams = {
  limit?: number;
};

export function useProductsList({ limit }: UseProductsListParams) {
  const {fetchNextPage, data, isFetchingNextPage, isPending, hasNextPage} = publicRqClient.useInfiniteQuery(
    "get",
    "/products",
    {
      params: {
        query: {
          page: 1,
          limit,
        },
      },
    },
    {
        initialPageParam: 1,
        pageParamName: "page",
        getNextPageParam: (lastPage: ApiSchemas['ProductsList'], _: unknown, lastPageParams: number) => {
            return Number(lastPageParams) < lastPage.totalPages ? Number(lastPageParams) + 1 : null;
        },
        placeholderData: keepPreviousData
    }
  );

  const cursorRef: React.RefCallback<HTMLDivElement> = React.useCallback(
    (el) => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    fetchNextPage();
                }
            },
            {
                threshold: 0.5,
            }
        );

        if (el) {
            observer.observe(el);

            return () => observer.disconnect();
        }
    },
    [fetchNextPage],
  )

  const products = data?.pages.flatMap((page) => page.list) ?? [];

  return {
    products,
    cursorRef,
    isFetchingNextPage,
    isPending,
    hasNextPage,
  }
}
