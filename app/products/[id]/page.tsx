import { ProductService } from "@/src/features/product/services/productService";
import ProductDetail from "@/src/features/product/components/ProductDetail";

export const revalidate = 3600;

export async function generateStaticParams() {
  const products = await ProductService.getProducts();
  return products.map((product) => ({ id: String(product.id) }));
}

interface ProductParams {
  params: Promise<{ id: string }>;
}

export default async function ProductById({ params }: ProductParams) {
  const { id } = await params;

  const product = await ProductService.getProductById(id);
  const related = await ProductService.getProductsByCategory(product.category);

  return <ProductDetail product={product} related={related} />;
}
