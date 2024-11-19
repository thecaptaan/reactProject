import { z } from 'zod';


const loginSchema = z.object({
    email: z.string().email(),
    password: z.string()
})

const startupSchema = z.object({
    startupName: z.string().min(5),
    startupDomain: z.string().url(),
    startupEmail: z.string().email(),
    startupCategories: z.string(),
    startupCountry: z.string(),
    startupAddress: z.string().min(10),
    startupDescription: z.string().min(100),
})

export {
    loginSchema,
    startupSchema
}