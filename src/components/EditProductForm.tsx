"use client";

import { updateProduct } from "@/actions/products";

type Props = {
  id: number;
  name: string;
  price: number;
};

export default function EditProductForm({
  id,
  name,
  price,
}: Props) {
  return (
    <form action={updateProduct.bind(null, id)}>
      <input
        type="text"
        name="name"
        defaultValue={name}
      />

      <input
        type="number"
        name="price"
        defaultValue={price}
      />

      <button type="submit">
        Save
      </button>
    </form>
  );
}