import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Normal } from "../../layouts";
import { Loading } from "../../components";
import { useRouter } from "next/router";
import { Global } from "../../../configs/Head";
import { View } from "../../../api/User";
import { Edit } from "../../components";
import { Products, Cover, Info } from "./";
import { ProfilePage } from "../../../configs/Metas";

export default function Profile() {
  const dispatch = useDispatch();
  const router = useRouter();

  const account = useSelector((state) => state.Account);

  const [isEdit, setIsEdit] = useState(false);
  const [user, setUser] = useState(null);
  const [avatar, setAvatar] = useState(null);
  const [cover, setCover] = useState(null);

  useEffect(() => {
    if (user === null) {
      const { username } = router.query;
      if (username !== "" && username !== undefined) {
        View(username, setUser, dispatch);
      }
    }
  }, [router]);

  const meta = ProfilePage(user);

  return (
    <Normal>
      <Global title={meta?.title} description={meta?.description} />

      {user === null && <Loading />}

      {user !== null && (
        <>
          <Cover 
            user={user} 
            cover={cover} 
            setCover={setCover} 
          />

          <Info
            user={user}
            isEdit={isEdit}
            setIsEdit={setIsEdit}
            avatar={avatar}
            setAvatar={setAvatar}
          />

          {isEdit && (
            <Edit
              user={user}
              setUser={setUser}
              isEdit={isEdit}
              setIsEdit={setIsEdit}
            />
          )}

          <Products 
            account={account} 
            dispatch={dispatch} 
            user={user} 
          />
        </>
      )}
    </Normal>
  );
}
