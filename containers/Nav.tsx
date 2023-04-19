import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { usePathname } from "next/navigation";
import { className as classNames } from "../utils/";
import { useSession, signOut } from "next-auth/react";
import Link from "next/link";
export const NavBar = () => {
  const { data: session } = useSession();
  const pathname = usePathname();

  return (
    <nav>
      <Disclosure as="nav" className="bg-slate-100 shadow-sm">
        {({ open }) => (
          <>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="flex h-16 justify-between">
                <div className="flex">
                  <div className="flex flex-shrink-0 items-center">
                    <Link href="/">
                      <svg
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                        fill="none"
                        className="text-gray-100"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          width="100%"
                          height="100%"
                          rx="16"
                          fill="currentColor"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
                          fill="black"
                        />
                      </svg>
                    </Link>
                  
                  </div>
                </div>
                <div className="hidden sm:ml-6 sm:flex sm:items-center">
                  <Menu as="div" className="relative ml-3">
                    <div>
                      {session ? (
                        <Menu.Button className=" flex rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2">
                          <span className="sr-only"> Open user menu</span>
                          <img
                            className="h-8 w-8 rounded-full"
                            src={session.user?.image}
                            alt={`'placeholder'} avatar`}
                          />
                        </Menu.Button>
                      ) : (
                        <Menu.Button className=" flex rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2">
                          <span className="sr-only"> Open user menu</span>
                          <img
                            className="h-8 w-8 rounded-full"
                            src={"https://avatar.vercel.sh/leerob"}
                            alt={`'placeholder'} avatar`}
                          />
                        </Menu.Button>
                      )}
                    </div>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-200"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items>
                        <Menu.Item
                          as="div"
                          className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                        >
                          {session
                            ? ({ active }) => (
                                <button
                                  className={classNames(
                                    active ? "bg-gray-100" : "",
                                    "flex w-full px-4 py-2 text-sm text-gray-700"
                                  )}
                                  onClick={() => signOut()}
                                >
                                  Sign out
                                </button>
                              )
                            : ({ active }) => (
                                <button
                                  className={classNames(
                                    active ? "bg-gray-100" : "",
                                    "flex w-full px-4 py-2 text-sm text-gray-700"
                                  )}
                                >
                                  <Link href="/auth">Sign in</Link>
                                </button>
                              )}
                        </Menu.Item>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </div>
               
              </div>
            </div>

          
          </>
        )}
      </Disclosure>
    </nav>
  );
};
