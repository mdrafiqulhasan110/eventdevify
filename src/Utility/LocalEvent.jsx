import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const getEvents = () => {
  const eventId = localStorage.getItem("eventId");
  if (eventId) {
    return JSON.parse(eventId);
  }
  return [];
};

const SaveEvent = (id) => {
  const savedId = getEvents();
  const exists = savedId.find((event) => event == id);
  if (!exists) {
    savedId.push(id);
    localStorage.setItem("eventId", JSON.stringify(savedId));
    toast.success("Thank You for Resgister");
  } else {
    toast.info("You Have Already Registerd.");
  }
};

export default SaveEvent;
