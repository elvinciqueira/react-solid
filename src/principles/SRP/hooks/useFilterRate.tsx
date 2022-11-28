import { useState } from "react";

export function useFilterRate() {
  const [filterRate, setFilterRate] = useState(1);
  const handleRating = (rate: number) => setFilterRate(rate);
  return { filterRate, handleRating };
}
