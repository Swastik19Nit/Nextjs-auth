"use client"
import React, { useState } from "react";
import { auth } from "@/services/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/navigation";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push("/Components");
    } catch (error) {
      console.log(error);
    }
  };

  const handleSignOut = () => {
    router.push("/");
  };

  return (
    <div className="flex flex-col items-center pb-20 bg-gray-800 h-screen overflow-hidden">
      <div className="flex gap-5 self-stretch px-20 py-5 w-full bg-gray-800 border-b-2 border-solid border-slate-600 max-md:flex-wrap max-md:px-5 max-md:max-w-full max-md:-5">
        <div className="flex flex-1 gap-1.5 justify-center text-2xl tracking-widest text-white whitespace-nowrap">
          <div className="my-auto">Lo</div>
          <div className="justify-center px-2 py-1 uppercase bg-sky-500 rounded-lg">
            Go
          </div>
        </div>
        {/* <div
          className="my-auto text-xl font-bold tracking-wider text-sky-500 cursor-pointer"
          onClick={handleSignOut}
        >
          Sign Out
        </div> */}
      </div>
      <div className="flex flex-col items-center mt-10 max-w-md w-full px-5">
        <div className="text-xl font-semibold tracking-wider leading-7 text-white mb-5">
          Login
        </div>
        <div className="w-full">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 mb-3 bg-gray-700 rounded-md text-white focus:outline-none"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 mb-5 bg-gray-700 rounded-md text-white focus:outline-none"
          />
          <button
            onClick={handleLogin}
            className="w-full py-2 bg-sky-500 rounded-md text-white font-semibold tracking-wider"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;