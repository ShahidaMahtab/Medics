import React, { useState } from "react";
import Img from "../../../Images/Login.png";
import { Link, useNavigate } from "react-router-dom";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { useRef } from "react";
import InputFields from "../InputFields/InputFields";
import SocialLogin from "../SocialLogin/SocialLogin";

const Register = () => {
  const nameRef = useRef("");
  const emailRef = useRef("");
  const passwordRef = useRef("");

  const [agree, setAgree] = useState("");

  const [createUserWithEmailAndPassword, user, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  const [updateProfile, updateError] = useUpdateProfile(auth);

  let errorElement;

  if (error || updateError) {
    errorElement = (
      <p className="text-sm text-red-700 text-center my-2">
        Errors : {error?.message || updateError?.message}
      </p>
    );
  }
  const navigate = useNavigate();

  if (user) {
    console.log("user : ", user);
  }

  const handleCreateUser = async (event) => {
    event.preventDefault();
    let name = nameRef.current.value;
    let email = emailRef.current.value;
    let password = passwordRef.current.value;

    await createUserWithEmailAndPassword(email, password);
    await updateProfile({ displayName: name });
    console.log("profile update");
    navigate("/home");
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
              <InputFields key={input.id} input={input} />
            ))}

            {/* checkbox */}
            <label
              htmlFor="checkbox"
              className={`my-4 text-center block 
              ${agree ? "text-green-700" : "text-red-700"} 
              `}
            >
              <input
                onClick={() => setAgree(!agree)}
                type="checkbox"
                className="mr-5 "
              />
              Accept Terms and condition
            </label>

            {errorElement}

            <input
              disabled={!agree}
              type="submit"
              value="Sign Up"
              className={`mx-auto mt-1 block w-1/2 px-3 py-2  border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 text-white    bg-[#0E1C36] mb-4 ${
                !agree ? "disabled opacity-70" : "opacity-95"
              }`}
            />
          </form>
          {/* social login */}
          <SocialLogin />

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
