import { useTranslation } from 'react-i18next';
import { useNavigate } from '@tanstack/react-router';
import { Button } from '@/shadcn/components/ui/button';

export const NotFoundPage = () => {
  const navigate = useNavigate();
  const { t } = useTranslation('common');

  return (
    <div className="h-full w-full flex items-center justify-center bg-card">
      <div className="text-center text-foreground">
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <h2 className="text-3xl font-semibold mb-6">{t('not-found.title')}</h2>
        <p className="text-xl text-secondary-foreground mb-8">{t('not-found.description')}</p>
        <Button className="cursor-pointer hover:bg-gray-400" onClick={() => navigate({ to: '/' })}>
          {' '}
          {t('not-found.button')}{' '}
        </Button>
      </div>
    </div>
  );
};
