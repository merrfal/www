import { Info, Buttons } from "./";

export default function Cta() {
  return (
    <div className="bg-white ">
      <div className="max-w-7xl mx-auto pb-16 px-4 pt-12 sm:px-6 lg:max-w-7xl lg:px-8 lg:flex lg:items-center lg:justify-between ">
        <Info />
        <Buttons />
      </div>
    </div>
  );
}
