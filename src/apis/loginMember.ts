import axiosInstance from "./utils/axiosInstance";

export interface MemberInfo {
  account: string;
  password: string;
}

export const createMember = async (memberInfo: MemberInfo): Promise<void> => {

  return new Promise((resolve) => {
    console.log('로그인 POST 테스트', memberInfo);
    setTimeout(() => {
      resolve();
    }, 1000); 
  });
  // try {
  //   const response = await axiosInstance.post('/member/login', memberInfo);
  //   console.log('로그인 완료', response.data);

  // } catch (error) {
  //   console.error('[POST] - 서버와 통신문제', error);
  //   throw error;
  // }
};
