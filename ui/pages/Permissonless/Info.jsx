import { Global } from "../../../configs/Head";

export default function Info() {
  const name = "Skeni akses për këtë pjesë të platformës";
  const description = "Për ta parë këtë pjesë të platformës ju duhet që të identifikoni llogarinë tuaj që përdorni.";

  return (
    <>
      <Global title={name} index={false} />
      <h1 className="mt-2 text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">{name}</h1>
      <p className="mt-5 text-base text-gray-500">{description}</p>
    </>
  );
}
