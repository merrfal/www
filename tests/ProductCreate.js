const make = () => {
  const product_structure = {
    productData: {
      name: "qweqweqwe",
      description: "qweqweqwe",
      gallery: [],
      slug: "qweqweqweqwe",
      category: "qewqweqweqweqwe",
      user: "wqeqweqweqweqwe",
      city: "qweqweqweqwe",
      country: "qweqweqwe",
      address: "qweqweqweqwe",
      phoneCode: "qweqweqweqwe",
      phone: "qweqweqweqwe",
      postedAnonymously: true,
      isGiven: false,
    },
  };

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "",
    },
    body: JSON.stringify({
      target: "PRODUCTS/CREATE",
      payload: product_structure,
    }),
  };

  fetch("http://localhost:1234/api", options)
    .then((response) => {
      return response.json();
    })

    .then((data) => {
      console.log(data);
    })

    .catch((error) => {
      console.error("There was a problem with the fetch operation:", error);
    })
}
