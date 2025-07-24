import { GenerationInput } from 'src/services/stable-diffusion/input/input';
import { StableDiffusionService } from './../../../../services/stable-diffusion/stable-diffusion.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class GeneratePortraitUseCase {
  constructor(
    private readonly portraitGenerationService: StableDiffusionService
  ) {}

  async run(
    input: Pick<GenerationInput, 'prompt' | 'negativePrompt'>
  ): Promise<Buffer> {
    return await this.portraitGenerationService.generatePortrait(input);
  }
}
