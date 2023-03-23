import Link from "next/link";

export default function Poster({ productData }) {
  const { postedAnonymously, user } = productData;

  return (
    <>
      <span className="text-gray-900 text-[14.5px] font-medium">Dhënësi:</span>
      <Link href={"/profili/" + user.userData.username}>
        <a className="transition-all w-[35%] mt-3 text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-sm font-medium rounded-lg">
          <div className="flex items-center justify-center w-10 h-10 bg-gray-300 rounded-full mr-3">
            <img
              alt="User Profile Picture"
              className="w-10 h-10 rounded-full"
              src={
                user.avatar === null || postedAnonymously
                  ? "/avatar-no.png"
                  : user.userData.avatar
              }
            />
          </div>
          <div>
            <p className="text-[15px]">{`${user.userData.name} ${user.userData.surname}`}</p>
            <span className="text-[13px]">@{user.userData.username}</span>
          </div>
        </a>
      </Link>
    </>
  );
}
