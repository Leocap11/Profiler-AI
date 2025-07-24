import type { UseQueryResult } from '@tanstack/react-query';
import type { ReactNode } from 'react';

export type AsyncQuery<T> = UseQueryResult<T, unknown>;

export interface AsyncQueryViewProps<T> {
  query: UseQueryResult<T, unknown>;
  loading?: ReactNode;
  error?: (error: unknown) => ReactNode;
  data: (data: T) => ReactNode;
}
