import { Avatar } from "./";

export default function Info({ userData, isEdit, setIsEdit, id }) {
  return (
    <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <Avatar userData={userData} isEdit={isEdit} setIsEdit={setIsEdit} id={id} />

        <div className="hidden sm:block md:hidden mt-6 min-w-0 flex-1">
          <h1 className="text-2xl font-bold text-gray-900 truncate">
            {userData?.name} {userData?.surname}
          </h1>
          <p>@{userData?.username}</p>
        </div>
      </div>
    </div>
  );
}
