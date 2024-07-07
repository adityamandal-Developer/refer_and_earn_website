import { z } from 'zod';

export const formSchema = z.object({
    email: z.string().email({ message: "Invalid email address" }),
    name: z.string()
        .min(5, { message: "Name should be at least 5 characters long" })
        .max(50, { message: "Name should not exceed 50 characters" })
        .regex(/^[a-zA-Z\s]+$/, { message: "Name should only contain alphabets and spaces" })
});
