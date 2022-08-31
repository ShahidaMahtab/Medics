import React, { useState } from "react";
import Img from "../../../Images/Login.png";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";

const Login = () => {
  const [signInWithGoogle] = useSignInWithGoogle(auth);
  const [signInWithEmailAndPassword, user, error] =
    useSignInWithEmailAndPassword(auth);

  const navigate = useNavigate();

  if (user) {
    navigate("/home");
  }

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailBlur = (event) => {
    setEmail(event.target.value);
  };
  const handlePasswordBlur = (event) => {
    setPassword(event.target.value);
  };

  const handleUserSignIn = (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(email, password);
  };

  const inputs = [
    {
      id: "44",
      inputType: "email",
      inputPlaceholder: "Your Email",
      handler: handleEmailBlur,
    },
    {
      id: "45",
      inputType: "password",
      inputPlaceholder: "password",
      handler: handlePasswordBlur,
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
              <div key={input.id} className="mx-auto text-center mb-3">
                <label className="block text-center">
                  <input
                    onBlur={input.handler}
                    type={input.inputType}
                    required
                    className="mx-auto mt-1 block w-1/2 px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400"
                    placeholder={input?.inputPlaceholder}
                  />
                </label>
              </div>
            ))}
            <p className="text-red-700 text-sm text-center">{error.message}</p>

            <input
              type="submit"
              value="Sign In"
              className="mx-auto mt-1 block w-1/2 px-3 py-2  border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 text-white    bg-[#0E1C36] mb-4"
            />
          </form>
          <button
            onClick={() => signInWithGoogle()}
            className="mx-auto mt-1 block w-1/2 px-3 py-2  border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 text-gray-700    bg-white"
          >
            <FcGoogle className="inline-block text-xl" /> sign in with google
          </button>
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
