import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { Create } from "../../../api/Product";
import { ProductFormValidation, SlugBuilderAndValidation } from "../../../utils/Forms";

export default function Buttons({ product, setLoading }) {
  const dispatch = useDispatch();
  const router = useRouter();

  const account = useSelector((state) => state.Account);

  const onValidation = () =>
    product?.Name &&
    product.Phone &&
    product?.City &&
    product?.Category &&
    product.Address &&
    product?.UserShow &&
    product.images.length !== 0;
  

  const handlePublish = () => {
    const initalProduct = {
      ...product,
      user: account.User._id,
      slug: SlugBuilderAndValidation(product.name),
      thumbnail: 'https://e498rczdjg6.exactdn.com/wp-content/uploads/2020/12/Krosslaug-2.png',
    }

    console.log({initalProduct})

    Create(initalProduct, router, setLoading, dispatch);
  }

  return (
    <div className="text-right mb-2 mr-2">
      <button
        className="inline-flex mt-8 justify-center rounded-md border border-transparent bg-[#377DFF] py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-[#377DFF] focus:outline-none"
        disabled={onValidation()}
        onClick={handlePublish}
      >
        Publiko Produktin
      </button>
    </div>
  );
}
