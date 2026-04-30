import Products from "@/src/features/product/components/Products";
import { ProductService } from "@/src/features/product/services/productService";

export const dynamic = "force-dynamic";

export default async function Home() {
  const products = await ProductService.getProducts();
  const categories = await ProductService.getCategories();

  return <Products initialProducts={products} categories={categories} />;
}
