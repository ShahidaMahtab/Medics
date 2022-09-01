import React from "react";
import Img from "../../../Images/Login.png";
import { Link, useLocation, useNavigate } from "react-router-dom";

import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";

import auth from "../../../firebase.init";
import { useRef } from "react";
import InputFields from "../InputFields/InputFields";
import SocialLogin from "../SocialLogin/SocialLogin";

const Login = () => {
  const [signInWithEmailAndPassword, user, error, loading] =
    useSignInWithEmailAndPassword(auth);

  const location = useLocation();
  let from = location.state?.from?.pathname || "/";
  const navigate = useNavigate();

  if (user) {
    navigate(from, { replace: true });
  }

  const emailRef = useRef("");
  const passwordRef = useRef("");

  const handleUserSignIn = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    signInWithEmailAndPassword(email, password);
  };

  const inputs = [
    {
      id: "44",
      inputType: "email",
      inputPlaceholder: "Your Email",
      handler: emailRef,
    },
    {
      id: "45",
      inputType: "password",
      inputPlaceholder: "password",
      handler: passwordRef,
    },
  ];

  return (
    <section className="mx-auto ">
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* form and & titles */}

        <div className="">
          <h4 className="text-4xl text-center mt-20 font-semibold text-[#0E1C36] ">
            Welcome back
          </h4>
          <p className="mb-10 text-gray-600 text-center ">
            please enter your details and Sign In
          </p>
          <form onSubmit={handleUserSignIn}>
            {inputs.map((input) => (
              <InputFields key={input.id} input={input} />
            ))}

            {/* error */}
            <p className="text-red-700 text-sm text-center">{error.message}</p>

            <input
              type="submit"
              value="Sign In"
              className="mx-auto mt-1 block w-1/2 px-3 py-2  border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 text-white    bg-[#0E1C36] mb-4"
            />
          </form>

          {/* google sign in */}

          <SocialLogin />

          {/* signup link */}

          <p className="text-center mt-5">
            Don't have an account ?
            <Link
              className="form-link text-base text-[#0E1C36] font-semibold ml-2"
              to="/register"
            >
              Sign Up for free
            </Link>
          </p>
        </div>
        {/* image */}

        <div>
          <img src={Img} alt="" className="" />
        </div>
      </div>
    </section>
  );
};

export default Login;
