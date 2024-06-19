export interface UserInfo {
  account: string;
  email: string;
  password: string;
  nickname: string;
}

export const getUser = async (): Promise<UserInfo> => {
  return {
    account: 'hong',
    email: 'hong1@email.com',
    password: '12345!',
    nickname: 'hong1'
  }
}