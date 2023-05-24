import { Translation } from "../../../utils/Translations";

export default function Copyright() {
  const currentYear = new Date().getFullYear();

  return (
    <p className="text-sm text-gray-500 pt-5">
      &copy; {currentYear} {Translation("merrfal")} {Translation("made-possible-by")}{" "}
      <a href="https://jap.org" target="_blank">
        {Translation("jap")}
      </a>
      .
    </p>
  );
}
