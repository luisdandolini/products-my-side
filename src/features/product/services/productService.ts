import { api } from "@/src/shared/lib/api";
import { Product } from "../types";

export const ProductService = {
  getProducts: async (): Promise<Product[]> => {
    const data = await api("/products", { method: "GET" });

    return data;
  },

  getCategories: async (): Promise<string[]> => {
    const data = await api("/products/categories", { method: "GET" });

    return data;
  },
};
