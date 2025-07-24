import { z } from 'zod';

export const getResponseDtoSchema = <T>(value: z.ZodType<T>) =>
  z.object({
    value,
    outcome: z.boolean(),
    error: z.object({
      code: z.string(),
      name: z.string(),
      httpStatusCode: z.number().nullable(),
    }),
  });
