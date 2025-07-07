import { publicRqClient } from "@/shared/api/instance";

export function useProduct({ productId }: { productId: string }) {
  const { data, isPending } = publicRqClient.useQuery(
    "get",
    "/product/{productId}",
    {
      params: {
        path: {
          productId,
        },
      },
    }
  );

  return {
    data,
    isPending,
  };
}
