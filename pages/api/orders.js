export default async function handler(req, res) {
  if (req.method === 'POST') {
    res.json({ method: 'POST!!' });
  } else {
    res.json({ method: 'GET' });
  }
}
