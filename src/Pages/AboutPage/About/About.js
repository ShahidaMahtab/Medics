import React from "react";
import BannerComponent from "../../SharedComponents/BannerComponent/BannerComponent";
import Navbar from "../../SharedComponents/Header/Navbar/Navbar";
import AboutDoctorAchievement from "../AboutDoctorAchievement/AboutDoctorAchievement";
import AboutServices from "../AboutServices/AboutServices";
import AboutSpecialists from "../AboutSpecialists/AboutSpecialists";

import HealthyLiving from "../HealthyLiving/HealthyLiving";

const About = () => {
  return (
    <section className="mx-auto ">
      <Navbar />
      <BannerComponent title={"About us"} subtitle={"know more about us"} />
      <article className="container mx-auto">
        <HealthyLiving />
        <AboutServices />
        <AboutDoctorAchievement />
        <AboutSpecialists />
      </article>
    </section>
  );
};

export default About;
