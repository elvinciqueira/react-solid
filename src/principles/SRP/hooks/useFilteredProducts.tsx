import { useMemo } from "react";
import { useProducts } from "./useProducts";

export function useFilteredProducts(filterRate: number) {
  const { products } = useProducts();
  return useMemo(
    () => products.filter(shouldFilterByRate(filterRate)),
    [products, filterRate]
  );
}

const shouldFilterByRate =
  (filterRate: number) =>
  ({ rating }) =>
    Math.floor(rating.rate) === filterRate;
