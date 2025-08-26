import { z } from "zod";
import { formatNumberWithDecmial } from "./utils";

const currency = z
  .string()
  .refine(
    (value) => /^\d+.(\.\d{2})?$/.test(formatNumberWithDecmial(Number(value))),
    "Price must have at least two decimal places."
  );

// schema for inserting products
export const insertProductSchema = z.object({
  name: z.string().min(3, "Name must be at least 3 characters long."),
  slug: z.string().min(3, "Slug must be at least 3 characters long."),
  category: z.string().min(3, "Category must be at least 3 characters long."),
  brand: z.string().min(3, "Brand must be at least 3 characters long."),
  description: z
    .string()
    .min(3, "Description must be at least 3 characters long."),
  stock: z.coerce.number(),
  images: z.array(z.string()).min(1, "Product must have at leaast on image."),
  isFeatured: z.boolean(),
  banner: z.string().nullable(),
  price: currency,
});

//schema for signing users in
export const signInFormSchema = z.object({
  email: z.string().email("Invalid email address."),
  password: z.string().min(6, "Password must be at least 6 characters."),
});
