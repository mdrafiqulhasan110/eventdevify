import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const EventList = () => {
  const eventList = JSON.parse(localStorage.getItem("eventId"));
  console.log(eventList);
  const [item, setItem] = useState([]);

  useEffect(() => {
    fetch("../events.json")
      .then((res) => res.json())
      .then((data) => {
        const newItem = data.filter((dat) => eventList?.includes(dat.event_id.toString()));
        setItem(newItem);
      });
  }, []);

  return (
    <div>
      <div className='overflow-x-auto'>
        <table className='table table-zebra'>
          {/* head */}
          <thead>
            <tr>
              <th>Serial</th>
              <th>Event</th>
              <th>Date</th>
              <th>Location</th>
              <th>Price</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {item.map((item, index) => (
              <>
                <tr>
                  <th>{index + 1}</th>
                  <td>{item.event_name}</td>
                  <td>{item.event_date}</td>
                  <td>{item.event_location}</td>
                  <td>{item.entry_fee}</td>
                  <td>
                    <NavLink to={`/events/${item.event_id}`}>
                      <button className='btn p-3 btn-info rounded-md w-full'>view</button>
                    </NavLink>
                  </td>
                </tr>
              </>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EventList;
