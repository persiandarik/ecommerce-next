"use client";

import { deleteProduct } from "@/actions/products";

type Props = {
  id: number;
};

export default function DeleteButton({ id }: Props) {
  return (
    <form action={deleteProduct}>
      <input type="hidden" name="id" value={id} />

      <button type="submit">
        Delete
      </button>
    </form>
  );
}