import {
  Header,
  Footer,
  Confirmation,
  Search,
  Notification,
} from "../../components";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { UserAuth } from "../../../controllers/front";
import { SetUserNotAuthenticated } from "../../../data/redux/UserSlice";
import { Loader } from "../../pages";

export default function Normal(props) {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  useEffect(() => {
    const id = localStorage.getItem("user");
    const token = localStorage.getItem("token");

    if (user && token) {
      if (!user.Auth) {
        UserAuth(dispatch, id);
      }
    } else dispatch(SetUserNotAuthenticated());
  }, [user]);

  if (user.Loading === true) return <Loader />;
  else
    return (
      <main>
        <Header />
        <Confirmation />
        <Notification />
        <Search />
        <section>{props.children}</section>
        <Footer />
      </main>
    );
}
