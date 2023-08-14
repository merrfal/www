import { Translation } from "../../../utils/Translations";
import { EmptyIcon } from "../../icons";

export default function End({ show }) {
  if(show) return (
    <div className="py-14 px-6 mt-4 text-center text-sm sm:px-14">
      <EmptyIcon />
      
      <p className="mt-2 text-gray-500">
        {Translation("you-have-come-to-end")}
      </p>
    </div>
  );

  else return null;
}