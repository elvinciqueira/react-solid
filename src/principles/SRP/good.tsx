import { useFilterRate } from "./hooks/useFilterRate";
import { useFilteredProducts } from "./hooks/useFilteredProducts";
import { FilterRate } from "./filter-rate";
import { ProductCard } from "./product-card";

export function Good() {
  const { filterRate, handleRating } = useFilterRate();
  const filteredProducts = useFilteredProducts(filterRate);

  return (
    <div className="flex flex-col h-full">
      <FilterRate filterRate={filterRate} onRating={handleRating} />
      <div className="h-full flex flex-wrap justify-center">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
