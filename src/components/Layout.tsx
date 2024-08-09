import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <div className='bg-[#111111]'>
      <div className='mx-auto h-[100dvh] max-w-500 bg-[#181818] shadow-2xl shadow-slate-600'>
        {children}
      </div>
    </div>
  );
};

export default Layout;
