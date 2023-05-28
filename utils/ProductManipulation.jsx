export const onUpload = (product, setProduct, imageList) => setProduct({
    productData: {
        ...product.productData,
        gallery: imageList,
    },
});

export const onInput = (product, setProduct, validation, setValidation, key, e, event = true) => {
    setProduct({
        productData: {
            ...product.productData,
            [key]: event ? e.target.value : e,
        },
    }); 

    setValidation({
        ...validation,
        [key]: true,
    });
};