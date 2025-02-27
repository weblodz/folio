import { z } from 'zod'

const schema = (t) => z.object({
  email: z.string().email(t('emailInvalidError')),
  password: z.string().min(8, t('passwordTooShortError'))
    .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/, t('passwordMustHaveError')),
  confirmPassword: z.string().min(8, t('confirmPasswordError')),
  acceptTerms: z.boolean().refine((val) => val === true)
}).refine((data) => data.password === data.confirmPassword, {
  message: t('passwordsDontMatchError'),
  path: ["confirmPassword"],
})

export default schema
