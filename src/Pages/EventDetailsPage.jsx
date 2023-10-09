import { useParams } from "react-router-dom";
import EventDetails from "../Components/EventDetails";

const EventDetailsPage = () => {
  const { id } = useParams();
  return (
    <div className='pt-10 pb-20'>
      <EventDetails id={id}></EventDetails>
    </div>
  );
};

export default EventDetailsPage;
