import prisma from "@/lib/prisma";
import { cacheTag } from "next/cache";

export async function getProducts() {
  "use cache";

  cacheTag("products");

  return prisma.product.findMany();
}
