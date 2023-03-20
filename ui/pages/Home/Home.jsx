import { Normal } from "../../layouts";
import { Products, Cta, Categories, Hero } from "../../components";

export default function Home() {
  return (
    <Normal>
      <Hero />
      <Categories />
      <Products />
      <Cta />
    </Normal>
  );
}
