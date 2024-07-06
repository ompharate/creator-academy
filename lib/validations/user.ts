import * as z from "zod"

export const userValidation = z.object({
    firstName: z.string().min(3).max(20),
    lastName: z.string().min(3).max(20),
    platformPic:z.string(),
    platformName:z.string().min(4),
    email:z.string().email(),
});