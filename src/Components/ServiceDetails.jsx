import { useEffect, useState } from "react";

const ServiceDetails = ({ id }) => {
  const [service, setService] = useState([]);
  useEffect(() => {
    fetch("../services.json")
      .then((res) => res.json())
      .then((data) => {
        const details = data.find((data) => data.id == id);
        setService(details);
      });
  }, []);
  const { service_name, description, price_range, duration, target_audience, deliverables, image_url } = service;
  return (
    <div className='space-y-8'>
      <p className='text-3xl font-bold'>{service_name}</p>
      <p className='border rounded-md'>
        <span className='bg-[#50b8e7] p-2 rounded-l-md inline-block'>For:</span>
        {target_audience}
      </p>
      <img
        className='w-full aspect-[2/1]'
        src={image_url}
        alt=''
      />
      <p className='text-justify'>{description}</p>

      <div className='overflow-x-auto'>
        <table className='table table-zebra'>
          <tbody>
            <thead>
              <tr>
                <th className='p-0 py-2 text-2xl text-[#50b8e7]'>Service Details</th>
              </tr>
            </thead>
            <tr>
              <th>Duration</th>
              <td>{duration}</td>
            </tr>
            <tr>
              <th>Deliverables</th>
              <td>{deliverables}</td>
            </tr>
            <tr>
              <th>Estimated Costing</th>
              <td>{price_range}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div>
        <p className='p-0 py-2 text-2xl text-[#50b8e7] font-bold'>Interested?</p>
        <form>
          <div className='form-control'>
            <div className='input-group'>
              <input
                type='email'
                placeholder='Your E-mail'
                className='input input-bordered flex-grow'
                required
              />
              <input
                type='submit'
                value='Get Quote'
                className='btn btn-info'
              ></input>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ServiceDetails;
