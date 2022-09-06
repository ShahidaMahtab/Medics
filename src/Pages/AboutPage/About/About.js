import React from "react";
import useServices from "../../../hooks/useServices";
import BannerComponent from "../../SharedComponents/BannerComponent/BannerComponent";
import AboutCard from "../AboutCard/AboutCard";

const About = () => {
  const [services] = useServices();

  return (
    <section className="mx-auto ">
      {/* banner */}
      <BannerComponent title={"About us"} subtitle={"know more about us"} />
      {/* end of banner */}

      <article className="mx-auto container ">
        <div className="grid grid-cols-6 justify-center ">
          <div className="col-span-2 mx-auto">
            <h2 className="text-5xl font-semibold text-[#0E1C36] ">
              Personal care <br /> for your healthy <br /> living
            </h2>
          </div>
          <div className="col-span-4 mx-auto">
            <p className="text-lg leading-relaxed text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Incidunt, quod laborum alias. Vitae dolorum, <br /> officia sit!
              Saepe ullam facere at, consequatur incidunt, quae esse, quis ut
              reprehenderit dignissimos, <br /> libero delectus.
            </p>
          </div>
        </div>
      </article>

      <article className="container mx-20 my-20">
        <div className="grid grid-cols-1 md:grid-cols-4 justify-center gap-y-6 mx-auto">
          {services.slice(0, 4).map((service) => (
            <AboutCard key={service.id} service={service} />
          ))}
        </div>
      </article>
    </section>
  );
};

export default About;
