import fetch from 'node-fetch';

export default async (req, res) => {
  const ouut = {
    "ok": true,
    "result": {}
  }
  res.status(200).json(ouut)
}
