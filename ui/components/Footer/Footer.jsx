import Link from "next/link";

import { useState } from "react";
import { useDispatch } from "react-redux";
import { NewsletterCreate } from "../../../controllers/front";
import { IconIcon } from "../../icons";

export default function Footer() {
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const currentYear = new Date().getFullYear();

  return (
    <footer aria-labelledby="footer-heading" className="bg-white mb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="border-t border-gray-200 pt-20 pb-10 border-b border-gray-40">
          <div className="grid grid-cols-1 md:grid-cols-12 md:grid-flow-col md:gap-x-6 md:gap-y-16 md:auto-rows-min">
            <Link href="/">
              <div className="hover:cursor-pointer col-span-1 md:col-span-2 lg:row-start-1 lg:col-start-1">
                <IconIcon />
              </div>
            </Link>

            <div className="mt-10 col-span-6 grid grid-cols-2 gap-8 sm:grid-cols-3 md:mt-0 md:row-start-1 md:col-start-3 md:col-span-8 lg:col-start-2 lg:col-span-7">
              <div className="grid grid-cols-1 gap-y-12 sm:col-span-2 sm:grid-cols-2 sm:gap-x-8">
                <div>
                  <h3 className="text-sm font-medium text-gray-900 select-none">
                    Kategoritë
                  </h3>
                  <ul role="list" className="mt-6 space-y-6">
                    <li className="text-sm">
                      <Link href={`/produktet?kategoria=Biznes dhe Punë`}>
                        <a className="text-gray-500 hover:text-gray-600">
                          Biznes dhe Punë
                        </a>
                      </Link>
                    </li>

                    <li className="text-sm">
                      <Link href={`/produktet?kategoria=Veshje`}>
                        <a className="text-gray-500 hover:text-gray-600">
                          Veshje
                        </a>
                      </Link>
                    </li>

                    <li className="text-sm">
                      <Link href={`/produktet?kategoria=Elektronika`}>
                        <a className="text-gray-500 hover:text-gray-600">
                          Elektronika
                        </a>
                      </Link>
                    </li>

                    <li className="text-sm">
                      <Link href={`/produktet?kategoria=Sport`}>
                        <a className="text-gray-500 hover:text-gray-600">
                          Sport
                        </a>
                      </Link>
                    </li>

                    <li className="text-sm">
                      <Link href={`/produktet/?kategoria=Shtëpi`}>
                        <a className="text-gray-500 hover:text-gray-600">
                          Shtëpi
                        </a>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="hidden sm:inline-block">
                  <h3 className="text-sm font-medium text-gray-900 select-none">
                    Më Shumë
                  </h3>
                  <ul role="list" className="mt-6 space-y-6">
                    <li className="text-sm">
                      <Link href={`/rreth-nesh`}>
                        <a className="text-gray-500 hover:text-gray-600">
                          Rreth Nesh
                        </a>
                      </Link>
                    </li>

                    <li className="text-sm">
                      <Link href={`/kontribo`}>
                        <a className="text-gray-500 hover:text-gray-600">
                          Kontribo
                        </a>
                      </Link>
                    </li>

                    <li className="text-sm">
                      <Link href={`/kushtet-e-sherbimit`}>
                        <a className="text-gray-500 hover:text-gray-600">
                          Kushtet e Shërbimit
                        </a>
                      </Link>
                    </li>

                    <li className="text-sm">
                      <Link href={`/politika-e-privatesise`}>
                        <a className="text-gray-500 hover:text-gray-600">
                          Politika e privatësisë
                        </a>
                      </Link>
                    </li>

                    <li className="text-sm">
                      <Link href={`/na-kontaktoni`}>
                        <a className="text-gray-500 hover:text-gray-600">
                          Na Kontaktoni
                        </a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-900 select-none">
                  Projekte tjera
                </h3>
                <ul role="list" className="mt-6 space-y-6">
                  <li className="text-sm">
                    <a
                      href="https://igerma.com/"
                      target="_blank"
                      className="text-gray-500 hover:text-gray-600"
                    >
                      Instituti Germa
                    </a>
                  </li>

                  <li className="text-sm">
                    <a
                      href="https://dhurataebajramit.com"
                      target="_blank"
                      className="text-gray-500 hover:text-gray-600"
                    >
                      Dhurata E Bajramit
                    </a>
                  </li>

                  <li className="text-sm">
                    <a
                      href="https://ekonomiaislame.com"
                      target="_blank"
                      className="text-gray-500 hover:text-gray-600"
                    >
                      Ekonomia Islame
                    </a>
                  </li>

                  <li className="text-sm">
                    <a
                      href="https://strehajone.com"
                      target="_blank"
                      className="text-gray-500 hover:text-gray-600"
                    >
                      Streha Jonë
                    </a>
                  </li>

                  <li className="text-sm">
                    <a
                      href="https://literaturaislame.com"
                      target="_blank"
                      className="text-gray-500 hover:text-gray-600"
                    >
                      Literatura Islame
                    </a>
                  </li>

                  <li className="text-sm">
                    <a
                      href="https://pergjigje.net"
                      target="_blank"
                      className="text-gray-500 hover:text-gray-600"
                    >
                      Pyetje dhe Përgjigje
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-12 md:mt-0 md:row-start-2 md:col-start-3 md:col-span-8 lg:row-start-1 lg:col-start-9 lg:col-span-4">
              <h3 className="text-sm font-medium text-gray-900 select-none">
                Regjistrohu për lajmet e reja
              </h3>
              <p className="mt-5 text-sm text-gray-500">
                Merrni njoftime të ndryshme rreth produkteve ose për platformën
                tonë ose platforma tjera të ngjajshme.
              </p>
              <form
                className="mt-4 flex sm:max-w-md"
                style={loading ? { pointerEvents: "none", opacity: ".75" } : {}}
              >
                <label htmlFor="email-address" className="sr-only">
                  Adresa elektronike
                </label>
                <input
                  id="email-address"
                  type="text"
                  required
                  placeholder="emaili@juaj.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="appearance-none min-w-0 w-full bg-white border border-gray-300 rounded-md shadow-sm py-2 px-4 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                />
                <div className="ml-4 flex-shrink-0">
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      NewsletterCreate(email, setEmail, setLoading, dispatch);
                    }}
                    type="submit"
                    className="w-full bg-[#377DFF] border border-transparent rounded-md shadow-sm py-2 px-4 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Abonohu
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <p className="text-sm text-gray-500 pt-5">
          &copy; {currentYear} Merr Fal. Të gjitha të drejtat e rezervuara.
        </p>
      </div>
    </footer>
  );
}
