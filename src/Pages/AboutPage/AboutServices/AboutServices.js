import React from "react";
import useServices from "../../../hooks/useServices";
import AboutServiceCard from "../AboutServiceCard/AboutServiceCard";

const AboutServices = () => {
  const [services] = useServices();
  return (
    <div>
      <article className="mx-20 my-20">
        <div className="grid grid-cols-1 md:grid-cols-4 justify-center gap-y-6 mx-auto">
          {services.slice(0, 4).map((service) => (
            <AboutServiceCard key={service.id} service={service} />
          ))}
        </div>
      </article>
    </div>
  );
};

export default AboutServices;
