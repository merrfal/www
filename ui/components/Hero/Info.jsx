import { Global } from "../../../configs/Head";

export default function Info() {
  const name = "Dhuro se nuk pakësohet.";
  const description = "Një platformë që mundëson të dhuroni gjëra për njerëzit që kanë nevoja për ato produkte, përdorimi është falas si produktet që dhurohen.";

  return (
    <>
      <Global title={name} description={description} />
      <h1 className="text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
        <span className="block text-white text-center">{name}</span>
      </h1>
      <p className="mt-3 max-w-lg mx-auto text-center text-[19px] text-white sm:max-w-3xl">
        {description}
      </p>
    </>
  );
}
