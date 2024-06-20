import '@/globals.css';
import { UserProvider } from '@/shared/context/UserContext';
import React from 'react';
import { metadata } from './metadata';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body>
        <UserProvider>
          {children}
        </UserProvider>
      </body>
    </html>
  );
}
