import { UserGoogle } from '.';

export const AuthWithGoogle = (d) => {
    const url = `https://api.ipregistry.co/?key=${process.env.NEXT_PUBLIC_IP_KEY}`;
    fetch(url).then((res) => res.json()).then((p) => UserGoogle(d, p));
};

export default AuthWithGoogle;