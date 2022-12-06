import { ConfigBuilder, Notifier } from '../../utils';

const ContactCreate = async (fields, setLoading, setFields, dispatch) => {
  setLoading(true);

  const url = `${process.env.NEXT_PUBLIC_API_URL}/contact/ContactCreate`;
  const config = ConfigBuilder('P', 'JSON', fields, true, false, false);

  try {
    const req = await fetch(url, config);
    const res = await req.json();

    if (res.status === true) {
      Notifier(dispatch, res.message, 'success');

      setFields(
        {
          Name: '',
          Surname: '',
          Email: '',
          Message: '',
        }
      );
    }
    else Notifier(dispatch, res.message, 'error');
  } 
  catch (error) {
    Notifier(dispatch, "Something wen't wrong while creating this page.", 'error');
  } 
  finally {
    setTimeout(() => setLoading(false), 1000)
  }
};

export default ContactCreate;
