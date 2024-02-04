import { Translation } from "../../../utils/Translations";
import { StepOneIcon, StepThreeIcon, StepTwoIcon } from "../../icons";

export default function Steps() {
  return (
    <section className="mt-12">
      <div className="border-t divide-y divide-gray-200">
        <div className="mt-4">
          <h3>
            <div className="group relative w-full py-6 flex justify-between items-center text-left">
              <span className="text-gray-900 text-sm font-medium">
                {Translation("process-until-the-take")}
              </span>
            </div>
          </h3>

          <div className="pb-6 prose prose-sm" id="disclosure-1">
            <div className="max-w-2xl mx-auto">
              <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-3 sm:gap-x-3 lg:grid-cols-3 lg:gap-x-3">
                <div>
                  <StepOneIcon />

                  <h3 className="mt-6 text-sm font-medium text-gray-900">
                    {Translation("contact-the-giver")}
                  </h3>

                  <p className="mt-2 text-sm text-gray-500">
                    {Translation("contact-the-giver-description")}
                  </p>
                </div>

                <div>
                  <StepTwoIcon />

                  <h3 className="mt-6 text-sm font-medium text-gray-900">
                    {Translation("go-to-the-take-place")}
                  </h3>

                  <p className="mt-2 text-sm text-gray-500">
                    {Translation("go-to-the-take-place-description")}
                  </p>
                </div>

                <div>
                  <StepThreeIcon />
                  
                  <h3 className="mt-6 text-sm font-medium text-gray-900">
                    Merreni Produktin
                  </h3>

                  <p className="mt-2 text-sm text-gray-500">
                    {Translation("get-the-product-description")}
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
