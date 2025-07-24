import { useMutation, useQueryClient } from '@tanstack/react-query';
import { IdentiKitApi } from './identiKit.api';

export const useIdentiKitQuery = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: IdentiKitApi.post,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['identiKit'] }),
  });
};
