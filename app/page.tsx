import Products from "@/src/features/product";
import { ProductService } from "@/src/features/product/services/productService";

export const revalidate = 3600;

export default async function Home() {
  const products = await ProductService.getProducts();
  const categories = await ProductService.getCategories();

  return <Products initialProducts={products} categories={categories} />;
}
