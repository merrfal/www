import Link from "next/link";

export default function Poster({productData}) {
  const { postedAnonymously, user } = productData;

  return (
    <>
      <span className="text-gray-900 text-sm font-medium">Dhënësi:</span>
      <Link href={"/profili/" + user.userData.username}>
        <a className="transition-all mt-3 w-[35%] text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-sm font-medium rounded-md">
          <div className="flex items-center justify-center w-9 h-9 bg-gray-300 rounded-full mr-3">
            <img
              alt="User Profile Picture"
              className="w-9 h-9 rounded-full"
              src={user.avatar === null || postedAnonymously ? "/avatar-no.png" : user.userData.avatar}
            />
          </div>
          <div>
            <p>{`${user.userData.name} ${user.userData.surname}`}</p>
            {!postedAnonymously && <span className="text-[12px]">@{user.userData.username}</span>}
          </div>
        </a>
      </Link>
    </>
  );
}
