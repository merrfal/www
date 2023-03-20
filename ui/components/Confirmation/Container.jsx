import { useDispatch } from "react-redux";
import { Info, Operations } from ".";
import { CloseConfirmation } from "../../../controllers/Slices";

export default function Container() {
  const dispatch = useDispatch();
  const close = () => dispatch(CloseConfirmation());

  return (
    <div className="relative z-10">
      <div onClick={close} className="fixed inset-0 bg-gray-700 bg-opacity-25 transition-opacity" />
      <div className="fixed inset-0 z-10 overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
            <Info />
            <Operations />
          </div>
        </div>
      </div>
    </div>
  );
}