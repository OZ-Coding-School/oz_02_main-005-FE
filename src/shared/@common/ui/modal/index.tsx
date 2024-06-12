'use client';

import React, { useState, useEffect } from 'react';
import Button from '@/shared/@common/ui/button/Button';

type ModalProps = {
  isOpen: boolean;
  onClose?: () => void;
  onConfirm?: () => void;
  children?: React.ReactNode;
};

const Modal = ({ isOpen, onClose, onConfirm, children }: ModalProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setShouldRender(true);
      setTimeout(() => {
        setIsVisible(true);
      }, 10);
    } else {
      setIsVisible(false);
      setShouldRender(false);
    }
  }, [isOpen]);


  return (
    <>
      {shouldRender && (
        <div className="fixed inset-0 z-50 flex items-end justify-center">
          <div 
            className={`fixed inset-0 bg-black transition-opacity duration-400 ${
              isVisible ? 'opacity-30' : 'opacity-0'
            }`}
            onClick={onClose} 
          />
          <div
            className={`w-full bg-white p-[15px] rounded-t-[15px] z-50 max-w-[390px] mx-auto transform transition-transform duration-300 ease-in-out ${
              isVisible ? 'translate-y-0' : 'translate-y-full'
            }`}
          >
            <div className='px-1'>
              {children}
            </div>
            <div className="space-y-3 flex flex-col items-center">
              <Button 
                type="xl-full"
                onClick={onConfirm}
              >
                확인
              </Button>
              <Button 
                type="xl-line" 
                onClick={onClose}
              >
                취소
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
