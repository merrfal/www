import { useSelector } from "react-redux";
import { Delete, Edit } from "./";
import { DisablePropagations } from "../../../utils/Links";

export default function ManageBox({user, slug, name}) {
  const account = useSelector((state) => state.Account);

  if (account?.User?._id === user)
  return (
    <div className="bg-gray-50 rounded-md absolute right-1.5 top-1.5 z-[10] p-0.5 flex">
      <Edit slug={slug} />
      <Delete slug={slug} name={name} />
    </div>
  );
}
