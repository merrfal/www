let Prod = true;
let Url = ''
if (typeof window !== "undefined") Url = window.location.href;
if (Url.includes('merrfal.com')) Prod = false;
export default Prod;
