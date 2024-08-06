import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <div className='max-w-500 mx-auto h-[100dvh] shadow-xl'>{children}</div>
  );
};

export default Layout;
