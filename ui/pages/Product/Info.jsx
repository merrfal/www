import { CapitalizeText } from "../../../utils/TextFormatting";

export default function Info({ productData }) {
  const { name, description } = productData;

  return (
    <>
      <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 flex">
        {CapitalizeText(name)} 
      </h1>

      <div className="text-[15.5px] mt-3 mb-8 text-gray-700 space-y-6">
        <p>{description}</p>
      </div>
    </>
  );
}
