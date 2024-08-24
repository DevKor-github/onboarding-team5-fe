import { ReactNode } from 'react';
import ModalPortal from './ModalPortal';

interface Props {
  children: ReactNode;
  closeModal: () => void;
}

const ModalFrame = ({ children, closeModal }: Props) => {
  return (
    <ModalPortal>
      <div>
        <div
          onClick={closeModal}
          className='fixed left-0 top-0 z-floating size-full bg-[rgba(0,0,0,0.6)]'
        />
        <div className='shadow-main fixed left-1/2 top-1/2 z-floating flex h-fit w-fit -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-16 bg-white pb-44'>
          {children}
        </div>
      </div>
    </ModalPortal>
  );
};

export default ModalFrame;
