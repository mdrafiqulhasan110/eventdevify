const Service = ({ service }) => {
  const { id, service_name, description, price_range, duration, target_audience, deliverables, image_url } = service;
  return (
    <div className='h-full'>
      <div className='card h-full card-compact bg-base-100 shadow-xl'>
        <figure>
          <img
            className='aspect-[3/2]'
            src={image_url}
            alt={service_name}
          />
        </figure>
        <div className='card-body justify-between'>
          <h2 className='card-title'>{service_name}</h2>
          <button className='btn p-3 btn-info rounded-md'>See Details</button>
        </div>
      </div>
    </div>
  );
};

export default Service;
