import { ConfigBuilder, Notifier } from "../../utils";
import { SetProfile } from "../../data/redux/ProfileSlice";

const UserView = async (dispatch, username) => {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/users/UserView/${username}`;
  const config = ConfigBuilder("G", "JSON", {}, false);

  try {
    const req = await fetch(url, config);
    const res = await req.json();

    if (res.status === true) dispatch(SetProfile(res.data));
    else Notifier(dispatch, res.message, "error");
  } catch (error) {
    // TODO: Handle why this is called for no reason
    // Notifier(dispatch, "", "error");
  }
};

export default UserView;
