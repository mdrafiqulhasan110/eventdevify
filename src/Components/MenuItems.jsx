import { NavLink } from "react-router-dom";

const MenuItems = (
  <>
    <li>
      <NavLink to={"/"}>Home</NavLink>
    </li>
    <li>
      <NavLink to={"/quotation"}>Quotations</NavLink>
    </li>
    <li>
      <NavLink to={"/event"}>Event</NavLink>
    </li>
  </>
);

export default MenuItems;
