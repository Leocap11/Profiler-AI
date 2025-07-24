import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { GenerationInput } from './input/input';
import { Txt2ImgResponse } from './dto/response';
import * as axios from 'axios';

//Stable Diffusion generate the portrait with the prompt given by the user and modified by chatGpt to create the prompt and the negative prompt
@Injectable()
export class StableDiffusionService {
  async generatePortrait(input: GenerationInput): Promise<Buffer> {
    try {
      const {
        prompt,
        negativePrompt = 'ugly, deformed, bad anatomy, disfigured face, mutated, extra limbs, poorly drawn face, blurry, low resolution, low quality, grainy, out of focus, cartoon, anime, unrealistic, unnatural skin, bad proportions, extra eyes, missing facial features, text, watermark, logo, jpeg artifacts, double face, asymmetric eyes, wrong teeth, fused ears, poorly rendered hands, malformed features',
        steps = 30,
        cfgScale = 7,
        width = 512,
        height = 512,
        sampler_name = 'DPM++ 2M Karras',
        seed = -1,
        enable_hr = false
      } = input;

      const payload = {
        prompt,
        negative_prompt: negativePrompt,
        steps,
        cfg_scale: cfgScale,
        width,
        height,
        sampler_name,
        seed,
        enable_hr
      };
      const url = `http://stable-diffusion-webui:7860/sdapi/v1/txt2img`;

      const response = await axios.post<Txt2ImgResponse>(url, payload);

      const base64 = response.data.images?.[0];
      if (!base64) {
        throw new Error('Image generation failed.');
      }

      return Buffer.from(base64, 'base64');
    } catch (error) {
      console.error(
        'Stable Diffusion error:',
        error.response?.data || error.message
      );
      throw new InternalServerErrorException();
    }
  }
}
