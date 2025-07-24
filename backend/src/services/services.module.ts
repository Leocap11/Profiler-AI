import { Module } from '@nestjs/common';
import { StableDiffusionService } from './stable-diffusion/stable-diffusion.service';

const services = [StableDiffusionService];
@Module({
  providers: [...services],
  exports: [...services]
})
export class ServicesModule {}
