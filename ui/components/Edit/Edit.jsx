import { useEffect, useRef, useState } from "react";

import {
  Address,
  Avatar,
  Buttons,
  City,
  Country,
  Description,
  Email,
  Name,
  Cover,
  Phone,
  Surname,
  Username,
} from "./";

export default function Edit({ user, setUser, setIsEdit }) {
  const [loading, setIsLoading] = useState(false);
  const [userClone, setUserClone] = useState(user);

  const load = loading ? { opacity: ".75", pointerEvents: "none" } : {};

  let clickOutside = (handler) => {
    let refInstance = useRef();

    useEffect(() => {
      let method = (e) => !refInstance.current?.contains(e.target) && handler();
      document.addEventListener("mousedown", method);
      return () => document.removeEventListener("mousedown", method);
    });

    return refInstance;
  };

  let ref = clickOutside(() => setIsEdit(false));

  return (
    <div style={load} className="relative z-10">
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
      <div className="fixed inset-0 z-10 overflow-y-auto">
        <div className="flex min-h-full items-end justify-center text-center sm:items-center sm:p-0">
          <div ref={ref} className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-xl">
            <div className="mt-3 text-center sm:mt-0 p-4 sm:text-left">
              <div className=" mt-5 md:col-span-2 md:mt-0">
                <div className="p-2 overflow-hidden">
                  <Cover user={userClone} setUser={setUserClone} />
                  <div className="grid grid-cols-6 gap-6">
                    <Avatar user={userClone} setUser={setUserClone} />
                    <Name user={userClone} setUser={setUserClone} />
                    <Surname user={userClone} setUser={setUserClone} />
                    <Email user={userClone} />
                    <Username user={userClone} setUser={setUserClone} />
                    <Description user={userClone} setUser={setUserClone} />
                    <Address user={userClone} setUser={setUserClone} />
                    <Phone user={userClone} setUser={setUserClone} />
                    <Country user={userClone} />
                    <City user={userClone} setUser={setUserClone} />
                  </div>
                </div>
              </div>
            </div>
            
            <Buttons 
              userClone={userClone}
              setUserClone={setUserClone}
              setUser={setUser} 
              setIsLoading={setIsLoading} 
              setIsEdit={setIsEdit} 
            />
          </div>
        </div>
      </div>
    </div>
  );
}
