import { bool } from "prop-types";

export default function BigHeartIcon({ saved }) {
  return (
    <svg
      className="h-6 w-6 flex-shrink-0"
      xmlns="http://www.w3.org/2000/svg"
      fill={saved ? "#377DFF" : "none"}
      viewBox="0 0 24 24"
      stroke={saved ? "#377DFF" : "currentColor"}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
      />
    </svg>
  );
}

BigHeartIcon.propTypes = {
  saved: bool.isRequired,
};