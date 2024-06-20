import axiosInstance from "./utils/axiosInstance";

export interface MemberInfo {
  account: string;
  email: string;
  password: string;
  nickname: string;
}

export const createMember = async (memberInfo: MemberInfo): Promise<void> => {
  return new Promise((resolve) => {
    console.log('회원가입 POST 테스트', memberInfo);
    setTimeout(() => {
      resolve();
    }, 1000); 
  });

  // try {
  //   const response = await axiosInstance.post('/member/create', memberInfo);
  //   console.log('회원가입 완료', response.data);

  // } catch (error) {
  //   console.error('[POST] - 서버와 통신문제', error);
  //   throw error;
  // }
};
