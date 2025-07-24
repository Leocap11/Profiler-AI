import { HttpStatus } from '@nestjs/common';

export interface SuccessResponseDTO<T> {
  outcome: true;
  data: T;
}

export interface ErrorResponseDTO {
  outcome: false;
  error: {
    status: HttpStatus;
    message: string;
  };
}

export type ResponseDTO<T> = SuccessResponseDTO<T> | ErrorResponseDTO;

export const buildSuccessResponseDTO = <T>(data: T): SuccessResponseDTO<T> => {
  return {
    outcome: true,
    data: data
  };
};

export const buildErrorResponseDTO = (
  status: HttpStatus,
  message: string
): ErrorResponseDTO => {
  return {
    outcome: false,
    error: {
      status: status,
      message: message
    }
  };
};
