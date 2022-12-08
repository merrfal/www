import Head from 'next/head';

const Product = (props) => {
  const {title, description, thumbnail} = props;

  return (
    <Head>
      <title>{title} - Merr Fal</title>
      <meta name='description' content={description} />
      <meta name='keywords' content={description.split(' ')} />
      <meta property='og:title' content={`${title} - Merr Fal`} />
      <meta property='og:description' content={description} />
      <meta property='og:image' content={thumbnail} />
    </Head>
  );
};

export default Product;
