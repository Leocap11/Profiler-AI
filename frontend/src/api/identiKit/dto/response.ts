import { z } from 'zod';
import type { identiKitResponseDtoSchema } from '../validator/validator';

export type IdentiKitResponseDTO = z.infer<typeof identiKitResponseDtoSchema>;
