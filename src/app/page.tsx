"use client";
import { SignupValidation } from "@/ValidationSchema/auth";
import BlackButton from "@/components/Button";
import InputField from "@/components/InputField";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/services/firebase";
import { useRouter } from "next/navigation";
import { HOME_ROUTE } from "@/constants/routes";

export default function Home() {
  const router = useRouter();
  //verify firebase authentication
  console.log("Verify", auth.config);

  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = SignupValidation();

  //logged the object on form submission
  const submitForm = async (values: any) => {
    console.log("Register form values", values);
    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        values.email,
        values.password
      );
      alert("User Registration Successfull");
      reset();
      router.push(HOME_ROUTE);
    } catch (e) {
      console.error("user already registered", e);
      reset();
      alert("something went wrong try again");
    }
  };

  return (
    <main>
      <div
        className="bg-cover bg-center min-h-screen flex items-center justify-center antialiased
        "
      >
        <div className="text-center">
          <h1 className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-teal-500 text-center font-sans font-bold mb-6">
            Welcome to Our Website
          </h1>
          <p className="text-lg font-semibold mb-6 text-black">
            Sign up to access exclusive content and features
          </p>
          <div className="space-y-6">
            <form onSubmit={handleSubmit(submitForm)}>
              <InputField
                type="text"
                placeholder="ie:abc@gmail.com"
                name="email"
                autoComplete="email"
                register={register}
                error={errors.email}
              />
              <InputField
                type="password"
                placeholder="enter a strong password"
                name="password"
                autoComplete="password"
                register={register}
                error={errors.password}
              />
              <BlackButton name="Register Here" />
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
