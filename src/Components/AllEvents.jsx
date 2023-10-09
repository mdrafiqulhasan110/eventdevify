import { useEffect, useState } from "react";
import Event from "./Event";

const AllEvents = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch("./events.json")
      .then((res) => res.json())
      .then((data) => setEvents(data));
  }, []);

  return (
    <div className='my-20'>
      <h1 className='border-b-2 border-[#50b8e7] mb-6'>
        <span
          className='bg-[#50b8e7] py-1 pl-2 pr-10 text-2xl font-semibold text-white'
          style={{ clipPath: "polygon(0 0,85% 0,95% 100%,0% 100%)" }}
        >
          Upcoming Events
        </span>
      </h1>
      <div className='grid grid-cols-1 xl:grid-cols-2 gap-8 auto-rows-fr'>
        {events.map((event) => {
          return (
            <Event
              key={event.id}
              service={event}
            ></Event>
          );
        })}
      </div>
    </div>
  );
};

export default AllEvents;
