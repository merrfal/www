import { string } from "prop-types";

export default function CloseIcon({ className }) {
  return (
    <svg
      className={className ? className : "h-6 w-6"}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  );
}

CloseIcon.propTypes = {
  className: string,
};