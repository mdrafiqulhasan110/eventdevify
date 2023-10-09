import { useEffect, useState } from "react";
import Service from "./Service";

const AllServices = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("./services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div className='my-20'>
      <h1 className='border-b-2 border-[#50b8e7] mb-6'>
        <span
          className='bg-[#50b8e7] py-1 pl-2 pr-10 text-2xl font-semibold text-white'
          style={{ clipPath: "polygon(0 0,85% 0,95% 100%,0% 100%)" }}
        >
          Our Services
        </span>
      </h1>
      <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 auto-rows-fr'>
        {services.map((service) => {
          return (
            <Service
              key={service.id}
              service={service}
            ></Service>
          );
        })}
      </div>
    </div>
  );
};

export default AllServices;
