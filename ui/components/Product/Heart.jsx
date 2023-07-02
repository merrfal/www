import { HeartIcon } from "../../icons";

export default function Heart() {
  return (
    <div className="flex hover:cursor-pointer">
      <div className="pointer-events-auto ml-2 flex-none rounded-md h-8 w-8 flex justify-center align-center items-center px-2 font-medium text-slate-700 shadow-sm ring-1 ring-slate-700/10 hover:bg-slate-50">
        <HeartIcon saved={false} />
      </div>
    </div>
  );
}