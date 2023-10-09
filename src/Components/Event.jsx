import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

const Event = ({ service, index }) => {
  const { event_id, event_name, event_date, event_location, event_description, event_image_url, entry_fee } = service;
  return (
    <div>
      <div className={`card min-h-full lg:card-side bg-base-100 shadow-xl`}>
        <figure className='min-w-[40%] lg:max-w-[40%]'>
          <div className='relative w-full'>
            <img
              className='w-full aspect-[2/1] lg:h-full'
              src={event_image_url}
              alt={event_name}
            />
            <p className='absolute top-2 left-2 p-2 bg-[#50b8e7] rounded-md bg-opacity-60 text-white'>{event_date}</p>
          </div>
        </figure>
        <div className='card-body'>
          <h2 className='card-title '>{event_name}</h2>
          <p>
            <span className=' p-1 text-xs rounded-lg font-semibold text-[#50b8e7] border border-[#50b8e7]'>{event_location}</span>
          </p>
          <p className='py-2'>{event_description}</p>
          <div className='card-actions justify-between'>
            <div className='join border border-gray-400'>
              <p className='p-3 rounded-md rounded-r-none border-r-0 bg-[#50b8e7] font-semibold'>Entry Fee:</p>
              <p className=' p-3 rounded-md rounded-l-none border-l-0'>{entry_fee}</p>
            </div>

            <button className='btn p-3 btn-info rounded-md'>Details</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Event;
