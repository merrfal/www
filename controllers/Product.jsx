import * as Messages from "../configs/Messages";

import { Product, User } from "../configs/Models";
import { storage } from "../configs/Firebase";
import { v4 } from "uuid";
import { UserProductList } from "./Slices";
import { Request } from "../utils/Http";
import { Notification, Response } from "../utils/Response";

import {
  ref,
  uploadBytesResumable,
  getDownloadURL,
  deleteObject,
} from "firebase/storage";

import {
  SetPages,
  SetPage,
  SetSearch,
  SetFilter,
  UnsetPrepage,
} from "../controllers/Slices";

export const CreateBack = async (payload, res) => {
  try {
    // let path = req.body.Name;
    // const exits = await Product.find({ Name: path }).count();
    // if (exits) path = path + exits;
    // path = path.toLowerCase().replace(/ /g, "-");

    const _new = new Product({ ...payload, slug: "qweqwewqe-" + v4() });
    const product = await _new.save();

    const response = {
      res,
      code: product ? 200 : 400,
      success: product ? true : false,
      data: product ? { ...product._doc } : null,
      message: product
        ? "Produkti u krijua me sukses."
        : "Produkti nuk u krijua për shkak të disa gabimeve.",
    };

    Response(response);
  } catch (error) {
    const response = {
      res,
      code: 500,
      success: false,
      data: null,
      message: "Gabim i brendshëm i serverit gjatë krijimit të produktit.",
      error,
    };

    Response(response);
  }
};

export const DeleteBack = async (payload, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.query.id);

    if (product) {
      const users = await User.find({});

      users.forEach(async (user) => {
        if (user.Favorites.includes(product._id)) {
          user.Favorites.splice(user.Wishlist.indexOf(product._id), 1);
          await user.save();
        }
      });

      Response(res, 200, true, "Produkti u fshi me sukses.", product);
    }
  } catch (error) {
    Response(
      res,
      500,
      false,
      "Gabim i brendshëm i serverit gjatë fshirjes së produktit nga platforma.",
      null
    );
  }
};

export const FiltersBack = async (payload, res) => {
  try {
    const { Cities, Categories } = req.body;

    const products = await Promise.all([
      ...Cities.map(async (City) => Product.find({ City })),
      ...Categories.map(async (Category) => Product.find({ Category })),
    ]);

    const allProducts = products.slice();
    const collectedProducts = [];

    for (let i = 0; i < allProducts.length; i++)
      collectedProducts.push(...allProducts[i]);

    if (products.length > 0)
      Response(
        res,
        200,
        true,
        "Të gjitha produktet u morën me sukses.",
        collectedProducts
      );
    else
      Response(res, 404, false, "Asnjë produkt nuk u gjet në platformë.", null);
  } catch (error) {
    Response(
      res,
      500,
      false,
      "Gabim i brendshëm i serverit gjatë gjetjes së produkteve.",
      null
    );
  }
};

export const LatestBack = async (payload, res) => {
  try {
    const products = await Product.find({}).sort({ createdAt: -1 }).limit(16);

    const payload = {
      res,
      code: products ? 200 : 404,
      success: products ? true : false,
      data: products ? products : [],
      message: products
        ? Messages.PRODUCTS_LATEST_SUCCESS
        : Messages.PRODUCTS_LATEST_ERROR,
    };

    console.log({ payload });

    Response(payload);
  } catch (error) {
    const payload = {
      res,
      code: 500,
      success: false,
      data: null,
      message: Messages.PRODUCTS_LATEST_ERROR,
      error,
    };

    Response(payload);
  }
};

export const ListBack = async (payload, res) => {
  try {
    const allProducts = await Product.find({}).sort({ createdAt: -1 });
    const products = allProducts.filter(
      (product) => product.Status === "published"
    );

    if (products)
      Response(
        res,
        200,
        true,
        "Të gjitha produktet u morën me sukses.",
        products
      );
    else
      Response(res, 404, flse, "Asnjë produkt nuk u gjet në platformë.", null);
  } catch (error) {
    Response(
      res,
      500,
      flse,
      "Gabim i brendshëm i serverit gjatë gjetjes së produkteve.",
      null
    );
  }
};

export const SearchBack = async (payload, res) => {
  try {
    const unfiltered = await Product.find({});
    const term = req.body.term;

    const products = Searcher(unfiltered, term);

    if (products)
      Response(
        res,
        200,
        true,
        "Këto produktet u gjeten me këtë fjalën specifike.",
        products
      );
    else
      Response(
        res,
        404,
        false,
        "Asnjë produkt nuk u gjet në platformë me këtë fjalë specifike.",
        null
      );
  } catch (error) {
    Response(
      res,
      500,
      false,
      "Gabim i brendshëm i serverit gjatë kërkimit të produkteve me këtë term specifik.",
      null
    );
  }
};

