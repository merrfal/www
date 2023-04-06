import { StepOneIcon, StepThreeIcon, StepTwoIcon } from "../../icons";

export default function Steps() {
  return (
    <section className="mt-12">
      <div className="border-t divide-y divide-gray-200">
        <div className="mt-4">
          <h3>
            <button className="group relative w-full py-6 flex justify-between items-center text-left">
              <span className="text-gray-900 text-sm font-medium">
                Procesi deri tek marrja
              </span>
            </button>
          </h3>
          <div className="pb-6 prose prose-sm" id="disclosure-1">
            <div className="max-w-2xl mx-auto">
              <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-3 sm:gap-x-3 lg:grid-cols-3 lg:gap-x-3">
                <div>
                  <StepOneIcon />
                  <h3 className="mt-6 text-sm font-medium text-gray-900">
                    Kontakto Dhënësin
                  </h3>
                  <p className="mt-2 text-sm text-gray-500">
                    Kontaktoni në telefon personin që dëshiron ta dhurojë
                    produktin.
                  </p>
                </div>

                <div>
                  <StepTwoIcon />
                  <h3 className="mt-6 text-sm font-medium text-gray-900">
                    Shkoni në Vendmarrjen
                  </h3>
                  <p className="mt-2 text-sm text-gray-500">
                    Pasi ta keni marrë lokacionin dhe keni caktuar takimin
                    shkoni te lokacioni.
                  </p>
                </div>

                <div>
                  <StepThreeIcon />
                  <h3 className="mt-6 text-sm font-medium text-gray-900">
                    Mereni Produktin
                  </h3>
                  <p className="mt-2 text-sm text-gray-500">
                    Pastaj takohuni me dhënësin për ta marrë produktin dhe ta
                    shfrytëzoni.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
