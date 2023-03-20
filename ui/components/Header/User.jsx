import Link from "next/link";

import { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useAuth, useGoogle as UseGoogle } from "../../../hooks";
import { AddIcon } from "../../icons";
import { Dropdown } from "./";

const Auth = ({ account }) => {
  const [menu, setOpen] = useState();
  const [avatar, setAvatar] = useState("");

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
        className=" ml-0 sm:ml-3 p-2 inline-flex w-full justify-center bg-white text-sm font-medium text-gray-700"
      >
        <img
          className="w-6 h-6 rounded-full"
          src={
            account.User.userData.avatar === null
              ? "/avatar-no.png"
              : account.User.userData.avatar
          }
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
