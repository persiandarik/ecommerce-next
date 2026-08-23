import { getProducts } from "@/lib/products";
import DeleteButton from "@/components/DeleteButton";

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <div>
      <h1>Products</h1>

      {products.map((product) => (
        <div key={product.id}>
          <h2>{product.name}</h2>

          <p>{product.price}</p>

          <DeleteButton id={product.id} />
        </div>
      ))}
    </div>
  );
}