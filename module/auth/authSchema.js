import z from "zod"

export const authSchema= z.object({
    email: z.string().email("invalid email is"),
    password: z.string()
    .min(8, "password must be atleast 8 ")
    .max(15)
    .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
    .regex(/[a-z]/, "Password must contain at least one lowercase letter")
    .regex(/[0-9]/, "Password must contain at least one number")
    .regex(/[@$!%*?&]/, "Password must contain at least one special character")
});

export const authArrayObject= z.array(authSchema).min(1, "atleast one record needed").max(1000, "limit exceed")