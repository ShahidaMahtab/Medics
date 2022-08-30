import React from "react";
import { FaMedrt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RiCustomerService2Fill } from "react-icons/ri";
import FooterLink from "../FooterLink/FooterLink";
//links
const footerLinks = [
  {
    title: "Department",
    links: ["Surgery", "Women's Health", "Radiology", " Cardioc", "Medicine"],
  },

  {
    title: "Support",
    links: [
      "Terms & Condition",
      "Privacy Policy",
      "Company Support",
      "FAQuestion",
      "Company Licence",
    ],
  },

  {
    title: "Get In Touch",
    time: "Support Available for 24/7",
    emailLink: "Support@email.com",
    support: "Mon to Fri : 08:30 - 18:00",
    phone: "+23-456-6588",
    icon1: <MdEmail />,
    icon2: <RiCustomerService2Fill />,
  },
];

const Footer = () => {
  return (
    <section className=" mb-28 mt-40 mx-32 ">
      <div className="flex justify-between flex-wrap">
        <article className="flex flex-col items-start gap-7 ">
          {/* titles and icon */}
          <div className="flex gap-3 items-center  ">
            <p>
              <FaMedrt className="text-5xl  text-pink-700 " />
            </p>
            <h2 className="text-4xl font-semibold">Medics</h2>
          </div>
          <div>
            <p className="w-[330px] h-[90px] text-base text-gray-600">
              Tempora dolorem voluptatum nam vero assumenda voluptate, facilis
              ad eos obcaecati tenetur veritatis eveniet distinctio possimus.
            </p>
          </div>
          {/* footer link */}
        </article>
        <article className="flex  gap-x-20  flex-wrap">
          {footerLinks.map((footerLink) => (
            <FooterLink key={footerLink.title} footerLinks={footerLink} />
          ))}
        </article>
      </div>
    </section>
  );
};

export default Footer;
