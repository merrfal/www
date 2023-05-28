import packagejson from "../../../package.json";
import { Translation } from "../../../utils/Translations";

export default function Copyright() {
  const currentYear = new Date().getFullYear();

  return (
    <p className="text-sm text-gray-500 pt-5">
      &copy; {currentYear} {Translation("merrfal")} <span style={{fontSize: '13px'}}>(v{packagejson?.version?.substring(0, 3)})</span> {Translation("made-possible-by")}{" "}
      <a href="https://jap.org" target="_blank">
        {Translation("jap")}
      </a>
      .
    </p>
  );
}
