import { string } from "prop-types";

export default function RealTimeValidation({message}) {
  return (
    <p className="text-xs mt-1 ml-[1px] text-red-500">
      {message}
    </p>
  )
}

RealTimeValidation.propTypes = {
  message: string.isRequired,
}