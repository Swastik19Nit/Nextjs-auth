  "use client"
  import React ,{ useEffect , useState }  from "react";
  import { auth } from "@/services/firebase";
  import { signOut } from "firebase/auth";
  import { useRouter } from "next/navigation";
  import { User } from "firebase/auth";
  import Image from "next/image";
  function Components() {
  const router = useRouter();
  const [loading, setLoading] = useState(true); 
  const [user, setUser] = useState<User | null>(null); 

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (!user) {
        router.push("/");
      } else {
        setUser(user);
        console.log(user)
        setLoading(false);
      }
    });
    return unsubscribe;
  }, [router]);

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  if (loading) {
    return null;
  }

    return (
      <div className="flex flex-col items-center pb-20 bg-gray-800 h-screen overflow-hidden">
        <div className="flex gap-5 self-stretch px-20 py-5 w-full bg-gray-800 border-b-2 border-solid border-slate-600 max-md:flex-wrap max-md:px-5 max-md:max-w-full max-md:-5">
          <div className="flex flex-1 gap-1.5 justify-center text-2xl tracking-widest text-white whitespace-nowrap">
            <div className="my-auto">Lo</div>
            <div className="justify-center px-2 py-1 uppercase bg-sky-500 rounded-lg">
              Go
            </div>
          </div>
          
          {user && <div className="my-auto text-xl font-bold tracking-wider text-white">Welcome {user.displayName}</div>}
          <div
            className="my-auto text-xl font-bold tracking-wider text-sky-500 cursor-pointer"
            onClick={handleSignOut}

          >
            
            Sign Out
          </div>
        </div>
        <div className="flex gap-5 justify-between px-5 w-full mt-2 max-w-[1120px] max-md:flex-wrap max-md:max-w-full overflow-hidden">
          
          <div className="text-xl font-semibold tracking-wider leading-7 text-white max-md:mb-10">
            Popular Topics 🔥
          </div>
          
          <div className="flex gap-5 justify-between max-md:mb-10">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/75ec0ea5c616bc70d2ca711e99636efde300a8831bbc35714fe5519d58bbb336?"
              className="shrink-0 aspect-square w-[30px]"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/5cc8313d03928fdfd1c394e58b7f85c6dbe1e632188ed008920367564e8fbcbb?"
              className="shrink-0 aspect-square w-[30px]"
            />
          </div>
          
        </div>
        <div className="flex overflow-x-auto flex-col items-start mt-5 max-w-full w-[1120px] ">
          <div className="px-5 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col  max-md:gap-0">
              
            <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
                {/* <div className="flex flex-col grow justify-center max-md:mt-5">
                  <div className="flex flex-col p-3 w-full bg-gray-800 rounded-xl border border-solid border-slate-600">
                    <div className="flex gap-2 items-start">
                      <img
                        loading="lazy"
                        srcSet="..."
                        className="shrink-0 mt-2.5 max-w-full aspect-square w-[120px]"
                      />
                      <div className="flex flex-col">
                        <div className="text-base font-semibold tracking-wider leading-6 text-white">
                          Astro Physics
                        </div>
                        <div className="mt-2 text-xs tracking-wider leading-4 text-white text-opacity-80">
                          Covers fundamentals, design, construction, operation and
                          programming of robots. Covers fundamentals, design,
                          construction, operation and{" "}
                        </div>
                      </div>
                    </div>
                    <div className="justify-center items-center px-16 py-3.5 mt-5 text-base font-bold tracking-wider leading-6 text-center text-white uppercase whitespace-nowrap bg-gray-800 rounded-lg border border-solid border-slate-600 max-md:px-5">
                      Read1
                    </div>
                  </div>
                </div> */}
              </div>
              <div className="flex flex-col  w-3/12 max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow justify-center">
                  <div className=" p-3 w-full bg-gray-800 rounded-xl border border-solid border-slate-600 ">
                    <div className="flex gap-2">
                      <Image
                        loading="lazy"
                        alt="..."
                        src="/3 (2).png"
                        width={120}
                        
                        height={385}
                        className="shrink-0 my-auto max-w-full aspect-square w-[120px]"
                      />
                      <div className="flex flex-col">
                        <div className="text-base font-semibold tracking-wider leading-6 text-white">
                          Introduction to Rocket Science
                        </div>
                        <div className="mt-2 text-xs tracking-wider leading-4 text-white text-opacity-80">
                          Covers fundamentals, design, construction, operation and
                          programming of robots. Covers fundamentals, design,
                          construction, operation and{" "}
                        </div>
                      </div>
                    </div>
                    <div className="justify-center items-center px-16 py-3.5 mt-3.5 text-base font-bold tracking-wider leading-6 text-center text-white uppercase whitespace-nowrap bg-gray-800 rounded-lg border border-solid border-slate-600 max-md:px-5">
                      Read
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow justify-center max-md:mt-5">
                  <div className="flex flex-col p-3 w-full bg-gray-800 rounded-xl border border-solid border-slate-600">
                    <div className="flex gap-2 items-start">
                    <Image
                        loading="lazy"
                        alt="..."
                        src="/3 (3).png"
                        width={120}
                        
                        height={385}
                        className="shrink-0 my-auto max-w-full aspect-square w-[120px]"
                      />
                      <div className="flex flex-col">
                        <div className="text-base font-semibold tracking-wider leading-6 text-white">
                          Astro Physics
                        </div>
                        <div className="mt-2 text-xs tracking-wider leading-4 text-white text-opacity-80">
                          Covers fundamentals, design, construction, operation and
                          programming of robots. Covers fundamentals, design,
                          construction, operation and{" "}
                        </div>
                      </div>
                    </div>
                    <div className="justify-center items-center px-16 py-3.5 mt-5 text-base font-bold tracking-wider leading-6 text-center text-white uppercase whitespace-nowrap bg-gray-800 rounded-lg border border-solid border-slate-600 max-md:px-5">
                      Read
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow justify-center max-md:mt-5">
                  <div className="flex flex-col p-3 w-full bg-gray-800 rounded-xl border border-solid border-slate-600">
                    <div className="flex gap-2 items-start">
                    <Image
                        loading="lazy"
                        alt="..."
                        src="/3 (1).png"
                        width={120}
                        
                        height={385}
                        className="shrink-0 my-auto max-w-full aspect-square w-[120px]"
                      />
                      <div className="flex flex-col">
                        <div className="text-base font-semibold tracking-wider leading-6 text-white">
                          Artificial Intelligence
                        </div>
                        <div className="mt-2 text-xs tracking-wider leading-4 text-white text-opacity-80">
                          Covers fundamentals, design, construction, operation and
                          programming of robots.
                        </div>
                      </div>
                    </div>
                    <div className="justify-center items-center px-16 py-3.5 mt-5 text-base font-bold tracking-wider leading-6 text-center text-white uppercase whitespace-nowrap bg-gray-800 rounded-lg border border-solid border-slate-600 max-md:px-5">
                      Read
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow justify-center max-md:mt-5">
                  <div className="flex flex-col p-3 w-full bg-gray-800 rounded-xl border border-solid border-slate-600">
                    <div className="flex gap-2 items-start">
                    <Image
                        loading="lazy"
                        alt="..."
                        src="/3 (2).png"
                        width={120}
                        
                        height={385}
                        className="shrink-0 my-auto max-w-full aspect-square w-[120px]"
                      />
                      <div className="flex flex-col">
                        <div className="text-base font-semibold tracking-wider leading-6 text-white">
                          Astro Physics
                        </div>
                        <div className="mt-2 text-xs tracking-wider leading-4 text-white text-opacity-80">
                          Covers fundamentals, design, construction, operation and
                          programming of robots. Covers fundamentals, design,
                          construction, operation and{" "}
                        </div>
                      </div>
                    </div>
                    <div className="justify-center items-center px-16 py-3.5 mt-5 text-base font-bold tracking-wider leading-6 text-center text-white uppercase whitespace-nowrap bg-gray-800 rounded-lg border border-solid border-slate-600 max-md:px-5">
                      Read
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  export default Components;
