"use client";

import { useActionState } from "react";

import { createProduct } from "@/actions/products";

const initialState = null;

export default function CreateProductForm() {
  const [state, formAction, pending] = useActionState(
    createProduct,
    initialState
  );

  return (
    <form action={formAction}>
      <input
        type="text"
        name="name"
        placeholder="Product name"
      />

      {state?.errors?.properties?.name?.errors.map((error) => (
        <p key={error}>{error}</p>
      ))}

      <input
        type="number"
        name="price"
        placeholder="Price"
      />

      {state?.errors?.properties?.price?.errors.map((error) => (
        <p key={error}>{error}</p>
      ))}

      <button type="submit" disabled={pending}>
        {pending ? "Creating..." : "Create"}
      </button>
    </form>
  );
}