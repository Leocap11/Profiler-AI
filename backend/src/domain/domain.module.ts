import { Module } from '@nestjs/common';
import { ServicesModule } from 'src/services/services.module';
import { GeneratePortraitUseCase } from './portrait-generation/use.case/GeneratePortraitUseCase/GeneratePortraitUseCase';

const domains = [GeneratePortraitUseCase];
@Module({
  imports: [ServicesModule],
  providers: [...domains],
  exports: [...domains]
})
export class DomainModule {}
