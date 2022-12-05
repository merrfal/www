import Head from 'next/head';

const Products = () => {
  return (
    <Head>
      <meta charset='UTF-8' />
      <title>Produktet - Merr Fal</title>
      <meta name='description' content='Këtu janë të listuara produktet që janë të dhuruara nga përdoruesit e platformës Merr Fal.' />
      <meta name='keywords' content='Produktet, Produktet e Merr Fal, Merr Fal, Merr produkte, Produkte falas' />
      <meta name='author' content='Merr Fal' />
      <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      <meta property='og:title' content='Produktet - Merr Fal' />
      <meta property='og:description' content='Këtu janë të listuara produktet që janë të dhuruara nga përdoruesit e platformës Merr Fal.' />
      <meta property='og:image' content='/assets/thumbnail.png' />
    </Head>
  );
};

export default Products;
