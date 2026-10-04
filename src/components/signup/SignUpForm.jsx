import React, { useEffect, useState } from "react";
import Input from "../ui/Input";
import { useForm } from "react-hook-form";
import authService from "../../appwrite/auth";
import { useDispatch, useSelector } from "react-redux";
import { login as authLogin } from "../../store/authSlice";
import { useNavigate } from "react-router-dom";

function SignUpForm() {
  // useEffect(() => {
  //   authService.logout();
  // }, []);
  const dispatch = useDispatch();
  //   const user = useSelector((state) => state.auth.userData);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm({ mode: "onblur" });
  const signUpHandle = async (data) => {
    try {
      const response = await authService.createAccount(data);
      if (response) {
        const userData = await authService.getCurrentUser();

        if (userData) {
          dispatch(authLogin({ userData }));
          navigate("/");
        }
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const [error, setError] = useState("");
  return (
    <div className="p-10 w-[500px] mx-auto  bg-gray-200 rounded-lg">
      <form
        className="flex flex-col gap-5"
        onSubmit={handleSubmit(signUpHandle)}
      >
        <Input
          type="text"
          placeholder="Enter Name"
          label="Email"
          {...register("name", { required: "Name is Required" })}
        />
        {errors.name && <p className="text-red">{errors.name}</p>}
        <Input
          type="email"
          placeholder="Enter Email"
          label="Email"
          {...register("email", { required: "Email is Required" })}
        />
        {errors.email && <p className="text-red">{errors.email}</p>}
        <Input
          type="password"
          placeholder="Enter Password"
          label="Password"
          {...register("password", { required: "Password is Required" })}
        />
        {errors.password && <p className="text-red">{errors.password}</p>}

        <button
          type="submit"
          className="p-5 text-white bg-green-700 rounded-lg"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default SignUpForm;
