import React from "react";
import specialist1 from "../../../Images/test-thumb1.jpg";
import specialist2 from "../../../Images/test-thumb2.jpg";
import specialist3 from "../../../Images/test-thumb3.jpg";
import specialist4 from "../../../Images/test-thumb4.jpg";

const specialists = [
  {
    id: 444,
    img: specialist1,
    name: "John Marshal",
    bio: "Internist, Emergency Physician",
  },
  {
    id: 441,
    img: specialist2,
    name: "Marshal Root",
    bio: "Surgeon, Сardiologist",
  },
  {
    id: 442,
    img: specialist3,
    name: "Siamon john",
    bio: "Internist, General Practitioner",
  },
  {
    id: 443,
    img: specialist4,
    name: "Rishat Ahmed",
    bio: "Orthopedic Surgeon",
  },
];

const AboutSpecialists = () => {
  return (
    <section className="container mx-auto mt-20">
      <div>
        <h2 className="text-5xl text-center text-[#0E1C36] font-semibold mb-5">
          Meet Our Specialists
        </h2>
        <div className="border-t-[5px] w-[50px]  border-pink-700 mx-auto mb-5"></div>
        <p className="mb-14 text-gray-600 text-center">
          Today’s users expect effortless experiences. Don’t let essentialpeople
          and
          <br />
          processes stay stuck in the past. Speed it up, skip the hassles
        </p>
      </div>
      <article className="grid grid-cols-4 px-24 justify-center">
        {specialists.map((specialist) => (
          <div key={specialist?.id} className="mx-auto ">
            <div className="text-center">
              <img src={specialist?.img} alt="" />
            </div>
            <div>
              <h3> {specialist?.name}</h3>
              <p> {specialist?.bio}</p>
            </div>
          </div>
        ))}
      </article>
    </section>
  );
};

export default AboutSpecialists;
