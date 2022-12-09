import Link from "next/link";

import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ProductSave, ProductUnsave } from "../../../controllers/front";
import { HeartIcon, SmLocationIcon } from "../../icons";

export default function Product(props) {
  const dispatch = useDispatch();

  const { Slug, Name, Gallery, City, Zip, Address } = props.product;

  const user = useSelector((state) => state.user);

  const [inSaves, setIsSaves] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    if (user.Auth === true) {
      const bool = user.Favorites.includes(props.product._id);
      setIsSaves(bool);
    }
  }, [user]);

  const handleSaver = (e) => {
    e.stopPropagation();

    if (inSaves) {
      let newFavorites = user.Favorites.filter((f) => f !== props.product._id);

      ProductUnsave(
        props.product._id,
        user.Id,
        newFavorites,
        setIsSaving,
        dispatch
      );
    } else {
      let newFavorites = structuredClone(user.Favorites);
      newFavorites.push(props.product._id);

      ProductSave(
        props.product._id,
        user.Id,
        newFavorites,
        setIsSaving,
        dispatch
      );
    }
  };

  const address = `${Address}, ${Zip}, ${City}`;

  return (
    <Link href={`/produktet/${Slug}`} key={props.index}>
      <div style={isSaving ? { pointerEvents: "none", opacity: ".75" } : {}} className="group relative lg:bg-red">
        <div className="hover:cursor-pointer min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-80 transition-all lg:aspect-none lg:h-80">
          <img src={Gallery.length === 0 ? "/assets/product-no.png" : Gallery[0]} className="h-full w-full object-cover object-center lg:h-full lg:w-full" />
        </div>
        <div className="flex items-center py-4">
          <div className="flex-auto">
            <div className="flex mb-1 hover:cursor-pointer">
              <SmLocationIcon />

              <p className="text-slate-700 text-[12px] ml-1">
                {address.length > 38
                  ? address.substring(0, 37) + "..."
                  : address}
              </p>
            </div>
            <div className="font-medium hover:cursor-pointer">
              {Name.length > 28 ? Name.substring(0, 27) + "..." : Name}
            </div>
          </div>
          <div
            onClick={(e) => handleSaver(e)}
            className="flex hover:cursor-pointer"
          >
            <div className="pointer-events-auto ml-2 flex-none rounded-md h-8 w-8 flex justify-center align-center items-center px-2 font-medium text-slate-700 shadow-sm ring-1 ring-slate-700/10 hover:bg-slate-50">
              <HeartIcon saved={inSaves} />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
