import Link from "next/link";

import { getDownloadURL, ref } from "firebase/storage";
import { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Storage } from "../../../configs/Firebase";
import { useAuth, useGoogle as UseGoogle } from "../../../hooks";
import { AddIcon } from "../../icons";
import { Dropdown } from "./";
import { NO_AVATAR } from "../../../configs/Constants";
import { isStorageReadable } from "../../../utils/Firebase";

const Auth = ({ account }) => {
  const [menu, setOpen] = useState();
  const [avatar, setAvatar] = useState(null);

  useEffect(() => {
    if (account.Auth) {
      let avtr = account?.User?.userData?.avatar;

      if(avtr === NO_AVATAR) setAvatar(NO_AVATAR);

      else {
        let isFirebaseReadable = isStorageReadable(avtr);

        if(isFirebaseReadable) {
          const file = `users/${avtr}`;
          const unextracted = ref(Storage, file);

          const url = getDownloadURL(unextracted);
          setAvatar(url || NO_AVATAR);
        }

        else setAvatar(avtr);
      }
    }
  }, [account]);

  let clickOutside = (handler) => {
    let domNode = useRef();

    useEffect(() => {
      let maybeHandler = (event) => !domNode.current.contains(event.target) && handler();
      document.addEventListener("mousedown", maybeHandler);

      return () => document.removeEventListener("mousedown", maybeHandler);
    });

    return domNode;
  };

  let domNode = clickOutside(() => setOpen(false));

  return (
    <div className="relative accoount-menu flex items-center" ref={domNode}>
      <Link href="/shto">
        <a className="p-1 mr-1 text-gray-400 hover:text-gray-500 lg:block hover:opacity-[.85] transition-all">
          <AddIcon />
        </a>
      </Link>

      <button
        type="button"
        onClick={() => setOpen(!menu)}
        className="ml-0 inline-flex w-full justify-center bg-white text-sm font-medium text-gray-700 hover:opacity-[.85] transition-all"
      >
        <img
          loading="lazy"
          src={avatar || NO_AVATAR}
          onError={() => setAvatar(NO_AVATAR)}
          className={`w-9 md:w-8 rounded-full ${avatar === null ? "scale-110 blur-2xl grayscale" : "scale-100 blur-0 grayscale-0"}`}
        />
      </button>
      

      {menu && <Dropdown username={account.User.userData.username} />}
    </div>
  );
};

const NotAuth = ({account}) => {
  const dispatch = useDispatch();
  return <UseGoogle account={account} dispatch={dispatch} />;
};

export default function User() {
  const account = useSelector((state) => state.Account);
  useAuth(account);

  return (
    <>
      {account.Auth && <Auth account={account} />}
      {!account.Auth && <NotAuth account={account} />}
    </>
  );
}
