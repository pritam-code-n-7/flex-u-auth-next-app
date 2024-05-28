"use client";
import { useSignupValidation } from "@/ValidationSchema/valid";
import BlackButton from "@/components/BlackButton";
import InputField from "@/components/InputField";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/services/firebase";
import { useRouter } from "next/navigation";
import { HOME_ROUTE } from "@/constants/routes";
import { useState } from "react";
import Link from "next/link";
import { SubmitHandler } from "react-hook-form";

interface SignupFormValues {
  email: string;
  password: string;
}

export default function Home() {
  const [isLogin, setIsLogin] = useState(false);
  const router = useRouter();

  const { handleSubmit, register, formState: { errors }, reset } = useSignupValidation();

  const submitForm: SubmitHandler<SignupFormValues> = async (values) => {
    console.log("Register form values", values);
    try {
      await createUserWithEmailAndPassword(auth, values.email, values.password);
      alert("User Registration Successful");
      reset();
      router.push(HOME_ROUTE);
    } catch (error) {
      console.error("User registration error", error);
      reset();
      alert("Something went wrong, please try again");
    }
  };

  return (
    <main>
      <div className="min-h-screen flex flex-col items-center">
        <h1 className="text-lg md:text-7xl text-center font-sans font-bold mb-6 text-gradient">
          Welcome to Our Website
        </h1>
        <div className="text-lg font-semibold mb-6 text-black">
          {isLogin ? <p>Login Form</p> : <p>Registration Form</p>}
        </div>
        <div className="flex flex-col gap-6 w-1/2">
          <form onSubmit={handleSubmit(submitForm)}>
            <InputField
              type="email"
              placeholder="ie: abc@gmail.com"
              name="email"
              autoComplete="email"
              register={register}
              error={errors.email}
            />
            <InputField
              type="password"
              placeholder="Enter a strong password"
              name="password"
              autoComplete="current-password"
              register={register}
              error={errors.password}
            />
            {isLogin && (
              <div className="text-blue-600">
                <p>Forgot password? Click here.</p>
              </div>
            )}
            <div className="flex justify-center">
              <BlackButton name={isLogin ? "Login Here" : "Register Here"} />
            </div>
            <div className="text-center mt-4">
              <Link href={isLogin ? "/signup" : "/login"} className="text-blue-600">
                {isLogin ? "Don't have an account? Register here!" : "Already have an account? Login here!"}
              </Link>
            </div>
          </form>
        </div>
        <div className="flex gap-6 mt-6">
          <BlackButton name="Sign-up" type="button" onClick={() => setIsLogin(false)} />
          <BlackButton name="Login" type="button" onClick={() => setIsLogin(true)} />
        </div>
      </div>
    </main>
  );
}
