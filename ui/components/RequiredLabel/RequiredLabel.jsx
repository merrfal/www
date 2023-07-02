import { string } from "prop-types";

export default function RequiredLabel({ message }) {
  return (
    <p className="text-xs mt-1 ml-[1px] text-red-500">
      {message}
    </p>
  )
}

RequiredLabel.propTypes = {
  message: string.isRequired,
};