import { useDispatch } from "react-redux";
import { OpenSearch } from "../../../controllers/Slices";
import { SearchIcon } from "../../icons";

export default function Search() {
  const dispatch = useDispatch();
  const open = () => dispatch(OpenSearch());

  return (
    <div
      onClick={open}
      className="hover:cursor-pointer text-gray-400 hover:text-gray-500"
    >
      <SearchIcon />
    </div>
  );
}
