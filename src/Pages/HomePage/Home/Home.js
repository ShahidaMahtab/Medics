import React from "react";
import Hero from "../Hero/Hero";
import PatientCareFeature from "../PatientCareFeature/PatientCareFeature";
import PersonalCare from "../PersonalCare/PersonalCare";
import Schedules from "../Schedules/Schedules";
import Stats from "../Stats/Stats";

const Home = (props) => {
  const { open } = props;
  return (
    <div className="mx-auto">
      <Hero open={open} />
      <Schedules />
      <PersonalCare />
      <Stats />
      <PatientCareFeature />
    </div>
  );
};

export default Home;
