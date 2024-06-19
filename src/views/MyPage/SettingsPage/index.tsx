'use client';

import BottomMenuBar from '@/shared/@common/ui/bottomMenu/BottomMenuBar';
import Modal from '@/shared/@common/ui/modal';
import Toggle from '@/shared/@common/ui/toggle/Toggle';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Button from '@/shared/@common/ui/button/Button';
import Input from '@/shared/@common/ui/input/Input';
import { SIGN_UP_INPUT_PROPS } from '@/shared/@common/constants/input';
import validInput from '@/shared/@common/utils/validInput';


const SettingsPage = () => {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState<React.ReactNode>(null);
  const [isValid, setIsValid] = useState<ValidationState>({
    account: false,
    nickname: false,
    password: true,
    check_password: false,
    email: false,
  });
  const [input, setInput] = useState<InputState>({
    account: '',
    nickname: '',
    password: '',
    check_password: '',
    email: '',
  });

  useEffect(() => {
    if (!isModalOpen) {
      setInput({
        account: '',
        nickname: '',
        password: '',
        check_password: '',
        email: '',
      });
    }
  }, [isModalOpen]);

  const handleChangeInput = (
    e: React.ChangeEvent<HTMLInputElement>,
    name: string,
    currentPassword?: string,
  ) => {
    const inputValue = e.target.value;
    setInput(state => ({ ...state, [name]: inputValue }));
    setIsValid(state => ({ ...state, [name]: validInput(name, inputValue, currentPassword || '') }));
  };

  const handleOpenModal = (content: React.ReactNode) => {
    setModalContent(content);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setModalContent(null);
  };

  //TODO: 비밀번호 확인 로직
  const handleConfirm = () => {
    router.push('/accountdelete');
  };

  const inputProps = SIGN_UP_INPUT_PROPS.reduce((fields, prop) => {
    fields[prop.name] = prop;
    return fields;
  }, {} as Record<string, typeof SIGN_UP_INPUT_PROPS[0]>);
  

  return (
    <main className="flex flex-col items-center min-h-screen">
      <div className="container bg-gray flex-grow py-[40px] px-[10px] flex flex-col">
        <div className="flex flex-col flex-grow gap-[40px]">
          <div className='flex h-[24px] items-center justify-between'>
            <Button type="back"/>
            <p className="text-18 font-medium">설정</p>
            <div className='bg-gray w-[24px]'/>
          </div>
          <div className="px-[10px] space-y-[15px]">
            <p className="font-medium mb-[20px]">환경 설정</p>
            <div className='flex items-center w-[350px] h-[62px] text-14 pl-[15px] pr-[10px] bg-white border border-grayc rounded-[15px] justify-between hover:border-black'>
              <p>효과음</p>
              <Toggle />
            </div>
            <div className='flex items-center w-[350px] h-[62px] text-14 pl-[15px] pr-[10px] bg-white border border-grayc rounded-[15px] justify-between hover:border-black'>
              <p>다크 모드</p>
              <Toggle />
            </div>
          </div>
          <div className="px-[10px] space-y-[15px]">
            <p className="font-medium mb-[20px]">기타 정보</p>
            <div className='flex items-center w-[350px] h-[62px] text-14 pl-[15px] pr-[10px] bg-white border border-grayc rounded-[15px] justify-between hover:border-black'>
              <p>개인정보 취급방침</p>
              <Link href='/privacypolicy'>
                <div className='relative flex items-center space-x-3 cursor-pointer'>
                  <Image 
                    src="/icons/right-arrow-black.png" 
                    alt="edit" 
                    width={18}
                    height={16} 
                    priority 
                  />
                </div>
              </Link>
            </div>
          </div>
          <div className='px-[10px]'>
            <div className='mb-[15px]'>
              <Button type='xl-line-primary'>
                로그아웃
              </Button>
            </div>
            <Button 
              type='xl-line-primary'
              onClick={() => handleOpenModal(
                <div>
                  <p className="font-medium">비밀번호 입력</p>
                  <p className="text-14 text-gray6 pb-[15px]">본인확인을 위해 비밀번호를 입력하세요.</p>
                  <Input
                    name={inputProps.password.name}
                    value={input.password}
                    label="현재 비밀번호" 
                    type="password"
                    placeholder="현재 비밀번호를 입력하세요"
                    onChange={e => handleChangeInput(e, inputProps.password.name, e.target.value)}
                    isValid={isValid.password}
                    errorMessage={inputProps.password.errorMessage}
                    width='350px'
                  />
                </div>
              )}
            >
              계정삭제
            </Button>
          </div>
        </div>
      </div>
      <BottomMenuBar />
      <Modal 
        isOpen={isModalOpen} 
        onClose={handleCloseModal}
        onConfirm={handleConfirm}
      >
        {modalContent}
      </Modal>
    </main>
  );
};

export default SettingsPage;
