import { useDispatch } from "react-redux";
import { Info, Operations } from ".";
import { CloseConfirmation } from "../../../controllers/Slices";
import { DisablePropagations } from "../../../utils/Links";

export default function Container() {
  const dispatch = useDispatch();
  const close = () => dispatch(CloseConfirmation());

  return (
    <div onClick={close} className="z-[999] overflow-hidden absolute">
      <div className="fixed inset-0 bg-gray-700 bg-opacity-30 transition-opacity" />
      <div className="fixed inset-0 z-10 overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <div onClick={DisablePropagations} className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
            <Info />
            <Operations />
          </div>
        </div>
      </div>
    </div>
  );
}