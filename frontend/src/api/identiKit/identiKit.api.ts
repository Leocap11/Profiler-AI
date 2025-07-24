import type { IdentiKitRequestDTO } from '@/api/identiKit/dto/request';
import { Axios } from '@/shared/config';

import type { IdentiKit } from '@/models/identiKit';

export const IdentiKitApi = {
  post: async (input: IdentiKitRequestDTO): Promise<IdentiKit> => {
    const res = await Axios.post(
      '/identiKit',
      {
        description: input.description,
      },
      {
        responseType: 'blob',
      },
    );
    console.log(res.data);

    const imageBlob = new Blob([res.data], { type: 'image/png' });
    const imageUrl = URL.createObjectURL(imageBlob);

    return { imageUrl };
  },
};
