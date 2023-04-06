import { Global } from "../../../configs/Head";

import {
  ERROR_404_MESSAGE,
  ERROR_404_TITLE,
  ERROR_500_MESSAGE,
  ERROR_500_TITLE,
} from "../../../configs/Messages";

export default function Info({ code }) {
  const name = code === 404 ? ERROR_404_TITLE : ERROR_500_TITLE;
  const message = code === 404 ? ERROR_404_MESSAGE : ERROR_500_MESSAGE;

  return (
      <div className="w-full flex justify-center items-center flex-col align-center">
        <Global title={name} description={message} index={false} />
        <h1 className="mt-2 text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">{name}</h1>
        <p className="mt-5 text-base w-[50%] text-gray-500">{message}</p>
      </div>
  );
}
