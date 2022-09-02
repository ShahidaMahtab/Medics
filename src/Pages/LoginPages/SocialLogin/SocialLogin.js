import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import Loading from "../../SharedComponents/Loading/Loading";

const SocialLogin = () => {
  const navigate = useNavigate();
  const [signInWithGoogle, user, loading] = useSignInWithGoogle(auth);
  if (loading) {
    return <Loading />;
  }
  if (user) {
    navigate("/home");
  }

  return (
    <section className="flex flex-col">
      <div className="mx-auto  text-center flex items-center justify-center my-4">
        <div className="w-[150px] border  border-gray-700 "></div>
        <p className="mx-2">or</p>
        <div className="w-[150px]  border border-gray-700 "></div>
      </div>
      <button
        onClick={() => signInWithGoogle()}
        className="mx-auto mt-1  w-1/2 px-3 py-2  border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 text-gray-700    bg-white"
      >
        <FcGoogle className="inline-block text-xl" /> sign in with google
      </button>
    </section>
  );
};

export default SocialLogin;
