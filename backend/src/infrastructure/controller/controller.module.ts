import { Module } from '@nestjs/common';
import { DomainModule } from 'src/domain/domain.module';
import { IdentiKitController } from './rest/IdentiKit/identiKit.controller';

const controllers = [IdentiKitController];

@Module({
  imports: [DomainModule],
  controllers: [...controllers]
})
export class ControllerModule {}
