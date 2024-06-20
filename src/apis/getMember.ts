// import axiosInstance from './utils/axiosInstance';

// export interface MemberInfo {
//   account: string;
//   email: string;
//   password: string;
//   nickname: string;
// }

// export const getMember = async (): Promise<MemberInfo> => {
//   try {
//     //TODO: 백엔드 api 조회는 어디에??????
//     const response = await axiosInstance.get('/member/');
//     return response.data;
//   } catch (error) {
//     console.error('[GET] - 서버와 통신 문제', error);
//     // throw error;
//     return {
//       account: 'vocca',
//       email: 'vocca@email.com',
//       nickname: '보까',
//       password: ''
//     };
//   }
// };
