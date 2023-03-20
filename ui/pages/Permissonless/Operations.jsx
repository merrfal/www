import { useDispatch } from "react-redux";
import { useGoogle } from "../../../hooks";

export default function Operations() {
  const dispatch = useDispatch();

  return (
    <div className="mt-6">
      <div onClick={() => useGoogle(dispatch)}>
        <p className="hover:cursor-pointer text-base font-medium text-indigo-600 hover:text-indigo-500">
          Kyçu në llogari &larr;
        </p>
      </div>
    </div>
  );
}
