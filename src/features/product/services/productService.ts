import { api } from "@/src/shared/lib/api";
import { Product } from "../types";

export const ProductService = {
  getProducts: async (): Promise<Product[]> => {
    const data = await api("/products", { method: "GET" });

    return data;
  },

  getProductById: async (id: string): Promise<Product> => {
    const data = await api(`/products/${id}`, { method: "GET" });

    return data;
  },

  getProductsByCategory: async (category: string): Promise<Product[]> => {
    const data = await api(`/products/category/${category}`, {
      method: "GET",
    });

    return data;
  },

  getCategories: async (): Promise<string[]> => {
    const data = await api("/products/categories", { method: "GET" });

    return data;
  },
};
