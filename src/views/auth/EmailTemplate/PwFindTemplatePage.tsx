interface Props {
  link: string;
}

const PwFindTemplate = ({ link }: Props) => {
  const logoUrl = 'http://localhost:3000/images/logo.png';

  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Email Template</title>
  </head>
  <body style="font-family: Arial, sans-serif; margin: 0; padding: 0; background-color: #f4f4f4;">
    <div style="max-width: 600px; margin: 0 auto;  background-color: #956BED; padding: 50px; border: 1px solid #dddddd;">
      <div style="padding: 30px; text-align: center; background-color: #ffffff;">
        <div style="text-align: center; padding: 10px 0; color: #ffffff; display: flex; justify-content: center;">
          <img 
            src="${logoUrl}" 
            alt="Logo" 
            style="width: 150px; padding-bottom: 10px;"
          >
        </div>
        <p>비밀번호 재설정을 해주세요.</p>
        <p style="font-size: 14px; color: #666666;">아래 링크를 클릭하여 외워보까 계정에 로그인하고 비밀번호를 재설정하세요. <br/>
          이 링크는 10분 후 만료되고 한번만 사용할 수 있습니다. 
        </p>
        <a href="${link}" 
          style="display: inline-block; width: 300px; padding: 10px 20px; font-size: 16px; color: #ffffff; background-color: #252B42; text-decoration: none; border-radius: 5px; margin-top: 20px;"
        >
          비밀번호 재설정
        </a>
      </div>
      <div style="text-align: center; padding: 10px 0; background-color: #eeeeee; color: #666666;">
        <p style="margin: 0; font-size: 14px;">&copy; 2024 외워보까. All rights reserved.</p>
      </div>
    </div>
  </body>
  </html>
  `;
};

export default PwFindTemplate;
