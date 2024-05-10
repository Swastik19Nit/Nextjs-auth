"use client";
import React, { useState } from "react";
import { auth } from "@/services/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/navigation";

function SignUpPage() {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [signUpSuccess, setSignUpSuccess] = useState(false);

    const handleSignUp = async () => {
        if (password !== confirmPassword) {
            console.error("Passwords don't match");
            return;
        }

        try {
            await createUserWithEmailAndPassword(auth, email, password);
            setSignUpSuccess(true);
            clearForm();
        } catch (error) {

            console.error(error);
        }
    };

    const clearForm = () => {
        setEmail("");
        setPassword("");
        setName("");
        setConfirmPassword("");
    };
    const handleLogin = () => {
        router.push("/LoginPage");
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
                <button
                    onClick={handleLogin}

                    className="my-auto text-xl font-bold tracking-wider text-sky-500">
                    Sign In
                </button>

            </div>
            <div className="flex flex-col items-center mt-10 max-w-md w-full px-5">
                <div className="text-xl font-semibold tracking-wider leading-7 text-white mb-5">
                    Sign Up
                </div>
                <div className="w-full">
                    <input
                        type="text"
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-4 py-2 mb-3 bg-gray-700 rounded-md text-white focus:outline-none"
                    />
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
                        className="w-full px-4 py-2 mb-3 bg-gray-700 rounded-md text-white focus:outline-none"
                    />
                    <input
                        type="password"
                        placeholder="Confirm Password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className="w-full px-4 py-2 mb-5 bg-gray-700 rounded-md text-white focus:outline-none"
                    />
                    <button
                        onClick={handleSignUp}
                        className="w-full py-2 bg-sky-500 rounded-md text-white font-semibold tracking-wider"
                    >
                        Sign Up
                    </button>
                </div>
            </div>
            {signUpSuccess && (
                <div className="fixed inset-0 flex items-center justify-center z-50">
                    <div className="bg-white p-8 rounded-lg shadow-lg">
                        <h2 className="text-2xl font-bold mb-4">Sign Up Successful</h2>
                        <p>You have successfully signed up!</p>
                        <button
                            onClick={() => setSignUpSuccess(false)}
                            className="mt-4 px-4 py-2 bg-sky-500 text-white rounded-md"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default SignUpPage;