import React from "react";
import brand1 from "../../../Images/brand-1.png";
import brand2 from "../../../Images/brand-2.png";
import brand3 from "../../../Images/brand-3.png";
import brand4 from "../../../Images/brand-4.png";
import brand5 from "../../../Images/brand-5.png";
import brand6 from "../../../Images/brand-6.png";

const brands = [
  { id: 44, img: brand1 },
  { id: 45, img: brand2 },
  { id: 46, img: brand3 },
  { id: 47, img: brand4 },
  { id: 48, img: brand5 },
  { id: 49, img: brand6 },
];

const AboutDoctorAchievement = () => {
  return (
    <section className="mx-auto">
      <div className="grid grid-cols-6 justify-between mx-auto items-center">
        <article className="col-span-2 mx-auto">
          <h2 className="text-5xl font-semibold text-[#0E1C36]  ">
            Our Doctors <br /> Achievements
          </h2>
          <div className="w-9 bg-pink-700 h-2 mt-8 "></div>
        </article>
        <article className="col-span-4">
          <div className="grid grid-cols-3 justify-center mx-auto item-center">
            {brands.map((brand) => (
              <div key={brand.id} className="py-4 px-6 bg-gray-300 m-5 mx-auto">
                <img src={brand.img} alt="" className="w-[130px] h-[78px]  " />
              </div>
            ))}
          </div>
        </article>
      </div>
    </section>
  );
};

export default AboutDoctorAchievement;
