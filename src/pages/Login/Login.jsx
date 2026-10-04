import React from "react";
import LoginForm from "../../components/login/LoginForm";

function Login() {
  return (
    <>
      <div className=" bg-[#05A53F] py-8 sm:py-10 mx-auto">
        <div className="mx-auto max-w-7xl px-5 text-center">
          <h1 className="text-2xl font-semibold text-white sm:text-3xl">
            Welcome Back
          </h1>

          <p className="mt-2 text-sm text-orange-100">
            Login to continue to your account
          </p>
        </div>
      </div>
      <div className="py-20">
        <LoginForm />
      </div>
    </>
  );
}

export default Login;
