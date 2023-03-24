import Link from "next/link";

import { getDownloadURL, ref } from "firebase/storage";
import { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Storage } from "../../../configs/Firebase";
import { useAuth, useGoogle as UseGoogle } from "../../../hooks";
import { AddIcon, SearchIcon } from "../../icons";
import { Dropdown } from "./";

const Auth = ({ account}) => {
  const [menu, setOpen] = useState();
  const [avatar, setAvatar] = useState(null);

  useEffect(() => {
    let avtr = account?.User?.userData?.avatar;

    if (avtr !== undefined) {
      if (avtr.isFirebase) {
        const file = `users/${avtr}`;
        const unextracted = ref(Storage, file);

        getDownloadURL(unextracted)
          .then((url) => setThumbnail(url))
          .catch(() => setThumbnail("avatar-no.png"));
      }

      else setAvatar(avtr.url);
    }

    else setAvatar("avatar-no.png");
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
        <a className="ml-4 p-1 text-gray-400 hover:text-gray-500 lg:block">
          <AddIcon />
        </a>
      </Link>

      <button
        type="button"
        onClick={() => setOpen(!menu)}
        className=" ml-0 sm:ml-3 inline-flex w-full justify-center bg-white text-sm font-medium text-gray-700"
      >
        <img
          src={avatar || "avatar-no.png"}
          onError={() => setAvatar("avatar-no.png")}
          className={`w-7 rounded-full ${avatar === null ? "scale-110 blur-2xl grayscale" : "scale-100 blur-0 grayscale-0"}`}
        />
      </button>


      {menu && <Dropdown username={account.User.userData.username} />}
    </div>
  );
};

const NotAuth = () => {
  const dispatch = useDispatch();
  return <UseGoogle dispatch={dispatch} />;
};

export default function User() {
  const account = useSelector((state) => state.Account);
  useAuth(account);

  return (
    <>
      {account.Auth && <Auth account={account} />}
      {!account.Auth && <NotAuth />}
    </>
  );
}
