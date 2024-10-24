'use client';
import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { useRouter } from 'next/navigation';
import ContBG from '../../components/contbg';
//import { BackgroundGradientAnimation } from '../components/ui/background-gradient-animation'; no quitar por si aca

export default function Login() {
  const router = useRouter();
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const success = await login(email, password);

    if (!success) {
      setErrorMessage('Invalid email or password.');
    } else {
      setErrorMessage('');
      router.push('/');
    }
  };

  return (
    <main className="flex-1 flex items-center justify-center">
      <ContBG>
      </ContBG>
    </main>
  );
}
