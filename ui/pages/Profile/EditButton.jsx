import { useSelector } from "react-redux";
import { EditIcon } from "../../icons";
import { Translation } from "../../../utils/Translations";

export default function EditButton({ isEdit, setIsEdit, id }) {
  const account = useSelector((state) => state.Account);
  const edit = () => setIsEdit(!isEdit);

  return (
    account?.User?._id === id && (
      <div className="mt-6 flex flex-col justify-stretch space-y-3 sm:flex-row sm:space-y-0 sm:space-x-4">
        <button onClick={edit} className="inline-flex justify-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none transition-all">
          <EditIcon />

          <span>
            {Translation("edit-profile")}
          </span>
        </button>
      </div>
    )
  );
}