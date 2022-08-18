import React from "react";
import Hero from "../Hero/Hero";

const Home = (props) => {
  const { open } = props;
  return (
    <div>
      <Hero open={open} />
    </div>
  );
};

export default Home;
