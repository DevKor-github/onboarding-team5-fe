import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const Page = ({ children }: Props) => {
  return (
    <section>
      <div className='mx-auto h-[798px] w-[393px] bg-white'>{children}</div>
    </section>
  );
};

export default Page;
