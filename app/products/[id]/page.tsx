import { notFound } from "next/navigation";
import { ProductService } from "@/src/features/product/services/productService";
import ProductDetail from "@/src/features/product/components/ProductDetail";

export const revalidate = 3600;

export const dynamicParams = true;

export async function generateStaticParams() {
  try {
    const products = await ProductService.getProducts();

    if (!Array.isArray(products)) return [];

    return products.map((product) => ({
      id: String(product.id),
    }));
  } catch (error) {
    console.error("Falha ao gerar params estáticos:", error);
    return [];
  }
}

interface ProductParams {
  params: Promise<{ id: string }>;
}

export default async function ProductById({ params }: ProductParams) {
  const { id } = await params;

  const product = await ProductService.getProductById(id).catch(() => null);

  if (!product) {
    notFound();
  }

  const related = await ProductService.getProductsByCategory(product.category).catch(() => []);

  return <ProductDetail product={product} related={related} />;
}
