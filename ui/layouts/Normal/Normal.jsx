import { Container, Page } from './Components';
import { Header, Footer } from "../../components";
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { UserAuth } from '../../../controllers/front';
import { SetUserNotAuthenticated } from '../../../data/redux/UserSlice';

export default function Normal(props) {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  useEffect(() => {
    const id = localStorage.getItem('user');
    const token = localStorage.getItem('token');

    if(user && token) UserAuth(dispatch, id);
    else dispatch(SetUserNotAuthenticated())
  }, [user]);

  if(user.Loading === true) return <div>loading...</div>

  else return (
    <Container>
      <Header />
      <Page>{props.children}</Page>
      <Footer />
    </Container>
  );
}
