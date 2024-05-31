import BlackButton from "@/components/BlackButton";
import WhiteButton from "@/components/WhiteButton";
import Link from "next/link";

function App() {
  return (
    <div className="flex justify-center gap-6 items-center min-h-screen w-full">
      <div className="flex">
        <Link href="/login">
          <BlackButton name="Login"/>
        </Link>
      </div>
      <div className="flex">
        <Link href="/register">
          <WhiteButton name="Signup" />
        </Link>
      </div>
    </div>
  );
}

export default App;
