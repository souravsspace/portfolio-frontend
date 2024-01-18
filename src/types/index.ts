import { type links } from "@/constant";
import * as z from "zod";

export type NavLinksType = (typeof links)[number]["name"];

export const FormSchema = z.object({
  email: z.string().email({
    message: "Invalid email",
  }),
  message: z
    .string()
    .min(10, {
      message: "Message must be at least 10 characters long",
    })
    .max(500, {
      message: "Message must be at most 500 characters long",
    }),
});

export type FormSchemaType = z.infer<typeof FormSchema>;
