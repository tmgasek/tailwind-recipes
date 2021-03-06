import Head from 'next/head';
import { useState } from 'react';

export default function Home() {
  const [open, setOpen] = useState(false);

  console.log(open);

  return (
    <div className="text-gray-700 font-body">
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
        <title>Home</title>
      </Head>

      <div className="grid md:grid-cols-5">
        <div className="md:col-span-1 md:flex md:justify-end">
          <nav className="text-right">
            <div className="flex justify-between items-center">
              <h1 className="font-bold uppercase p-4 border-b border-gray-300">
                <a href="/" className="hover:text-gray-800">
                  Foods
                </a>
              </h1>
              <div
                className="px-4 cursor-pointer md:hidden"
                onClick={() => setOpen(!open)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </div>
            </div>
            <ul className={`text-sm mt-6 ${open ? '' : 'hidden'} md:block`}>
              <li className="py-1">
                <a
                  href="#"
                  className="px-4 flex justify-end border-r-4 border-primary"
                >
                  <span>Home</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 ml-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                    />
                  </svg>
                </a>
              </li>
              <li className="py-1">
                <a
                  href="#"
                  className="px-4 flex justify-end border-r-4 border-white"
                >
                  <span>About</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 ml-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </a>
              </li>
              <li className="py-1">
                <a
                  href="#"
                  className="px-4 flex justify-end border-r-4 border-white"
                >
                  <span>Contact</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 ml-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <main className="px-16 py-6 bg-gray-100 md:col-span-4">
          <div className="flex justify-center md:justify-end">
            <a
              href="#"
              className="text-primary btn border-primary md:border-2 hover:bg-primary hover:text-white  transition ease-out duration-500"
            >
              Log in
            </a>
            <a
              href="#"
              className="text-primary ml-2 btn border-primary md:border-2 hover:bg-primary hover:text-white transition ease-out duration-500 "
            >
              Sign up
            </a>
          </div>

          <header>
            <h2 className="text-gray-700 text-6xl font-semibold">Recipes</h2>
            <h3 className="text-2xl font-semibold">For Students</h3>
          </header>

          <div>
            <h4 className="font-bold pb-2 mt-12 border-b border-gray-200">
              Latest Recipes
            </h4>

            <div className="mt-8 grid lg:grid-cols-3 gap-10">
              {/* <!-- cards go here --> */}
              <div className="card">
                <img
                  src="/stew.jpg"
                  alt="stew"
                  className="w-full h-32 sm:48 object-cover"
                />
                <div className="m-4">
                  <span className="font-bold">5 Bean Chili Stew</span>
                  <span className="block text-gray-500 text-sm ">
                    Recipe by John Doe
                  </span>
                </div>
                <div className="badge">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 inline-block mr-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span>25 mins</span>
                </div>
              </div>

              <div className="card">
                <img
                  src="/noodles.jpg"
                  alt="noodles"
                  className="w-full h-32 sm:48 object-cover"
                />
                <div className="m-4">
                  <span className="font-bold">Noodles!</span>
                  <span className="block text-gray-500 text-sm ">
                    Recipe by John Doe
                  </span>
                </div>
                <div className="badge">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 inline-block mr-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span>25 mins</span>
                </div>
              </div>

              <div className="card">
                <img
                  src="/curry.jpg"
                  alt="curry"
                  className="w-full h-32 sm:48 object-cover"
                />
                <div className="m-4">
                  <span className="font-bold">Curry!</span>
                  <span className="block text-gray-500 text-sm ">
                    Recipe by Jane Doe
                  </span>
                </div>
                <div className="badge">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 inline-block mr-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span>25 mins</span>
                </div>
              </div>
            </div>

            <h4 className="font-bold pb-2 mt-12 border-b border-gray-200">
              Most Popular
            </h4>

            <div className="mt-8">{/* <!-- cards go here --> */}</div>
          </div>

          <div className="flex justify-center">
            <div className="bg-secondary-100 text-secondary-200 btn hover:shadow-inner transform hover:scale-110 hover:bg-opacity-50 transition ease-out duration-300">
              Load more
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
