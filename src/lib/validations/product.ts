import { z } from "zod";

export const productSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, "Product name is required"),

  price: z
    .number()
    .positive("Price must be greater than 0"),
});