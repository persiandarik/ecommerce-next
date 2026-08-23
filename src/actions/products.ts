"use server";

import prisma from "@/lib/prisma";
import { redirect } from "next/navigation";

export async function createProduct(formData: FormData) {
  const name = formData.get("name") as string;

  const price = Number(formData.get("price"));

  await prisma.product.create({
    data: {
      name,
      price,
    },
  });
  redirect("/products")
}

export async function deleteProduct(id: number) {
  await prisma.product.delete({
    where: {
      id,
    },
  });

  redirect("/products");
}