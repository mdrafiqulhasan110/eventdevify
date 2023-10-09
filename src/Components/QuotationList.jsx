import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const QuotationList = () => {
  const qoutationList = JSON.parse(localStorage.getItem("qoutationId"));
  const [item, setItem] = useState([]);

  useEffect(() => {
    fetch("../services.json")
      .then((res) => res.json())
      .then((data) => {
        const newItem = data.filter((dat) => qoutationList?.includes(dat.id.toString()));
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
              <th>Name</th>
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
                  <td>{item.service_name}</td>
                  <td>{item.price_range}</td>
                  <td>
                    <NavLink to={`/services/${item.id}`}>
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

export default QuotationList;
