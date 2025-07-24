import { z } from 'zod';
import { getResponseDtoSchema } from '@/api/common';

export const IdentiKit = z.object({
  file: z.instanceof(Uint8Array),
});

export const identiKitResponseDtoSchema = getResponseDtoSchema(IdentiKit);