export const UpdateBack = async (payload, res) => {
  try {
    const body = req.body;

    const data = {
      Name: body.Name,
      Phone: body.Phone,
      Description: body.Description,
      Gallery: body.Gallery,
      Category: body.Category,
      Views: body.Views,
      UserShow: body.UserShow,
      Status: body.Status,
      Zip: body.Zip,
      Address: body.Address,
      City: body.City,
      Country: body.Country,
    };

    const id = req.query.id;
    const product = await Product.findByIdAndUpdate(
      id,
      { $set: data },
      { new: true }
    );

    if (product)
      Response(
        res,
        200,
        true,
        "Produkti u përditësua me sukses, këto ndryshime do të ndikojnë menjëherë në platformë.",
        product
      );
    else
      Response(
        res,
        404,
        false,
        "Produkti nuk u përditësua për shkak të disa gabimeve.",
        null
      );
  } catch (err) {
    Response(
      res,
      500,
      false,
      "Gabim i brendshëm i serverit gjatë përditësimit të produktit.",
      null
    );
  }
};

export const ViewBack = async ({ slug }, res) => {
  try {
    const product = await Product.findOneAndUpdate(
      { "productData.slug": slug },
      { $inc: { "productAdditionalData.views": 1 } },
      { new: true }
    );

    product.user = await User.findById(product.productData.user).select({
      "userData.name": 1,
      "userData.surname": 1,
      "userData.username": 1,
      "userData.avatar": 1,
    });

    const response = {
      res,
      code: product ? 200 : 404,
      success: product ? true : false,
      data: product ? product : null,
      message: product
        ? Messages.PRODUCT_VIEW_SUCCESS
        : Messages.PRODUCT_VIEW_ERROR,
    };

    Response(response);
  } catch (error) {
    const response = {
      res,
      code: 500,
      success: false,
      data: null,
      message: Messages.PRODUCT_VIEW_ERROR,
    };

    Response(response);
  }
};

export const SimilarBack = async ({ category }, res) => {
  try {
    const products = await Product.find({ "productData.category": category })
      .sort({ createdAt: -1 })
      .limit(4);

    const response = {
      res,
      code: products ? 200 : 404,
      success: products ? true : false,
      data: products ? products : null,
      message: products ? Messages.PRODUCT_VIEW_SUCCESS : Messages.PRODUCT_VIEW_ERROR,
    };

    Response(response);
  } 
  
  catch (error) {
    const response = {
      res,
      code: 500,
      success: false,
      data: null,
      message: Messages.PRODUCT_VIEW_ERROR,
    };

    Response(response);
  }
};

export const CreateFront = async (page, dispatch, images, setIsLoading) => {
  setIsLoading(true);

  let product = structuredClone(page);
  let array = [];
  const url = `${Url}/api/products/ProductCreate`;
  const config = Request("P", "JSON", page, true, false, false);

  if (images.length !== 0) {
    let id = v4();
    for (let i = 0; i < images.length; i++) {
      const storageRef = ref(storage, `/products/${id + images[i]?.file.name}`);
      const uploadTask = uploadBytesResumable(storageRef, images[i]?.file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          let progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          // console.log("Upload is " + progress + "% done");
        },
        (error) => {
          console.log(error);
        },
        async () => {
          await getDownloadURL(uploadTask.snapshot.ref).then(
            async (downloadURL) => {
              array = [...array, downloadURL];
              if (i === images.length - 1) {
                product.Gallery = array;
                const config_with_images = Request(
                  "P",
                  "JSON",
                  product,
                  true,
                  false,
                  false
                );

                try {
                  const req = await fetch(url, config_with_images);
                  const res = await req.json();

                  if (res.success === true) {
                    Notification(dispatch, res.message, "success");
                    dispatch(UnsetPrepage());
                    window.location.href = "/produktet/" + res.data.Slug;
                  } else Notification(dispatch, res.message, "error");
                } catch (error) {
                  Notification(
                    dispatch,
                    "Something wen't wrong while creating this page.",
                    "error"
                  );
                } finally {
                  setIsLoading(false);
                }
              }
            }
          );
        }
      );
    }
  }
  // else {
  //   Notification(dispatch, "Something wen't wrong while creating this page.", 'error');
  // }
};

export const DeleteFront = async (
  dispatch,
  productId,
  userId,
  redirect = null
) => {
  const url = `${Url}/api/products/ProductDelete/${productId}`;
  const config = Request("G", "JSON", {}, false, false, false);

  try {
    const req = await fetch(url, config);
    const res = await req.json();

    if (res.success === true) {
      Notification(dispatch, res.message, "success");
      UserProductList(dispatch, userId);

      if (redirect !== null) window.location.href = redirect;
    } else Notification(dispatch, res.message, "error");
  } catch (error) {
    Notification(dispatch, "", "error");
  }
};

export const FiltersFront = async (Cities, Categories, dispatch) => {
  const url = `${Url}/api/products/ProductsFilters`;
  const config = Request(
    "P",
    "JSON",
    { Cities, Categories },
    true,
    false,
    false
  );

  try {
    const req = await fetch(url, config);
    const res = await req.json();

    if (res.success === true) dispatch(SetFilter(res.data));
    else Notification(dispatch, res.message, "error");
  } catch (error) {
    Notification(dispatch, "", "error");
  }
};

