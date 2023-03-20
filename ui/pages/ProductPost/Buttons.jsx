import { useDispatch } from "react-redux";
import { CreateFront } from "../../../controllers/Product";

export default function Buttons({ product, setLoading }) {
  const dispatch = useDispatch();

  const onValidation = () =>
    product?.Name &&
    product.Phone &&
    product?.City &&
    product?.Category &&
    product.Address &&
    product?.UserShow &&
    product.images.length !== 0

  return (
    <div className="text-right mb-2 mr-2">
      <button
        className="inline-flex mt-8 justify-center rounded-md border border-transparent bg-[#377DFF] py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-[#377DFF] focus:outline-none"
        disabled={onValidation()}
        onClick={() => CreateFront(product, setLoading, dispatch)}
      >
        Publiko Produktin
      </button>
    </div>
  );
}
