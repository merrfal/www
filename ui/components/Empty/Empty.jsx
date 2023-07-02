import { string } from "prop-types";
import { EmptyIcon } from "../../icons";

export default function Empty(props) {
  const { heading, message } = props;
  
  return (
    <div className="py-14 px-6 text-center text-sm sm:px-14">
      <EmptyIcon />
      
      <p className="mt-4 font-semibold text-gray-900">{heading}</p>
      <p className="mt-2 text-gray-500">{message}</p>
    </div>
  );
}

Empty.propTypes = {
  heading: string.isRequired,
  message: string.isRequired,
}