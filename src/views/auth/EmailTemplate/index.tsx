interface Props {
  userId: string;
  loginLink: string;
}

const emailTemplate = ({ userId, loginLink }: Props) => {
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Email Template</title>
    <style>
      body {
        font-family: Arial, sans-serif;
        margin: 0;
        padding: 0;
        background-color: #f4f4f4;
      }
      .email-container {
        max-width: 600px;
        margin: 0 auto;
        background-color: #ffffff;
        padding: 20px;
        border: 1px solid #dddddd;
      }
      .header {
        text-align: center;
        padding: 10px 0;
        background-color: #007bff;
        color: #ffffff;
      }
      .header h1 {
        margin: 0;
      }
      .content {
        padding: 20px;
      }
      .content p {
        margin: 0 0 10px;
      }
      .footer {
        text-align: center;
        padding: 10px 0;
        background-color: #eeeeee;
        color: #666666;
      }
      .button {
        display: inline-block;
        padding: 10px 20px;
        font-size: 16px;
        color: #ffffff;
        background-color: #007bff;
        text-decoration: none;
        border-radius: 5px;
        margin-top: 20px;
      }
    </style>
  </head>
  <body>
    <div class="email-container">
      <div class="header">
        <h1>Company Name</h1>
      </div>
      <div class="content">
        <h2>Hello,</h2>
        <p>회원님의 아이디는 <strong>${userId}</strong> 입니다.</p>
        <p>로그인을 위해 아래 버튼을 클릭하세요:</p>
        <a href="${loginLink}" class="button">로그인</a>
      </div>
      <div class="footer">
        <p>&copy; 2024 Company Name. All rights reserved.</p>
      </div>
    </div>
  </body>
  </html>
  `;
};