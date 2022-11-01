export default async function handler(req, res) {
  const response = {
    Emri: 'Merr Fal Api',
    Verzioni: 1.0,
    Statusi: true,
    PerPublikun: false,
  };

  res.status(200).json(response);
}
