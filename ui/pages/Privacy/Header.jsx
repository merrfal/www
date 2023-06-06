import { Global } from "../../../configs/Head";
import { PrivacyMeta } from "../../../configs/Metas";

export default function Header() {
  const meta = PrivacyMeta();

  return (
    <>
      <Global title={meta?.title} description={meta?.description} />

      <h1 className="text-4xl mb-4 font-extrabold tracking-tight text-gray-900">
        {meta?.title}
      </h1>
    </>
  );
}
