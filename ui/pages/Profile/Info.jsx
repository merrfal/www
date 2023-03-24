import { VerifiedBadge } from "../../icons";
import { Avatar } from "./";

export default function Info(props) {
  const { user, isEdit, setIsEdit, avatar, setAvatar } = props;

  return (
    <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <Avatar
          user={user}
          isEdit={isEdit}
          setIsEdit={setIsEdit}
          avatar={avatar}
          setAvatar={setAvatar}
        />

        <div className="hidden sm:block md:hidden mt-6 min-w-0 flex-1">
          <h1 className="text-2xl font-bold text-gray-900 truncate">
            {user?.userData?.name} {user?.userData?.surname}
            {user?.userAdditionalData?.isUserVerified && <VerifiedBadge />}
          </h1>
          <p className="text-gray-600">@{user?.userData?.username}</p>
        </div>
      </div>
    </div>
  );
}
