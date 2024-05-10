"use client"
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import SignUpPage from "../app/SignUpPage/page"; 
import LoginPage from "@/app/LoginPage/page"; 
import { auth } from "@/services/firebase";
import { signInWithPopup,GoogleAuthProvider } from "firebase/auth";
import {useAuthState} from "react-firebase-hooks/auth"

export default function Home() {

  const [user,setuser]=useAuthState(auth);

  const googleAuth = new GoogleAuthProvider();
  
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const handleResize = () => {
    setIsSmallScreen(window.innerWidth <= 767);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleSignUpWithEmail = () => {
    router.push("/SignUpPage",);
  };

  const handleSignUpWithGoogle =async () => {
    try {
      const result = await signInWithPopup(auth, googleAuth);
      if (result.user) {
        router.push("/Components"); 
      }
    } catch (error) {
      console.error("Google Sign-in Error:", error);
    }
  };

  const handleLogin = () => {
    router.push("/LoginPage");
  };

  useEffect(()=>{
    console.log(user)
  },[user])
  return (
    <div className="bg-slate-900 min-h-screen justify-center items-center">
      {pathname === "/" && (
        <div className="flex gap-5 max-md:flex-col max-md:gap-0 flex-grow">
          <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
            <Image
              loading="lazy"
              src="/Image.png"
              alt="..."
              className="grow w-full aspect-[0.77] max-md:max-w-full max-md:max-h-screen"
              width={500}
              height={385}
            />
          </div>
          <div className="flex flex-col mt-16 items-center w-6/12 max-md:ml-0 max-md:w-full max-md:mt-0">
            <div className="flex flex-col max-md:mt-10 max-md:max-w-full">
              <div className="flex flex-col pb-11 max-md:px-5 max-md:max-w-full max-md:ml-20 max-md:mr-10 max-md:mt-[-170px]">
                <div className="flex gap-2.5 justify-between self-center text-4xl text-white tracking-[2.16px] max-md:max-w-full max-md:mr-10">
                  <div>Lo</div>
                  <div className="justify-center px-3 py-1.5 uppercase bg-sky-500 rounded-xl">
                    Go
                  </div>
                </div>
                <div className="mt-4 text-base tracking-wider leading-6 text-white max-md:max-w-full mb-14 max-md:mb-0">
                  Journey to a trillion miles starts from here!!
                </div>
              </div>
              <div
                id="signUpDiv"
                className={`flex flex-col items-center self-end px-8 py-6 font-semibold text-center leading-[140%] rounded-[25px] max-w-[450px] max-md:px-24 max-md:ml-8 max-md:mr-[-26px] ${
                  isSmallScreen
                    ? "bg-transparent border-transparent"
                    : "bg-white bg-opacity-10 border border-solid border-white border-opacity-20"
                }`}
              >
                <div className="text-2xl tracking-widest text-white">Sign up</div>
                <div className="mt-2 text-sm tracking-wider text-white">
                  Choose a sign-up method
                </div>
                <div
                  className="flex flex-col justify-center self-stretch px-14 py-3 mt-14 w-full text-base tracking-wider text-white bg-gray-800 rounded-lg border-2 border-solid border-slate-600 max-md:px-4 max-md:mt-8 max-w-[320px]"
                  onClick={handleSignUpWithGoogle}
                >
                  <div className="flex gap-2 max-md:mr-2 max-md:ml-1 items-center">
                    <Image
                      loading="lazy"
                      src="/google.png"
                      alt="Email Logo"
                      className="shrink-0 w-6 aspect-square"
                      width={24}
                      height={24}
                    />
                    <div className="whitespace-nowrap max-md:px-4">
                      Sign up with Google
                    </div>
                  </div>
                </div>
                <div
                  className="flex flex-col  self-stretch px-14 py-3 mt-5 w-full text-base tracking-wider text-white bg-gray-800 rounded-lg border-2 border-solid border-slate-600 max-md:px-4 max-md:mt-5 max-w-[320px]"
                  onClick={handleSignUpWithEmail}
                >
                  <div className="flex gap-2 max-md:mr-2 max-md:ml-1 items-center">
                    <Image
                      loading="lazy"
                      src="/mail.png"
                      alt="Email Logo"
                      className="shrink-0 w-6 aspect-square"
                      width={24}
                      height={24}
                    />
                    <div className="whitespace-nowrap max-md:px-4">
                      Sign up with Email
                    </div>
                  </div>
                </div>
                
                <div className="flex gap-2 mt-14 text-xs tracking-wider max-md:mt-8">
                  <div className="text-white">Already a user?</div>
                  <div className="text-sky-500 cursor-pointer" onClick={handleLogin}>
                    Log in
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* {pathname === "/signup" && <SignUpPage onClose={() => Router.back()} />}
      {pathname === "/login" && <LoginPage onClose={() => Router.back()} />} */}
    </div>
  );
}