"use server";

import prisma from "@/lib/prisma";
import { redirect } from "next/navigation";
import { productSchema } from "@/lib/validations/product";
import z from "zod";
import { updateTag } from "next/cache";
import { requireAdmin } from "@/lib/auth";

export async function createProduct(prevState: unknown, formData: FormData) {
  await requireAdmin();

  const name = formData.get("name");
  const price = Number(formData.get("price"));

  const result = productSchema.safeParse({
    name,
    price,
  });

  if (!result.success) {
    const errors = z.treeifyError(result.error);
    // console.log(errors.properties?.name?.errors); // ["Product name is required"]
    // console.log(errors.properties?.price?.errors); // ["Product price is required"]
    return {
      errors,
    };
  }

  await prisma.product.create({
    data: {
      name: result.data.name,
      price: result.data.price,
    },
  });

  redirect("/products");
}

export async function deleteProduct(formData: FormData) {
  await requireAdmin();

  const id = Number(formData.get("id"));

  await prisma.product.delete({
    where: {
      id,
    },
  });

  updateTag(`product:${id}`);
  updateTag("products");

  redirect("/products");
}

export async function updateProduct(id: number, formData: FormData) {
  await requireAdmin();

  const name = formData.get("name") as string;
  const price = Number(formData.get("price"));

  await prisma.product.update({
    where: {
      id,
    },
    data: {
      name,
      price,
    },
  });

  updateTag(`product:${id}`);
  updateTag(`products`);

  redirect(`/products/${id}`);
}