import { EMPTY_VALUE } from "../../../configs/Constants";

export default function Alert(props) {
  const { title, message, icon } = props;

  return (
    <div className="bg-[#EFF6FF] text-[#1D4ED8] rounded-lg px-4 py-3">
      <div className="flex">
        <div className="py-1">
          {icon}
        </div>

        <div>
          <p className="font-bold sm:w-[100%] lg:w-[50%]">
            {title || EMPTY_VALUE}
          </p>

          <p className="text-sm sm:w-[100%] lg:w-[60%]">
            {message || EMPTY_VALUE}
          </p>
        </div>
      </div>
    </div>
  );
}
