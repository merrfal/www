import { useSelector } from "react-redux";
import { Container } from ".";

export default function Notification() {
  const { Visibility } = useSelector((state) => state.Notification);
  if (Visibility) return <Container />;
}
