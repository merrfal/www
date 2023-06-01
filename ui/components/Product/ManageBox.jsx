import { useSelector } from "react-redux";
import { Delete, Edit } from "./";

export default function ManageBox({user, slug}) {
  const account = useSelector((state) => state.Account);

  if (account?.User?._id === user || account?.User?.userAdditionalData?.role === "admin")
  return (
    <div className="bg-gray-50 rounded-md absolute right-1.5 top-1.5 z-[10] p-0.5 flex">
      <Delete slug={slug} />
      <Edit slug={slug} />
    </div>
  );
}
