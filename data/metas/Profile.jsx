import Head from 'next/head';

const Profile = (props) => {
  const {name, bio, avatar} = props;

  return (
    <Head>
      <title>{name} - Merr Fal</title>
      <meta name='description' content={bio} />
      <meta name='keywords' content={bio.split(' ')} />
      <meta property='og:title' content={`${name} - Merr Fal`} />
      <meta property='og:description' content={bio} />
      <meta property='og:image' content={avatar} />
    </Head>
  );
};

export default Profile;
