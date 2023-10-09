import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const getQoutation = () => {
  const qoutationId = localStorage.getItem("qoutationId");
  if (qoutationId) {
    return JSON.parse(qoutationId);
  }
  return [];
};

const SaveQoutation = (id) => {
  const savedId = getQoutation();
  const exists = savedId.find((qoutation) => qoutation == id);
  if (!exists) {
    savedId.push(id);
    localStorage.setItem("qoutationId", JSON.stringify(savedId));
    toast.success("Thank You. We will Contact you soon.");
  } else {
    toast.info("You Have Already Qouted on this.");
  }
};

export default SaveQoutation;
