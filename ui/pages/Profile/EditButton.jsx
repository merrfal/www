import { useDispatch, useSelector } from "react-redux"
import { EditIcon } from "../../icons"
import { Translation } from "../../../utils/Translations"
import { BanUser } from "../../../api/User"

export default function EditButton({ user, isEdit, setIsEdit, id }) {
  const dispatch = useDispatch()
  const account = useSelector((state) => state.Account)
  const edit = () => setIsEdit(!isEdit)

  const HandleBlock = () => {
    if (account?.User?.userAdditionalData?.role === 'admin') {
      BanUser(user?._id, dispatch)
    }
  }

  if ((account?.User?._id === id) || account?.User?.userAdditionalData?.role === 'admin') return (
    <div className="mt-6 flex flex-col justify-stretch space-y-3 sm:flex-row sm:space-y-0 sm:space-x-2">
      {
        (account?.User?.userAdditionalData?.role === 'admin') && 
          <button onClick={HandleBlock} className="inline-flex justify-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 outline-none transition-all duration-500 ease-in-out">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className='text-gray-400 mr-2'>
              <path d="M10 0C4.486 0 0 4.486 0 10C0 15.514 4.486 20 10 20C15.514 20 20 15.514 20 10C20 4.486 15.514 0 10 0ZM2 10C2 8.154 2.634 6.458 3.688 5.103L14.897 16.312C13.4989 17.4056 11.775 17.9998 10 18C5.589 18 2 14.411 2 10ZM16.312 14.897L5.103 3.688C6.50112 2.59443 8.225 2.00021 10 2C14.411 2 18 5.589 18 10C17.9998 11.775 17.4056 13.4989 16.312 14.897Z" fill="currentColor" />
            </svg>

            <span>
              {user?.userAdditionalData?.isBanned ? Translation("unban-user") : Translation("ban-user")}
            </span>
          </button>
      }

      {(account?.User?._id === id) && 
        <button onClick={edit} className="inline-flex justify-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 outline-none transition-all duration-500 ease-in-out">
          <EditIcon />

          <span>
            {Translation("edit-profile")}
          </span>
        </button>
      }
    </div>
  )
}