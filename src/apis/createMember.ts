import axiosInstance from "./utils/axiosInstance";

export interface MemberInfo {
  account: string;
  email: string;
  password: string;
  nickname: string;
}

export const createMember = async (userInfo: MemberInfo): Promise<void> => {
  try {
    const response = await axiosInstance.post('/member/create', userInfo);
    console.log('회원가입 완료', response.data);
  } catch (error) {
    console.error('[POST] - 서버와 통신문제', error);
    throw error;
  }
};
