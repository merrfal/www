import { useDispatch } from "react-redux";
import { TrashIcon } from "../../icons";
import { OpenConfirmation } from "../../../controllers/Slices";
import { Delete } from "../../../api/Product";
import { Translation } from "../../../utils/Translations";

export default function DeleteComponent({name}) {
  const dispatch = useDispatch();

  const on = () => {
    dispatch(OpenConfirmation({
      Title: `${Translation()} "${name}"?`,
      Message: "A jeni të sigurt që dëshironi ta fshini këtë produkt? Ky veprim nuk mund të kthet prapa.",
      OnConfirm: Delete("idhere", dispatch),
    }))
  }

  return (
    <div onClick={on} className="bg-white p-1 flex justify-center rounded-md hover:bg-red-50 border-gray-150 border transition-all cursor-pointer">
      <TrashIcon class="h-5 w-5 text-gray-400" />
    </div>
  );
}
