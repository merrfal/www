import { Global } from "../../../configs/Head";

export default function Header() {
  const name = "Dhuroni një produkt";
  const description = "Dhuroni një produkt për të ndihmuar njerëzit në këtë kohë të vështirë.";

  return (
    <>
      <Global name={name} description={description} />
      <h3 className="text-3xl font-bold leading-6 text-gray-900 mb-10">
        {name}
      </h3>
      <hr />
    </>
  );
}
