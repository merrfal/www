import { useEffect } from "react";
import { Normal } from "../../layouts";
import { Products, Cta, Categories, Hero } from "../../components";
import { Home as Meta } from "../../../data/metas";

export default function Home() {
  return (
    <Normal>
      <Meta />
      <Hero />
      <Categories />
      <Products />
      <Cta />
    </Normal>
  );
}
