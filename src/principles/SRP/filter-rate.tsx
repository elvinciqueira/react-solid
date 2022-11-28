import { Rating } from "react-simple-star-rating";

interface FilterRateProps {
  filterRate: number;
  onRating: (rate: number) => void;
}

export function FilterRate({
  filterRate,
  onRating,
}: FilterRateProps) {
  return (
    <div className="flex flex-col justify-center items-center">
      <span className="font-semibold">Minimum Rating </span>
      <Rating
        initialValue={filterRate}
        SVGclassName="inline-block"
        onClick={onRating}
      />
    </div>
  );
}
