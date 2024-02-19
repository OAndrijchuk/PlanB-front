'use client';

import { SpriteSVG } from '@/assets/img/SpriteSVG';
import { createPortal } from 'react-dom';
import React, { useEffect, ReactNode } from 'react';

//=========>>> Usage example <=================

// export default function SomeComponentOrPage() {
//   const [isOpen, setIsOpen] = useState<boolean>(false);
//   const toggleModal = () => setIsOpen(prev => !prev);
//   return (
//     <div>
//         <Modal isOpen={isOpen} onClose={toggleModal}>
//           <p>
//             Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos
//             dolore animi distinctio officia qui quibusdam sed dolorem laudantium
//             in placeat explicabo culpa doloremque nulla facere earum esse, illo
//             ullam inventore!
//           </p>
//         </Modal>
//     </div>
//   );
// }
// ======================================================================
type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children?: ReactNode;
};

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  const modalRoot: Element | null = document.querySelector('#modal-root');

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  const handleBackdropClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return modalRoot ? (
    createPortal(
      <>
        {isOpen && (
          <div
            className=" z-[9999999] fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
            onClick={handleBackdropClick}
          >
            <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  z-50  px-4 py-10 bg-neutral-800 text-stone-50 rounded-xl md:p-8">
              <button
                onClick={onClose}
                className="absolute block w-6 h-6 top-10 right-4 cursor-pointer rounded-full hover:bg-extraAccent transition-colors hover:text-accent md:right-8"
              >
                <SpriteSVG name="close" />
              </button>
              {children}
            </div>
          </div>
        )}
      </>,
      modalRoot
    )
  ) : (
    <h2>Oops!!! We have some problem!!</h2>
  );
};

export default Modal;
