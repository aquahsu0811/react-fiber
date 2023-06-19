'use client'
import React from 'react';
import { NextPage } from 'next';

const ErrorPage: NextPage = () => {
  return (
    <div>
      <h1>404 - Page Not Found</h1>
      <p>Oops! The page you are looking for does not exist.</p>
    </div>
  );
};

export default ErrorPage;