import fetch from 'node-fetch';

export default async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  const ouut = {
    "ok": true,
    "result": {
      "user-agent": req.headers['user-agent'],
      "ip": req.headers['x-forwarded-for']?.split(',')[0].trim()
    }
  }
  res.status(200).json(ouut)
}
