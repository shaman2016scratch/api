import { Buffer } from 'buffer';
import cryptoRandomString from 'crypto-random-string';
import { md5 } from 'js-md5';

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

  const { scratchUsername, name } = req.body
  let comments = await fetch('https://api.scratch.mit.edu/users/shaman2016scratch/projects/1297964685/comments?limit=20')
  comments = await comments.json()
  const isVerified = comments.some(
    (c) =>
      c.author.username.toLowerCase() === scratchUsername.toLowerCase() &&
      c.content.includes(decoded.code)
  );
  if (!isVerified) {
    res.status(400).json({
      'ok': false,
      'error': 'not confirmed'
    })
  } else {
    const token = cryptoRandomString({ length: 75 })
    const tokenHash = md5(token)
    res.setHeader('Set-Cookie', `session=${tokenHash}; Path=/; HttpOnly; secure; sameSite=none; maxAge=5260224000`);
  }
}
