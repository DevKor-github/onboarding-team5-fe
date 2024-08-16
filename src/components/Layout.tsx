import usePreventScroll from 'hooks/usePreventScroll';
import { ReactNode } from 'react';
import Header from './header';

interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props) => {
  usePreventScroll();
  return (
    <div className='bg-[#111111]'>
      <div>
      <div className='mx-auto h-[852px] w-[393px]'>
        <Header />
        {children}
      </div>
      </div>
    </div>
  );
};

export default Layout;
