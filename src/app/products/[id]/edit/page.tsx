import { getProduct } from "@/lib/products";
import EditProductForm from "@/components/EditProductForm";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function EditProductPage({ params }: Props) {
  const { id } = await params;

  const product = await getProduct(Number(id));

  if (!product) {
    return <h1>Product not found</h1>;
  }

  return (
    <EditProductForm
      id={product.id}
      name={product.name}
      price={product.price}
    />
  );
}