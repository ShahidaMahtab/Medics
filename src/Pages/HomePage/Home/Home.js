import React from "react";
import BookAppointment from "../BookAppointment/BookAppointment";
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
      <BookAppointment />
    </div>
  );
};

export default Home;
