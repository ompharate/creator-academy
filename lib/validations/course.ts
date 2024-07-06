import * as z from "zod"

export const newCourseValidation = z.object({
    courseName: z.string().min(3).max(100),
    coursePrice: z.string().min(2).max(5),
    creator:z.string(),
    description:z.string().min(4),
});