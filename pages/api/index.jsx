export default async function handler(req, res) {
  const response = {
    Name: 'Landing Page Hunt',
    Url: 'landingpagehunt.com/api',
    Version: 1.0,
    Status: true,
    Public: false,
  };

  res.status(200).json(response);
}
