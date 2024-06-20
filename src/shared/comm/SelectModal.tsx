'use client';

import React, { useState, useEffect } from 'react';
import Button from '../@common/ui/button/Button';

type ModalProps = {
  isOpen: boolean;
  onSelect: (content: string) => void;
  onClose: () => void;
  contents: string[];
};

const SelectModal = ({ isOpen, onSelect, onClose, contents }: ModalProps) => {
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
            className={`fixed inset-0 bg-black transition-opacity duration-300 ${isOpen ? 'opacity-30' : 'opacity-0'}`}
            onClick={onClose}
          />
          <div
            className={`w-full bg-white p-[15px] rounded-t-[15px] z-50 max-w-[390px] mx-auto transform transition-transform duration-300 ease-in-out ${
              isVisible ? 'translate-y-0' : 'translate-y-full'
            }`}>
            <div className="space-y-3 flex flex-col items-center pt-[15px]">
              {contents.map((content, idx) => (
                <Button key={content} type="xl-line" onClick={() => onSelect(contents[idx])}>
                  {contents[idx]}
                </Button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SelectModal;
