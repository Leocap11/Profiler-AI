import type { AsyncQueryViewProps } from './types';
import { IconLoader2 } from '@tabler/icons-react';

export const AsyncQueryView = <T,>({ query, loading, error, data }: AsyncQueryViewProps<T>) => {
  if (query.isLoading) return loading ?? <IconLoader2 className="animate-spin" />;
  if (query.error && !query.data) return error?.(query.error) ?? 'Error...';
  return query.data && data(query.data);
};
