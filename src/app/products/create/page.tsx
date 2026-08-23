import { createProduct } from "@/actions/products";

export default function CreateProductPage() {
  return (
    <form action={createProduct}>
      <input
        type="text"
        name="name"
        placeholder="Product name"
      />

      <input
        type="number"
        name="price"
        placeholder="Price"
      />

      <button type="submit">
        Create
      </button>
    </form>
  );
}