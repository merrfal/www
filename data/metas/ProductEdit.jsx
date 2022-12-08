import Head from "next/head";

const ProductEdit = (props) => {
  const { title } = props;

  return (
    <Head>
      <title>Redaktimi i "{title}" - Merr Fal</title>
      <meta name="robots" content="noindex" />
    </Head>
  );
};

export default ProductEdit;