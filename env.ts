import { z } from 'zod';

const envSchema = z.object({
  DEV_PORT: z.coerce.number().default(3333),
  PROD_PORT: z.coerce.number().default(3334),
  SECRET_KEY: z.coerce.string().default('supersecretkey')
});

export const env = envSchema.parse(process.env)
