import { useParams } from "react-router-dom";
import ServiceDetails from "../Components/ServiceDetails";

const ServiceDetailsPage = () => {
  const { id } = useParams();
  return (
    <div className='pt-10 pb-20'>
      <ServiceDetails id={id}></ServiceDetails>
    </div>
  );
};

export default ServiceDetailsPage;
