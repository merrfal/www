import { useSelector } from "react-redux";
import { Container } from "./";

export default function Confirmation() {
  const { Visibility } = useSelector((state) => state.Confirmation);
  if (Visibility) return <Container />;
}
