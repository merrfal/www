import Link from "next/link";

import { string } from "prop-types";
import { EditIcon } from "../../icons";
import { useSelector } from "react-redux";
import { Translation } from "../../../utils/Translations";

export default function Edit({ slug, user }) {
  const account = useSelector(state => state.Account);
  const allowManage = account?.User?._id === user || account?.User?.userAdditionalData?.role === "admin";

  if(allowManage) return (
    <>
      <div className="h-5 border-r border-gray-200 mx-4" />

      <Link href={`/${slug}/perditeso`}>
        <a className="bg-white px-2 py-1 h-8 w-auto flex justify-center items-center align-middle rounded-md hover:bg-gray-50 border-gray-150 border transition-all">
          <EditIcon className="h-5 w-5 text-gray-400" />
          <span className="text-gray-500 text-sm ml-1.5">{Translation("edit-product")}</span>
        </a>
      </Link>
    </>
  );

  else return null;
}

Edit.propTypes = {
  slug: string.isRequired,
  user: string.isRequired,
}