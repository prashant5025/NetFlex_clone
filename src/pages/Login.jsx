import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className="w-full h-screen">
      <img
        className="hidden sm:block absolute w-full object-cover"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/a795ee10-8c6d-467c-8159-254be2b69013/c08e0e8a-d28f-4d82-bf93-0a9531b58a6d/IN-en-20220912-popsignuptwoweeks-perspective_alpha_website_large.jpg"
        alt=""
      />
      <div className="bg-black/60 fixed top-0 left-0 w-full h-screen">
        <div className="fixed w-full px-4 py-24 z-50">
          <div className="max-w-[450px] h-[600px] mx-auto bg-black/75 text-white">
            <div className="max-w-[320px] mx-auto py-16">
              <h1 className="text-3xl font-bold">Sign In</h1>
              <form className="w-full flex flex-col py-4" action="">
                <input
                  className="p-3 my-2 bg-gray-700 rounded"
                  type="email"
                  name=""
                  id=""
                  placeholder="Email"
                  autoComplete="email"
                />
                <input
                  className="p-3 my-2 bg-gray-700 rounded"
                  type="password"
                  placeholder="Password"
                  autoComplete="current-password"
                />
                <button className="bg-red-600 py-3 my-6 font-bold rounded">
                  Sign In
                </button>
                <div className="flex justify-between items-center text-sm text-gray-600">
                  <p>
                    <input className="mr-2" type="checkbox" name="" id="" />
                    Remember me
                  </p>
                  <p>Need Help?</p>
                </div>
                <p className="py-8">
                  <span className="text-gray-600">
                    New to Netflix?
                  </span>{" "}
                  <Link to='/signup'>Sign Up</Link>
                  
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
