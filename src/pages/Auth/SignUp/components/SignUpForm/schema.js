import { z } from 'zod'

const schema = z.object({
  email: z.string().email("Please ensure that you email is valid"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  confirmPassword: z.string().min(6, "Please confirm your password"),
}).refine((data) => data.password === data.confirmPassword, {
  message: 'Passwords do not match',
  path: ["confirmPassword"],
})

export default schema
