import { Notification } from "./Response"
import { Translation } from "./Translations"

export const onUpload = async (product, setProduct, imageList, setLoading, dispatch) => {
    setLoading(true)
    const formattedList = []

    const splitIfMoreThanFour = imageList.length > 4 ? imageList.slice(0, 4) : imageList

    try {
        for (const image of splitIfMoreThanFour) {
            await new Promise((resolve, reject) => {
                const img = new Image();

                img.src = image.data_url
                img.onload = () => {
                    if (image.file.size > (50 * 1024 * 1024)) { 
                        const alert = {
                            type: 'error',
                            message: Translation('we-removed-photos-with-size-more-than-50mb'),
                            dispatch,
                        }
                    
                        Notification(alert)
                        resolve()
                    }

                    else {
                        const canvas = document.createElement('canvas')

                        canvas.width = img.width
                        canvas.height = img.height

                        const ctx = canvas.getContext('2d')

                        ctx.drawImage(img, 0, 0)
                                        
                        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height)
                        const pixels = imageData.data

                        let isTransparent = false
                                            
                        for (let i = 0; i < pixels.length; i += 4) {
                            if (pixels[i + 3] === 0) {
                                isTransparent = true
                                break
                            }
                        }

                        if (isTransparent) {
                            const alert = {
                                type: 'error',
                                message: Translation('we-removed-photos-with-transparency'),
                                dispatch,
                            }
                        
                            Notification(alert)
                            resolve()
                        }

                        else {
                            canvas.toBlob((blob) => {
                                const newFile = new File([blob], image.file.name, { type: blob.type });

                                formattedList.push({
                                    file: newFile,
                                    data_url: image.data_url
                                })

                                resolve()
                            })
                        }
                    }
                }
            })
        }

        setProduct({
            productData: {
                ...product.productData,
                gallery: formattedList
            }
        })
    }

    finally {
        setLoading(false)
    }
}

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