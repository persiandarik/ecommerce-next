import prisma from "@/lib/prisma";
// import { cacheTag } from "next/cache";

export async function getProducts() {
  // "use cache";

  // cacheTag("products");

  return prisma.product.findMany();
}

export async function getProduct(id: number) {
  // "use cache";

  // cacheTag(`product:${id}`);

  return prisma.product.findUnique({
    where: {
      id,
    },
  });
}