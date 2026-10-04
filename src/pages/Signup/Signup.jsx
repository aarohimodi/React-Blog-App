import React from "react";
import SignUpForm from "../../components/signup/SignUpForm";

function Signup() {
  return (
    <>
      <div className=" bg-[#05A53F] py-8 sm:py-10 mx-auto">
        <div className="mx-auto max-w-7xl px-5 text-center">
          <h1 className="text-2xl font-semibold text-white sm:text-3xl">
            Welcome
          </h1>

          <p className="mt-2 text-sm text-orange-100">
            Signup to login to your account
          </p>
        </div>
      </div>
      <div className="py-20">
        <SignUpForm />
      </div>
    </>
  );
}

export default Signup;
