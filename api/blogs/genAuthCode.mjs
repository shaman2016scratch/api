import fetch from 'node-fetch';
const cryptoRandomString = require('crypto-random-string');

export default async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Access-Control-Allow-Credentials', 'true');

  const code = cryptoRandomString({length: 25})
  res.setHeader('Set-Cookie', `authCode=${code}; Path=/; HttpOnly; secure; sameSite=none; maxAge=300000`);

  const ouut = {
    "ok": true,
    "result": code
  }
  res.status(200).json(ouut)
}
