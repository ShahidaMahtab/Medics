import React from "react";
import Footer from "../../SharedComponents/Footer/Footer";
import BookAppointment from "../BookAppointment/BookAppointment";
import Hero from "../Hero/Hero";
import PatientCareFeature from "../PatientCareFeature/PatientCareFeature";
import PersonalCare from "../PersonalCare/PersonalCare";
import Reviews from "../Reviews/Reviews";
import Schedules from "../Schedules/Schedules";
import Stats from "../Stats/Stats";

const Home = () => {
  return (
    <div className="mx-auto">
      <Hero />
      <Schedules />
      <PersonalCare />
      <Stats />
      <PatientCareFeature />
      <BookAppointment />
      <Reviews />
      <Footer />
    </div>
  );
};

export default Home;
