import { object, string } from "prop-types";
import { Delete, Edit } from "./";

export default function ManageBox({user, slug, account}) {
  if (account?.User?._id === user || account?.User?.userAdditionalData?.role === "admin") return (
    <div className="bg-gray-50 rounded-md absolute right-1.5 top-1.5 z-[1] p-0.5 flex">
      <Delete slug={slug} />
      <Edit slug={slug} />
    </div>
  );
}

ManageBox.propTypes = {
  user: string.isRequired,
  slug: string.isRequired,
  account: object.isRequired,
}