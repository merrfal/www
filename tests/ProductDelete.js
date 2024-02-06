const make = () => {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "",
    },
    body: JSON.stringify({
        "target": "PRODUCTS/DELETE",
        "payload": {
            "slug": "qweqweqweeqw-171100"
        }
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
