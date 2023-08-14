import { Header, Footer, Confirmation, Notification } from "../../components";

export default function Normal(props) {
  const { children } = props;

  return (
    <main>
      <Header />
      <Confirmation />
      <Notification />
      <div>{children}</div>
      <Footer />
    </main>
  );
}