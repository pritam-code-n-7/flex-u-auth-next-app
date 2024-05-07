import { SignupValidation } from "@/ValidationSchema/auth";
import BlackButton from "@/components/Button";
import InputField from "@/components/InputField";

export default function Home() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = SignupValidation;

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
            <form action="">
              <InputField
                type="text"
                placeholder="abc@gmail.com"
                name="email"
              />
            </form>

            <BlackButton name="Register Here" />
          </div>
        </div>
      </div>
    </main>
  );
}
