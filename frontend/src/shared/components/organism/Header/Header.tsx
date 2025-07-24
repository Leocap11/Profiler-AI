import type { FC } from 'react';
import { useTranslation } from 'react-i18next';

export const Header: FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="text-center m-8 p-2 border-3 border-gray-500 rounded-2xl  bg-blue-500">
        <h1 className="text-4xl font-bold">{t('title')}</h1>
        <div className="text-center m-4 p-4 border-2 border-gray-300 rounded-2xl bg-blue-200">
          <p className="text-2xl">{t('description')}</p>
        </div>
      </div>
    </>
  );
};
