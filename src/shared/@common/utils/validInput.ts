export default function validInput(path: string, type: string, input: string, currentPassword?: string) {
  const hasEnglish = /[a-zA-Z]/.test(input);
  const hasNumber = /[0-9]/.test(input);
  const hasSpecialChar = /[^a-zA-Z0-9\s]/.test(input);
  const isValidEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(input);
  const isLong = input.length >= 6;

  //const isIdExists = checkIdExists(input);
  // const isPasswordExists = checkPasswordExists(input);
  const isIdExists = false;
  const isPasswordExists = false;

  // path: login/ signUp/ rename
  if (path === 'login') {
    switch (type) {
      case 'account':
        return isIdExists;
      case 'password':
        return isPasswordExists;
    }
  } else if (path === 'signUp') {
    switch (type) {
      case 'account':
        return hasEnglish && hasNumber && !isIdExists;
      case 'nickname':
        return hasEnglish;
      case 'password':
        return hasEnglish && hasNumber && hasSpecialChar && isLong;
      case 'check_password':
        return currentPassword === input;
      case 'email':
        return isValidEmail;
    }
  } else if (path === 'rename') {
    switch (type) {
      case 'current_password':
        return isPasswordExists;
      case 'new_password':
        return hasNumber && hasEnglish && hasSpecialChar && isLong && !isPasswordExists;
      case 'check_password':
        return currentPassword === input;
    }
  }
  return true;
}
