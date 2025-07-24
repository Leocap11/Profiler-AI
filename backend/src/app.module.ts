import { Module } from '@nestjs/common';
import { ControllerModule } from './infrastructure/controller/controller.module';

@Module({
  imports: [ControllerModule]
})
export class AppModule {}
