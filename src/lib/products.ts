import prisma from "@/lib/prisma";
import { cacheLife, cacheTag } from "next/cache";

export async function getProducts() {
  "use cache";
  
  cacheLife("hours");
  cacheTag("products");

  return prisma.product.findMany();
}

export async function getProduct(id: number) {
  "use cache";

  cacheLife("hours");
  cacheTag(`product:${id}`);  

  return prisma.product.findUnique({
    where: {
      id,
    },
  });
}