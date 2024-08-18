import usePreventScroll from 'hooks/usePreventScroll';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props) => {
  usePreventScroll();
  return (
    <div className='mx-auto h-[100dvh] max-w-480 shadow-2xl'>{children}</div>
  );
};

export default Layout;
