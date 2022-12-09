import { ConfigBuilder, Notifier, Response, Url } from '../../utils';

const ContactCreate = async (fields, setLoading, setFields, dispatch) => {
  setLoading(true);

  const url = `${Url}/api/contact/ContactCreate`;
  const config = ConfigBuilder('P', 'JSON', fields, true, false, false);

  // const regEx = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,3}$/i;
  // console.log('success',fields.Email)
  try {
    const req = await fetch(url, config);
    const res = await req.json();
   
    // if (regEx.test('ssd')) Notifier(dispatch, "Ju lutem jepni një email valide", 'error')

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
