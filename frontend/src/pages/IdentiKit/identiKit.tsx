import { useIdentiKitQuery } from '@/api/identiKit';
import { useState, type FC } from 'react';
import { useForm } from 'react-hook-form';
import type { IdentiKitRequestDTO } from '@/api/identiKit/dto/request';
import { Button } from '@/shadcn/components/ui/button';
import { useTranslation } from 'react-i18next';

export const IdentiKitPage: FC = () => {
  const { t } = useTranslation('common');

  const { register, handleSubmit } = useForm<IdentiKitRequestDTO>();
  const { mutateAsync, isPending, isError, error } = useIdentiKitQuery();
  const [imgSrc, setImgSrc] = useState<string | null>(null);

  const onSubmit = async (formData: IdentiKitRequestDTO) => {
    try {
      const result = await mutateAsync({ description: formData.description });
      setImgSrc(result.imageUrl);
    } catch {
      setImgSrc(null);
    }
  };

  return (
    <div className="flex flex-row items-start justify-between w-full gap-12 p-10">
      <div className="flex flex-col flex-1 max-w-xl">
        <h1 className="text-3xl font-bold mb-6 text-center">{t('input.description')}</h1>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 bg-blue-50 p-6 rounded-xl shadow">
          <textarea
            {...register('description', { required: true })}
            rows={5}
            placeholder={t('input.description')}
            className="w-full border border-gray-300 rounded p-3 resize-none focus:outline-none focus:ring-2 focus:ring-blue-300"
          />

          <Button type="submit" disabled={isPending} className="w-full cursor-pointer hover:bg-gray-400">
            {isPending ? t('button.generation') : t('button.generate')}
          </Button>
        </form>

        {isError && <p className="text-red-600 mt-4 text-center">Error: {(error as Error).message}</p>}
      </div>

      <div className="flex flex-1 justify-center items-start min-h-[450px] bg-gray-100 rounded-xl shadow-inner p-4">
        {imgSrc ? (
          <img src={imgSrc} alt="Identikit generated" className="rounded-lg shadow-lg max-h-[400px] object-contain" />
        ) : (
          <div className="w-full min-h-[450px] border-2 border-dashed border-gray-400 rounded-lg flex items-center justify-center text-gray-500 text-sm">
            {t('placeholder.image')}
          </div>
        )}
      </div>
    </div>
  );
};
