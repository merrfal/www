import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Normal } from "../../layouts";
import { Loading } from "../../components";
import { useRouter } from "next/router";
import { Global } from "../../../configs/Head";
import { View } from "../../../api/User";
import { Edit } from "../../components";
import { Products, Cover, Info } from "./";

export default function Profile() {
  const dispatch = useDispatch();
  const router = useRouter();

  const account = useSelector((state) => state.Account);

  const [isEdit, setIsEdit] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (user === null) {
      const { username } = router.query;
      if (username !== "" && username !== undefined) {
        View(username, setUser, dispatch);
      }
    }
  }, [router]);

  return (
    <Normal>
      <Global name="name surname" description="user bio" />
        {user === null && <Loading />}

        {user !== null && (
          <>
            <Cover userData={user?.userData} />

            <Info
              id={user?._id}
              userData={user?.userData}
              isEdit={isEdit}
              setIsEdit={setIsEdit}
            />

            {isEdit && (
              <Edit
                user={user}
                setUser={setUser}
                isEdit={isEdit}
                setIsEdit={setIsEdit}
              />
            )}

            <Products account={account} dispatch={dispatch} user={user} />
          </>
        )}
    </Normal>
  );
}
