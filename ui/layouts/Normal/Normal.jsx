import { Header, Footer, Confirmation, Notification } from "../../components";

export default function Normal(props) {
  return (
    <main>
      <Header />
      <Confirmation />
      <Notification />
      <section>{props.children}</section>
      <Footer />
    </main>
  );
}
