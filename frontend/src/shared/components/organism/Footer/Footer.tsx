import { Button } from '@/shadcn/components/ui/button';
import type { FC } from 'react';
import { useTranslation } from 'react-i18next';

export const Footer: FC = () => {
  const { i18n } = useTranslation();

  return (
    <>
      <div className="flex justify-end m-5">
        <Button
          variant="default"
          onClick={() => i18n.changeLanguage('en')}
          className="mr-2 w-5 cursor-pointer hover:bg-gray-400"
        >
          EN
        </Button>
        <Button
          variant="default"
          onClick={() => i18n.changeLanguage('it')}
          className="mr-2 w-5 cursor-pointer hover:bg-gray-400"
        >
          IT
        </Button>
      </div>
    </>
  );
};
