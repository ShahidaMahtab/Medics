import React from "react";
import img1 from "../../../Images/pc-1.jpg";
import img2 from "../../../Images/pc-2.jpg";
import img3 from "../../../Images/pc-3.jpg";
import PrimaryButton from "../../SharedComponents/PrimaryButton/PrimaryButton";
const PersonalCare = () => {
  return (
    <section className="mx-auto md:mt-80 container px-10 mb-12">
      {/* image grid */}
      <div className="md:flex md:gap-12 ">
        <div className="grid grid-cols-1 md:grid-rows-2 md:grid-flow-col md:gap-4">
          <div className="md:col-span-1 ">
            <img src={img1} alt="" className="rounded" />
          </div>
          <div className="md:col-span-1">
            <img src={img3} alt="" className="rounded" />
          </div>
          <div className="md:row-span-2">
            <img src={img2} alt="" className="rounded mt-16" />
          </div>
        </div>
        {/* text */}
        <div>
          <div className="pt-36">
            <h2 className="capitalize text-5xl font-bold text-[#0E1C36]">
              personal care <br /> & health living
            </h2>
            <p className="mt-5 text-gray-600 text-base leading-8 mb-5">
              We provide best leading medicle service Nulla <br />
              perferendis veniam deleniti ipsum officia <br />
              dolores repellat laudantium obcaecati neque.
            </p>
            <PrimaryButton
              text={"Services "}
              bgColor={"bg-pink-700"}
              hover={"hover:bg-[#0E1C36]"}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PersonalCare;
