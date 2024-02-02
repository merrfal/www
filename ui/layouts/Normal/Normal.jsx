import { Header, Footer, Confirmation, Notification, AlertBanner } from "../../components";

export default function Normal(props) {
  const { children } = props;

  return (
    <main>
      <AlertBanner />
      <Header />
      <Confirmation />
      <Notification />
      <div>{children}</div>
      <Footer />
    </main>
  );
}