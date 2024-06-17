'use client';

import React, { useState, useEffect } from 'react';
import Button from '@/shared/@common/ui/Button/Button';


type ModalProps = {
  isOpen: boolean;
  onClose?: () => void;
  onConfirm?: () => void;
  children?: React.ReactNode;
  confirmLabel?: string; 
  closeLabel?: string; 
  contents?: { first: string; second: string };
};

const Modal = ({ isOpen, onClose, onConfirm, children, closeLabel = "취소", contents }: ModalProps) => {

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }, [isOpen]);

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-end justify-center">
          <div 
            className={`fixed inset-0 bg-black transition-opacity duration-300 ${
              isOpen ? 'opacity-30' : 'opacity-0'

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
            <div className="space-y-3 flex flex-col items-center pt-[15px]">
              <Button 
                type="xl-full"
                onClick={onConfirm}
              >
              <!--{contents.first} -->
                확인
              </Button>
              <Button 
                type="xl-line" 
                onClick={onClose}
              >
                <!--{contents.second} -->
                {closeLabel}
             </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
