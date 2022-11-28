import axios from "axios";
import { useEffect, useState } from "react";
import type { Product } from "../product";

export const useProducts = () => {
  const { data } = useFetchProducts();
  return { products: data };
};

const useFetchProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);

  const fetchProducts = () => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        if (response && response.data) setProducts(response.data);
      });
  };

  useEffect(fetchProducts, []);

  return { data: products };
};