export const ListFront = async (dispatch) => {
  const url = `${Url}/api/products/ProductsList`;
  const config = Request("G", "JSON", {}, false, true, false);

  try {
    const req = await fetch(url, config);
    const res = await req.json();

    if (res.success === true) dispatch(SetPages(res.data));
    else Notification(dispatch, res.message, "error");
  } catch (error) {
    Notification(dispatch, "", "error");
  }
};

export const SearchFront = async (term, dispatch) => {
  const url = `${Url}/api/products/ProductsSearch`;
  const config = Request("P", "JSON", { term }, true, false, false);

  try {
    const req = await fetch(url, config);
    const res = await req.json();

    if (res.success === true) dispatch(SetSearch(res.data));
    else Notification(dispatch, res.message, "error");
  } catch (error) {
    Notification(dispatch, "", "error");
  }
};

export const UpdateFront = async (
  dispatch,
  product,
  images,
  deletedImages,
  setIsLoading
) => {
  setIsLoading(true);

  const url = `${Url}/api/products/ProductUpdate/${product._id}`;
  let page = structuredClone(product);
  let array = [];

  if (deletedImages !== 0) {
    for (let i = 0; i < deletedImages.length; i++) {
      const name = deletedImages[i]
        .split("/products%2F")
        .pop()
        .split("?alt")[0];
      const desertRef = ref(storage, `products/${name}`);
      await deleteObject(desertRef);
    }
  }

  if (images.length !== 0) {
    let id = v4();

    for (let i = 0; i < images.length; i++) {
      if (images[i].data_url) {
        const storageRef = ref(
          storage,
          `/products/${id + images[i]?.file.name}`
        );
        const uploadTask = uploadBytesResumable(storageRef, images[i]?.file);

        uploadTask.on(
          "state_changed",
          (snapshot) => {
            let progress =
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log("Upload is " + progress + "% done");
          },
          (error) => {
            console.log(error);
          },
          async () => {
            await getDownloadURL(uploadTask.snapshot.ref).then(
              async (downloadURL) => {
                array = [...array, downloadURL];

                if (i === images.length - 1) {
                  page.Gallery = array;
                  const config_with_images = Request(
                    "PUT",
                    "JSON",
                    page,
                    true,
                    false,
                    false
                  );

                  try {
                    const req = await fetch(url, config_with_images);
                    const res = await req.json();

                    if (res.success === true) {
                      window.location.reload();
                      Notification(dispatch, res.message, "success");
                    } else Notification(dispatch, res.message, "error");
                  } catch (error) {
                    Notification(dispatch, "", "error");
                  } finally {
                    setIsLoading(false);
                  }
                }
              }
            );
          }
        );
      } else {
        array = [...array, images[i]];
        if (i === images.length - 1) {
          page.Gallery = array;
          const config = Request("PUT", "JSON", page, true, false, false);

          try {
            const req = await fetch(url, config);
            const res = await req.json();

            if (res.success === true) {
              window.location.reload();
              Notification(dispatch, res.message, "success");
            } else Notification(dispatch, res.message, "error");
          } catch (error) {
            Notification(dispatch, "", "error");
          } finally {
            setIsLoading(false);
          }
        }
      }
    }
  } else {
    page.Gallery = [];
    const config = Request("PUT", "JSON", page, true, false, false);

    try {
      const req = await fetch(url, config);
      const res = await req.json();

      if (res.success === true) {
        window.location.reload();
        Notification(dispatch, res.message, "success");
      } else Notification(dispatch, res.message, "error");
    } catch (error) {
      Notification(dispatch, "", "error");
    } finally {
      setIsLoading(false);
    }
  }
};

export const ViewFront = async (slug, setProduct, dispatch) => {
  try {
    const req = await Request("PRODUCTS/VIEW", { slug });
    const res = await req.json();

    if (res.success === true) setProduct(res.data);
    else {
      const alert = {
        dispatch,
        message: res.message,
        type: "error",
      };

      Notification(alert);
    }
  } catch (error) {
    const alert = {
      dispatch,
      message: Messages.PRODUCTS_LATEST_ERROR,
      type: "error",
    };

    Notification(alert);
  }
};

export const SimilarFront = async (category, setProducts, dispatch) => {
  try {
    const req = await Request("PRODUCTS/SIMILAR", { category });
    const res = await req.json();

    if (res.success === true) setProducts(res.data);

    else {
      const alert = {
        dispatch,
        message: res.message,
        type: "error",
      };

      Notification(alert);
    }
  } 
  
  catch (error) {
    const alert = {
      dispatch,
      message: Messages.PRODUCTS_LATEST_ERROR,
      type: "error",
    };

    Notification(alert);
  }
};

export const LatestFront = async (setProducts, dispatch) => {
  try {
    const req = await Request("PRODUCTS/LATEST", {});
    const res = await req.json();

    if (res.success === true) setProducts(res.data);
    else {
      const alert = {
        dispatch,
        message: res.message,
        type: "error",
      };

      Notification(alert);
    }
  } catch (error) {
    const alert = {
      dispatch,
      message: Messages.PRODUCTS_LATEST_ERROR,
      type: "error",
    };

    Notification(alert);
  }
};
