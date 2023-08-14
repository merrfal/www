import { QuestionIcon } from "../../icons";

export default function Tooltip({ text }) {
  return (
      <div className="group cursor-pointer relative inline-block border-b border-gray-400 text-center">
        <QuestionIcon width=".85em" height=".85em"/>

        <div className={`opacity-0 w-[320px] bg-black text-white text-center text-xs rounded-lg py-2 absolute z-10 group-hover:opacity-100 bottom-full -left-1/2 px-3 mb-3 pointer-events-none`}>
          {text}
          <svg
            className="absolute text-black h-2 w-full left-0 top-full"
            x="0px"
            y="0px"
            viewBox="0 0 255 255"
          >
            <polygon className="fill-current" points="0,0 127.5,127.5 255,0" />
          </svg>
        </div>
      </div>
  );
}