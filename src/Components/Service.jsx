import { NavLink } from "react-router-dom";

const Service = ({ service }) => {
  const { id, service_name, short_description, price_range, duration, target_audience, deliverables, image_url } = service;
  return (
    <div className='h-full'>
      <div className='card h-full card-compact bg-base-100 shadow-xl'>
        <div className='relative'>
          <figure>
            <img
              className='aspect-[3/2] rounded-t-md'
              src={image_url}
              alt={service_name}
            />
          </figure>
          <div className='absolute bottom-0 p-2 pl-4 bg-black w-full text-white'>
            <p>{price_range}</p>
          </div>
        </div>
        <div className='card-body justify-between'>
          <h2 className='card-title'>{service_name}</h2>
          <p>{short_description}</p>
          <NavLink to={`/services/${id}`}>
            <button className='btn p-3 btn-info rounded-md w-full'>See Details</button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Service;
