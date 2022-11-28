import Head from 'next/head';

const Error = () => {
  return (
    <Head>
      <meta charset='UTF-8' />  {/* qit reshte se prek kurre */}
      <title>Faqja nuk u gjend - Merr Fal</title> {/* qito e editon ama - Merr Fal (se prek kurre) */}
      <meta name='description' content='Faqja qe ju po kerkoni nuk u gjend.' /> {/* qikjo osht description i qasaj pagit */}
      <meta name='keywords' content='Error 404, Nuk u gjend' /> {/* qitu do tags, psh nese osht products, e qet products, produket, gjej gjera */}
      <meta name='author' content='Merr Fal' /> {/* qito se prek kurre */}
      <meta name='viewport' content='width=device-width, initial-scale=1.0' /> {/* qito se prek kurre */}
      <meta property='og:title' content='Faqja nuk u gjend - Merr Fal' /> {/* qikjo osht i njet me <title> */}
      <meta property='og:description' content='Faqja qe ju po kerkoni nuk u gjend.' /> {/* qikjo osht i njet me description te reshti 9 */}
      <meta property='og:image' content='/assets/thumbnail.png' /> {/* qito se prek kurre */}
    </Head>
  );
};

export default Error;
