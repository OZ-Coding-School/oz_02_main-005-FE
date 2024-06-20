'use client';

import { SIGN_UP_INPUT_PROPS } from '@/shared/@common/constants/input';
import BottomMenuBar from '@/shared/@common/ui/bottomMenu/BottomMenuBar';
import ProfileAvatar from '../ProfileAvatar';
import Image from 'next/image';
import Link from 'next/link';
import Modal from '@/shared/@common/ui/modal';
import { useState, useEffect } from 'react';
import Input from '@/shared/@common/ui/input/Input';
import validInput from '@/shared/@common/utils/validInput';
import { getMember, UserInfo } from '@/apis/getMember';


const MyPage = () => {
  const [user, setUser] = useState<UserInfo>({
    account: '',
    email: '',
    password: '',
    nickname: ''
  });
  const userPoint = '125';

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState<string | null>(null);
  const [emailSent, setEmailSent] = useState(false);
  const [isValid, setIsValid] = useState<ValidationState>({
    account: false,
    nickname: true,
    password: true,
    check_password: false,
    email: true,
    new_password: true,
    check_new_password: true,
  });
  const [input, setInput] = useState<InputState>({
    account: '',
    nickname: '',
    password: '',
    check_password: '',
    email: '',
    new_password: '',
    check_new_password: '', 
  });

  useEffect(() => {
    const fetchUser = async () => {
      const userData = await getMember();
      setUser(userData);
    };

    fetchUser();
  }, []);

  useEffect(() => {
    if (!isModalOpen) {
      setInput({
        account: '',
        nickname: '',
        password: '',
        check_password: '',
        email: '',
        new_password: '', 
        check_new_password: '', 
      });
      setEmailSent(false)
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

  const handleOpenModal = (type: string) => {
    setModalType(type);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setModalType(null);
  };

  const isFormValid = () => {
    if (modalType === 'password') {
      return (
        isValid.password &&
        isValid.new_password &&
        isValid.check_new_password &&
        input.password &&
        input.new_password &&
        input.check_new_password
      );
    }
    return modalType !== null && isValid[modalType] && input[modalType];
  };

  const handleConfirm = () => {
    if (isFormValid() && modalType !== null) {
      const data = { [modalType]: input[modalType] };
      console.log('Submit data:', data);

      if (modalType === 'email') {
        setUser((prevUser: UserInfo) => ({ ...prevUser, email: input.email }));
        setEmailSent(true);
      } else if (modalType === 'nickname') {
        setUser((prevUser: UserInfo) => ({ ...prevUser, nickname: input.nickname }));
        setIsModalOpen(false); 
      }
    }
  };

  const handleResendEmail = () => {
    alert(`등록된 이메일: ${input.email} 로 재발송`);
    console.log(`이메일 재발송: ${input.email}`);
    
    //TODO: 이메일 다시 보내는 로직
    setIsModalOpen(false);
  };

  const inputProps = SIGN_UP_INPUT_PROPS.reduce((fields, prop) => {
    fields[prop.name] = prop;
    return fields;
  }, {} as Record<string, typeof SIGN_UP_INPUT_PROPS[0]>);


  const modalContent = () => {
    switch (modalType) {
      case 'nickname':
        return (
          <div>
            <p className="font-medium pb-[15px]">닉네임 변경</p>
            <form id="nickname">
              <Input
                name={inputProps.nickname.name}
                value={input.nickname}
                label={inputProps.nickname.label}
                type={inputProps.nickname.type}
                placeholder={user.nickname}
                onChange={e => handleChangeInput(e, inputProps.nickname.name)}
                isValid={isValid.nickname}
                errorMessage={inputProps.nickname.errorMessage}
                width='350px'
              />
            </form>
          </div>
        );
      case 'email':
        return (
          <div>
            <p className="font-medium pb-[15px]">이메일 변경</p>
            {emailSent ? (
              <p className="font-regular text-14 text-gray6">{input.email}로 이메일을 발송했습니다. <br/>메일함을 확인해주세요.</p>
            ) : (
              <form id="email">
                <Input
                  name={inputProps.email.name}
                  value={input.email}
                  label={inputProps.email.label}
                  type={inputProps.email.type}
                  placeholder={user.email}
                  onChange={e => handleChangeInput(e, inputProps.email.name)}
                  isValid={isValid.email}
                  errorMessage={inputProps.email.errorMessage}
                  width='350px'
                />
              </form>
            )}
          </div>
        );
      case 'password':
        return (
          <div>
            <p className="font-medium pb-[15px]">비밀번호 변경</p>
            <form id="password" className="flex flex-col gap-[10px]">
            <Input
              name={inputProps.password.name}
              value={input.password}
              label="현재 비밀번호" 
              type="password"
              placeholder="현재 비밀번호를 입력하세요"
              onChange={e => handleChangeInput(e, inputProps.password.name)}
              isValid={isValid.password}
              errorMessage={inputProps.password.errorMessage}
              width='350px'
            />
            <Input
              name="new_password"
              value={input.new_password}
              label="새 비밀번호"
              type="password"
              placeholder="새 비밀번호를 입력하세요"
              onChange={e => handleChangeInput(e, 'new_password')}
              isValid={isValid.new_password}
              errorMessage="새 비밀번호를 입력하세요"
              width='350px'
            />
            <Input
              name="check_new_password"
              value={input.check_new_password}
              label="새 비밀번호 확인"
              type="password"
              placeholder="새 비밀번호를 다시 입력하세요"
              onChange={e => handleChangeInput(e, 'check_new_password', input.new_password)}
              isValid={isValid.check_new_password}
              errorMessage="비밀번호가 일치하지 않습니다"
              width='350px'
            />
            </form>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <main className="flex flex-col items-center min-h-screen">
      <div className="container bg-gray flex-grow py-[40px] px-[10px] flex flex-col items-center">
        <div className="flex flex-col flex-grow gap-[30px] items-center">
          <div className='flex flex-col space-y-1'>
            <ProfileAvatar />
            <p className="font-medium text-center">{user.account}</p>
          </div>
          <div className='flex flex-col bg-white pt-[15px] border border-grayc rounded-[15px]'>
            <div className='w-[350px] pb-[10px] px-[15px] border-b border-grayc'>
              <p className='text-14'>아이디</p>
              <p className='text-gray6 text-14'>{user.account}</p>
            </div>
            <div className='w-[350px] p-[10px] px-[15px] border-b border-grayc flex justify-between'>
              <div className='flex flex-col'>
                <p className='text-14'>닉네임</p>
                <p className='text-gray6 text-14'>{user.nickname}</p>
              </div>
              <div 
                className='relative flex items-center cursor-pointer'
                onClick={() => handleOpenModal('nickname')}
              >
                <Image 
                  src="/icons/edit-black.png" 
                  alt="edit" 
                  width={18}
                  height={18} 
                  priority 
                />
              </div>
            </div>
            <div className='w-[350px] p-[10px] px-[15px] border-b border-grayc flex justify-between'>
              <div className='flex flex-col'>
                <p className='text-14'>이메일</p>
                <p className='text-gray6 text-14'>{user.email}</p>
              </div> 
              <div 
                className='relative flex items-center cursor-pointer'
                onClick={() => handleOpenModal('email')}
              >
                <Image 
                  src="/icons/edit-black.png" 
                  alt="edit" 
                  width={18}
                  height={18} 
                  priority 
                />
              </div> 
            </div>
            <div className='w-[350px] h-[60px] px-[15px] flex items-center justify-between'>
              <p className='text-14'>비밀번호</p>
              <div 
                className='relative flex items-center cursor-pointer'
                onClick={() => handleOpenModal('password')}
              >
                <Image 
                  src="/icons/edit-black.png" 
                  alt="edit" 
                  width={18}
                  height={18} 
                  priority 
                />
              </div>
            </div>
          </div>
          <div className='flex items-center w-[350px] h-[62px] text-14 pl-[15px] pr-[10px] bg-white border border-grayc rounded-[15px] justify-between hover:border-black'>
            <p>내 포인트</p>
            <Link href='/pointlist'>
              <div className='relative flex items-center space-x-3 cursor-pointer'>
                <p>{userPoint}p</p>
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
          <div className='flex w-[350px] h-[62px] items-center text-14 pl-[15px] pr-[10px] bg-white border border-grayc rounded-[15px] justify-between hover:border-black'>
            <p>설정</p>
            <Link href='/settings'>
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
      </div>
      <BottomMenuBar />
      <Modal 
        isOpen={isModalOpen} 
        onClose={emailSent && modalType === 'email' ? handleResendEmail : handleCloseModal}
        onConfirm={emailSent && modalType === 'email' ? handleCloseModal: handleConfirm}
        closeLabel={emailSent ? "다시보내기" : "취소"}
      >
        {modalContent()}
      </Modal>
    </main>
  );
};

export default MyPage;
