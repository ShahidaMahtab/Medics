import React from "react";
import { FaQuoteRight } from "react-icons/fa";

const Review = (props) => {
  const { title, name, img, desc } = props.review;
  return (
    <div className="mx-5 mb-6">
      <article className="flex gap-7">
        <div className="">
          <img src={img} alt="" className="w-[70px] h-[70px]  rounded-full" />
        </div>
        <div>
          <h4 className="text-2xl font-semibold capitalize">{title}</h4>
          <p className="text-gray-600 capitalize"> {name}</p>
        </div>
      </article>
      <article className="mt-6">
        <p className="text-xl text-gray-700">{desc}</p>
        <p className="grid justify-end">
          <FaQuoteRight className="text-5xl text-pink-800 opacity-40" />
        </p>
      </article>
    </div>
  );
};

export default Review;
