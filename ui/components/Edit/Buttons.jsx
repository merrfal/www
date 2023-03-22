import { useDispatch } from "react-redux";
import { Update } from "../../../api/User";

export default function Buttons({ setIsEdit, setIsLoading, setUser, userClone, setUserClone }) {
  const dispatch = useDispatch()

  const HandleUpdate = () => {
    Update(
      userClone, 
      setUser, 
      setIsLoading, 
      setIsEdit,
      setUserClone, 
      dispatch
    );
  }

  return (
    <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
      <button
        onClick={HandleUpdate}
        className="inline-flex w-full justify-center rounded-md border border-transparent bg-[#387DFF] px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-[#387DFF] focus:outline-none sm:ml-3 sm:w-auto sm:text-sm"
      >
        Përditëso
      </button>
      <button
        onClick={() => setIsEdit(false)}
        className="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
      >
        Anulo
      </button>
    </div>
  );
}
