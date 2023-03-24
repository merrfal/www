import { Global } from "../../../configs/Head";
import { ManageMeta } from "../../../configs/Metas";

export default function Header({product, mode}) {
  const meta = ManageMeta(mode, product);

  return (
    <>
      <Global title={meta.title} description={meta.description} />
      <h3 className="text-3xl font-bold leading-6 text-gray-900 mb-10">
      Dhuroni një produkt
      </h3>
      <hr />
    </>
  );
}
