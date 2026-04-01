import { Buffer } from 'buffer';
import cryptoRandomString from 'crypto-random-string';

export default async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', 'https://shaman2016scratch.github.io, localhost:3000');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Access-Control-Allow-Credentials', 'true');

  const { cookie } = req.headers

  if (!cookie) {
    res.status(400).json({
      ok: false,
      error: 'Bad Request: Auth Code not found'
    });
  }
  
  const cookies = cookie
    .split(';')
    .map(pair => pair.trim().split('='))
    .reduce((obj, [key, value]) => {
      if (key) obj[key] = decodeURIComponent(value);
      return obj;
    }, {});
}
