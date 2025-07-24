import { ApiProperty } from '@nestjs/swagger';

export class RequestIdentiKitDTO {
  @ApiProperty({
    description: 'Description of the identikit',
    example: 'Description of the suspect saw at the crime scene'
  })
  description: string;
}
