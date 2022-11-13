import { ConfigBuilder, Notifier } from '../../utils';

const ContactCreate = async (dispatch, contact) => {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/contacts/ContactCreate`;
  const config = ConfigBuilder('P', 'JSON', contact, true, false, false);

  try {
    const req = await fetch(url, config);
    const res = await req.json();

    if (res.status === true) {
      dispatch(UnsetPrecontact());

      window.location.href="/posts"

      Notifier(
        {
          dispatch: dispatch,
          notificationMessage: res.message,
          notificationType: 'success',
        }
      );
    }
    else {
      Notifier(
        {
          dispatch: dispatch,
          notificationMessage: res.message,
          notificationType: 'error',
        }
      );
    }
  } catch (error) {
    Notifier(
      {
        dispatch: dispatch,
        notificationMessage: "Something wen't wrong while creating this message.",
        notificationType: 'error',
      }
    );
  }
};

export default ContactCreate;