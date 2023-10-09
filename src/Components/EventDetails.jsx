import { useEffect, useState } from "react";
import SaveEvent from "../Utility/LocalEvent";

const EventDetails = ({ id }) => {
  const [event, setEvent] = useState([]);
  console.log(id);
  useEffect(() => {
    fetch("../events.json")
      .then((res) => res.json())
      .then((datas) => {
        console.log(datas);
        const details = datas.find((data) => data.event_id == id);
        setEvent(details);
        console.log(event);
      });
  }, []);

  const { event_name, event_date, event_location, event_description, event_image_url, entry_fee } = event;

  return (
    <div className='space-y-8'>
      <p className='text-3xl font-bold'>{event_name}</p>
      <div className='relative'>
        <img
          className='w-full aspect-[2/1]'
          src={event_image_url}
          alt=''
        />

        <div className='absolute flex justify-between bottom-0 bg-black w-full p-6'>
          <p className=' p-2 bg-[#50b8e7] text-white rounded-md'>Entry Fee: {entry_fee}</p>
          <button
            onClick={() => SaveEvent(id)}
            className=' p-2 bg-[#50b8e7] text-white rounded-md'
          >
            Reegister
          </button>
        </div>
      </div>

      <p className='text-justify'>{event_description}</p>

      <div className='overflow-x-auto'>
        <table className='table table-zebra'>
          <tbody>
            <thead>
              <tr>
                <th className='p-0 py-2 text-2xl text-[#50b8e7]'>Event Details</th>
              </tr>
            </thead>
            <tr>
              <th>Date</th>
              <td>{event_date}</td>
            </tr>

            <tr>
              <th>Location</th>
              <td>{event_location}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EventDetails;
