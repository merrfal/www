import { VerifiedBadge } from "../../icons";
import { EditButton, Website } from "./";

export default function Avatar({ userData, isEdit, setIsEdit, id }) {
  return (
    <div className="-mt-12 sm:-mt-16 sm:flex sm:items-end sm:space-x-5">
      <img
        className="h-24 w-24 rounded-full ring-4 ring-white sm:h-32 sm:w-32"
        src={userData.avatar === null ? "/avatar-no.png" : userData.avatar}
        alt="Profile Picture"
      />
      <div className="mt-6 sm:flex-1 sm:min-w-0 sm:flex sm:items-center sm:justify-end sm:space-x-6 sm:pb-1">
        <div className="sm:hidden md:block mt-6 min-w-0 flex-1">
          <h1 className="text-2xl font-bold text-gray-900 truncate flex items-center">
            {userData.name} {userData.surname}
            {true && <VerifiedBadge />}
          </h1>
          <p>@{userData.username}</p>
        </div>

        <EditButton isEdit={isEdit} setIsEdit={setIsEdit} id={id} />
        {userData.website && <Website userData={userData} />}
      </div>
    </div>
  );
}
