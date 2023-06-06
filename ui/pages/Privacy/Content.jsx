import { APP_EMAIL } from "../../../configs/Constants";

export default function Content() {
  return (
    <div className="mt-4 w-full text-m text-gray-700 mb-20">
      <p className="mt-4 w-full text-m text-gray-600 mb-4">
        Me përdorimin e platformës automatikisht pajtoheni me këtë mënyrë
        trajtimi të privatësisë:
      </p>

      <ul className="list-disc ml-8 w-[60%] lg:w-[60%] 2xl:w-[60%] xl:w-[60%] md:w-[80%] sm:w-[100%]">
        <li className="mt-4 w-full text-sm text-gray-600">
          Ne përdorim Adresen tuaj të Internetit për të servuar produkte në
          zonën tuaj më të afërt, dhe për informata në krijim të llogarisë për
          lehtësim të procesit të regjistrimit. (IP nuk ruhet në databazën tonë
          dhe është anonime plotësishtë.)
        </li>

        <li className="mt-4 w-full text-sm text-gray-600">
          Ne përdorim llogarinë tuaj në Google për identifikm to llogarisë
          ekzistuese apo për regjistrimin e një llogarie të re në platform.
          (Asnjë informatë sensitive nuk ben pjesë këtu, dhe ato të nevojshmet
          si Emri, Mbiemri edhe të ngjajshme ruhet në databazën tonë.)
        </li>

        <li className="mt-4 w-full text-sm text-gray-600">
          Ne nuk i shpërndajmë të dhënat tuaja me asnjë shërbim tjetër përveq
          asaj tonës, ne respektojm të dhënat e tuaja dhe ato janë të sigurta me
          ne duke marrë masat e duhura për ti ruajtur ato në mënyrën më të
          sigurt. Nese keni pyetje tjera për privatësinë tuaj, ju mundeni të na
          kontaktoni në:{" "}
          <a
            className="hover:text-[#377DFF] transition-all"
            href={`mailto:${APP_EMAIL}`}
          >
            {APP_EMAIL}
          </a>
          .
        </li>
      </ul>
    </div>
  );
}
