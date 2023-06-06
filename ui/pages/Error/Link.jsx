import Href from "next/link";
import { Translation } from "../../../utils/Translations";

export default function Link() {
  return (
    <div className="mt-6">
      <Href href="/">
        <span className="text-base font-medium text-indigo-600 hover:text-indigo-500">
          {Translation("go-to-homepage")} &rarr;
        </span>
      </Href>
    </div>
  );
}
