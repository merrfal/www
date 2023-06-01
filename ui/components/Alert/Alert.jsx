import { EMPTY_VALUE } from "../../../configs/Constants";

export default function Alert(props) {
  const { title, message, icon } = props;

  return (
    <div class="bg-[#EFF6FF] text-[#1D4ED8] rounded-lg px-4 py-3">
      <div class="flex">
        <div class="py-1">{icon}</div>
        <div>
          <p class="font-bold w-[50%]">{title || EMPTY_VALUE}</p>
          <p class="text-sm w-[60%]">{message || EMPTY_VALUE}</p>
        </div>
      </div>
    </div>
  );
}
