import { Global } from "../../../configs/Head";

export default function Header({ mode }) {
  const title = mode === "terms" ? "" : "";
  const description = mode === "terms" ? "" : "";

  return (
    <>
      <Global title={title} description={description} />
      <h1 className="text-4xl mb-4 font-extrabold tracking-tight text-gray-900">{title}</h1>
      <p className="mt-4 max-w-xl text-sm text-gray-700">{description}</p>
    </>
  );
}
