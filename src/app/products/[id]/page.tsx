import { getProduct } from "@/lib/products";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function IdProductPage({ params }: Props) {
  const { id } = await params;

  const product = await getProduct(Number(id));

  if (!product) {
    return <h1>Product not found</h1>;
  }

  return (
    <div>
      <h1>{product.name}</h1>

      <p>Price: ${product.price}</p>

      <p>ID: {product.id}</p>
    </div>
  );
}