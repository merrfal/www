import { ConfigBuilder, Notifier, Url } from '../../utils';

const NewsletterCreate = async (email, setEmail, setLoading, dispatch) => {
  setLoading(true);
  
  const url = `${Url}/api/newsletter/NewsletterCreate/${email}`;
  const config = ConfigBuilder('G', 'JSON', {}, false, false, false);

  try {
    const req = await fetch(url, config);
    const res = await req.json();

    if (res.status === true) {
      Notifier(dispatch, res.message, 'success');
      setEmail('');
    }
    
    else Notifier(dispatch, res.message, 'error');
  } 
  catch (error) {
    Notifier(dispatch, "Something wen't wrong while creating this page.", 'error');
  }
  finally{
    setLoading(false);
  }
};

export default NewsletterCreate;
