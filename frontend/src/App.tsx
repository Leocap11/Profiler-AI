import { Outlet } from '@tanstack/react-router';
import { Header } from './shared/components/organism/Header/Header';
import { Footer } from './shared/components/organism/Footer';

export const App = () => {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Header />
        <div className="flex-grow flex items-center justify-center border-3 border-gray-500 rounded-2xl overflow-auto m-8">
          <Outlet />
        </div>
        <Footer />
      </div>
    </>
  );
};
