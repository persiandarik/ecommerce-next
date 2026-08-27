import { getProduct } from "@/lib/products";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import ProductReviews from "@/components/ProductReviews";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function ProductIdPage({ params }: Props) {
  const { id } = await params;

  const product = await getProduct(Number(id));
  

  if (!product) {
    notFound();
  }

  return (
    <div>
      <h1>{product.name}</h1>
      <p>Price: ${product.price}</p>
      <p>ID: {product.id}</p>

      <Suspense fallback={<p>Loading reviews...</p>}>
        <ProductReviews productId={product.id} />
      </Suspense>
    </div>
  );
}
