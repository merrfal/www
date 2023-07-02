import PropTypes from "prop-types";

import { useDispatch, useSelector } from "react-redux";
import { CloseConfirmation } from "../../../controllers/Slices";
import { Translation } from "../../../utils/Translations";

export default function Operations({ router }) {
  const confirmation = useSelector((state) => state.Confirmation);
  const dispatch = useDispatch();

  const onConfirm = () => {
    confirmation.Action();
    dispatch(CloseConfirmation());
  };

  const onCancel = () => {
    dispatch(CloseConfirmation());
    
    if (router?.query?.fshije !== undefined) {
      let path = router.asPath;
      path = path.replace("?fshije=po", "");

      router.replace(path);
    }
  }

  return (
    <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
      <button
        type="button"
        onClick={onConfirm}
        className="inline-flex w-full justify-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none sm:ml-3 sm:w-auto sm:text-sm transition-all cursor-pointer"
      >
        {Translation("on-confirm")}
      </button>

      <button
        onClick={onCancel}
        type="button"
        className="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm transition-all cursor-pointer"
      >
        {Translation("on-cancel")}
      </button>
    </div>
  );
}

Operations.propTypes = {
  router: PropTypes.object.isRequired
}