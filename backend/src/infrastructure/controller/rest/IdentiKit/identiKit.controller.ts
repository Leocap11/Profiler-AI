import { GeneratePortraitUseCase } from '../../../../domain/portrait-generation/use.case/GeneratePortraitUseCase/GeneratePortraitUseCase';
import { Body, Controller, Post, Res } from '@nestjs/common';
import { RequestIdentiKitDTO } from './dto/request';
import { ApiTags } from '@nestjs/swagger';
import { Response } from 'express';

@ApiTags('IdentiKit')
@Controller('identiKit')
export class IdentiKitController {
  constructor(
    private readonly generatePortraitUseCase: GeneratePortraitUseCase
  ) { }

  @Post()
  async generateIdentiKit(
    @Res() res: Response,
    @Body() body: RequestIdentiKitDTO
  ): Promise<void> {
    const buffer = await this.generatePortraitUseCase.run({
      prompt: body.description
    });

    res.setHeader('Content-Type', 'image/png');
    res.send(buffer);
  }
}
