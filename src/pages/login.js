"use client";

import React, { useState } from "react";
import { useRouter } from "next/router";
import "../app/globals.css";
import PasswordInput from "@/components/passwordInput";
import Layout from '../components/Layout';
import IconUser from '../components/IconUser';
import Button from "@/components/button";
import IconLogo from "@/components/IconLogo";
import InputField from "@/components/InputField";

const LoginPage = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = () => {
    if (login.trim().toLowerCase() === "admin" && password.trim() === "pswrd") {
      router.push("/main");
    } else {
      alert("Неверный логин или пароль");
    }
  };

  return (
      <Layout>
          <div className="min-h-screen flex flex-col ">
              <div className="flex flex-grow items-center justify-center">
                  <AuthContainer>
                      <FormSection
                          login={login}
                          setLogin={setLogin}
                          password={password}
                          setPassword={setPassword}
                          onLogin={handleLogin}
                      />
                  </AuthContainer>
              </div>
          </div>
      </Layout>
  );
};
const AuthContainer = ({ children }) => (
  <div className="flex max-w-4xl- w-1/3 bg-SubStyleLight dark:bg-SubStyleDark shadow-lg rounded-lg">
    {children}
  </div>
);
const FormSection = ({ login, setLogin, password, setPassword, onLogin }) => (
    <div className="w-full p-8 relative flex flex-col justify-center">
        <IconLogo></IconLogo>
        <IconUser></IconUser>
        <h2 className="text-xl font-bold text-center text-black dark:text-white mb-8">
            Авторизация
        </h2>
        <form
            onSubmit={(e) => {
                e.preventDefault();
                onLogin();
            }}
            className="flex flex-col items-center space-y-6"
        >
            <InputField
                id="login"
                label="Логин:"
                value={login}
                onChange={(e) => setLogin(e.target.value)}
                placeholder="Введите логин"
            />
            <PasswordInput
                placeholder="Введите пароль"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <Button text="Войти" variant="mainColor" size="bg" callback={onLogin}/>
        </form>
    </div>
);
export default LoginPage;