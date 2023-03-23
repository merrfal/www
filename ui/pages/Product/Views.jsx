import { EyeIcon } from "../../icons";

export default function Views({
  product: {
    productAdditionalData: { views },
  },
}) {
  return (
    <div className="flex items-center">
      <EyeIcon />
      <p className="text-sm text-gray-500">{views} shikues</p>
    </div>
  );
}
