interface ValidationState {
  account: boolean;
  nickname: boolean;
  password: boolean;
  check_password: boolean;
  email: boolean;
  [key: string]: boolean; // 인덱스 시그니처 추가
}

interface InputState {
  account: string;
  nickname: string;
  password: string;
  email: string;
  [key: string]: string;
}
