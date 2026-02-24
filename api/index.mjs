import fetch from 'node-fetch';

export default async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  const ouut = {
    "ok": true,
    "result": {
      "description": "SHAMAN2016 API. Api from SHAMAN2016 on Node.js uploaded to Vercel",
      "licence": "MIT License",
      "yourIp": req.headers["real-ip"]
    }
  }
  res.status(200).json(ouut)
}
