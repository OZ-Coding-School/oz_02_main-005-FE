import VerifyEmailPage from '@/views/auth/VerifyEmailPage';
import React, { Suspense } from 'react';

const Page = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <VerifyEmailPage />
    </Suspense>
  );
};

export default Page;
