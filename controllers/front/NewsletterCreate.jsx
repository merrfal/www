import { ConfigBuilder, Notifier } from '../../utils';

const NewsletterCreate = async (email, setEmail, setLoading, dispatch) => {
  setLoading(true);
  
  const url = `${process.env.NEXT_PUBLIC_API_URL}/newsletter/NewsletterCreate/${email}`;
  const config = ConfigBuilder('G', 'JSON', {}, false, false, false);

  try {
    const req = await fetch(url, config);
    const res = await req.json();

    if (res.status === true) {
      Notifier(
        {
          dispatch: dispatch,
          Title: res.message,
          Type: 'success',
        }
      );

      setEmail('');
    }
    else {
      Notifier(
        {
          dispatch: dispatch,
          Title: res.message,
          Type: 'error',
        }
      );
    }
  } catch (error) {
     Notifier(
      {
        dispatch: dispatch,
        Title: "Something wen't wrong while creating this page.",
        Type: 'error',
      }
    );
  }finally{
    setLoading(false);
  }
};

export default NewsletterCreate;
