import React from "react";
import Img from "../../../Images/Login.png";
import { Link, useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { FcGoogle } from "react-icons/fc";
import { useState } from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { useRef } from "react";
const Register = () => {
  const [user] = useAuthState(auth);

  const nameRef = useRef("");
  const emailRef = useRef("");
  const passwordRef = useRef("");

  const [error, setError] = useState("");
  const [signInWithGoogle] = useSignInWithGoogle(auth);
  const [createUserWithEmailAndPassword] =
    useCreateUserWithEmailAndPassword(auth);

  const navigate = useNavigate();

  if (user) {
    navigate("/home");
  }

  const handleCreateUser = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    createUserWithEmailAndPassword(email, password);
  };

  const inputs = [
    {
      id: "43",
      inputType: "text",
      inputPlaceholder: "Your Name",
      handler: nameRef,
    },
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
            please enter your details and register
          </p>
          <form onSubmit={handleCreateUser}>
            {inputs.map((input) => (
              <div key={input.id} className="mx-auto text-center mb-3">
                <label className="block text-center">
                  <input
                    ref={input.handler}
                    type={input.inputType}
                    required
                    className="mx-auto mt-1 block w-1/2 px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400"
                    placeholder={input?.inputPlaceholder}
                  />
                </label>
              </div>
            ))}
            <p className="text-sm text-red-700 text-center my-2">{error}</p>
            <input
              type="submit"
              value="Sign Up"
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
            Already have an account ?
            <Link
              className="form-link text-base text-[#0E1C36] font-semibold ml-2"
              to="/login"
            >
              Sign In
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

export default Register;
