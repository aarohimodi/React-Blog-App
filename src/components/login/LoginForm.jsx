import React, { useState } from "react";
import Input from "../ui/Input";
import { useForm } from "react-hook-form";
import authService from "../../appwrite/auth";
import { useDispatch, useSelector } from "react-redux";
import { login as authLogin } from "../../store/authSlice";
import { logout } from "../../store/authSlice";
import { useNavigate } from "react-router-dom";
function LoginForm() {
  // const user = useSelector((state) => state.auth.userData);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [error, setError] = useState("");
  const loginHandle = async (data) => {
    const response = await authService.login(data);
    if (response) {
      const userData = await authService.getCurrentUser();
      if (userData) {
        dispatch(authLogin({ userData }));
        navigate("/");
      }
    }
  };
  return (
    <div className="p-10 w-[500px] mx-auto  bg-gray-200 rounded-lg">
      <form
        className="flex flex-col gap-5"
        onSubmit={handleSubmit(loginHandle)}
      >
        <Input
          type="text"
          placeholder="Enter Email"
          label="Email"
          {...register("email", { required: "Email is Required" })}
        />
        <Input
          type="password"
          placeholder="Enter Password"
          label="Password"
          {...register("password", { required: "Password is Required" })}
        />
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

export default LoginForm;
