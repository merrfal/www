import { useSelector } from "react-redux";
import { AlertIcon } from "../../icons";

export default function Info() {
  const { Title, Message } = useSelector((state) => state.Confirmation);

  return (
    <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
      <div className="sm:flex sm:items-start">
        <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
          <AlertIcon />
        </div>
        
        <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
          <h3 className="text-lg font-medium leading-6 text-gray-900">
            {Title}
          </h3>

          <div className="mt-2">
            <p className="text-sm text-gray-500">{Message}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
