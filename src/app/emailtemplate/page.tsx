
import EmailUpdateTemplate from '@/views/auth/EmailTemplate/EmailUpdateTemplatePage';
import IdFindTemplatePage from '@/views/auth/EmailTemplate/IdFindTemplatePage';
import PwFindTemplate from '@/views/auth/EmailTemplate/PwFindTemplatePage';
import React from 'react';


const Page = () => {
  const userId = 'currentUserId';
  const link = 'https://example.com/login';

  return (
    <div dangerouslySetInnerHTML={{ __html: PwFindTemplate({ link }) }} />
  );
};

export default Page;
