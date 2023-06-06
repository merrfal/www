export const onUpload = (product, setProduct, imageList) => setProduct({
    productData: {
        ...product.productData,
        gallery: imageList,
    },
});

export const onInput = (product, setProduct, validation, setValidation, key, e, event = true) => {
    if(key === "country"){
        setProduct({
            productData: {
                ...product.productData,
                [key]: event ? e.target.value : e,
                city: ""
            },
        }); 

        setValidation({
            ...validation,
            [key]: true,
            city: false
        });
    }

    else {
        setProduct({
            productData: {
                ...product.productData,
                [key]: event ? e.target.value : e
            },
        }); 
    
        setValidation({
            ...validation,
            [key]: true
        });
    }
};