"use client";

import { deleteProduct } from "@/actions/products";

type Props = {
  id: number;
};

export default function DeleteButton({ id }: Props) {
  return (
    <button onClick={() => deleteProduct(id)}>
      Delete
    </button>
  );
}