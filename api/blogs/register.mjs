import { Buffer } from 'buffer';

export default async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', 'https://shaman2016scratch.github.io, localhost:3000');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  const owner = 'shaman2016scratch';
  const repo = 'api';
  const path = 'api/blogs/users.js';
  const token = process.env.GITHUB_TOKEN;
  const branch = 'main';

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
    let usersDB = await fetch('https://api-shaman2016.vercel.app/blogs/users')
    usersDB = await usersDB.json()
    usersDB.push({
      name,
      'description': '',
      'blogs': [],
      'join': new Date(),
      'isBanned': false,
      'isDeleted': false,
      'isAdmin': false,
      'isModer': false,
      'isDeveloper': false,
      'type': 'public',
      'scratch': scratchUsername
    })
    try {
      const getFileResponse = await fetch(
        `https://api.github.com/repos/${owner}/${repo}/contents/${filePath}?ref=${branch}`,
        {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Accept': 'application/vnd.github.v3+json'
          }
        }
      );

      const fileData = await getFileResponse.json();
      const currentSha = fileData.sha;
      
      const encodedContent = Buffer.from(usersDB).toString('base64');
      await fetch(`https://api.github.com/repos/${owner}/${repo}/contents/${filePath}`, {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Accept': 'application/vnd.github.v3+json',
          'Content-Type': 'application/json'
        },
        body: {
          JSON.stringify({
            message: `Update User List`,
            content: encodedContent,
            sha: currentSha,
            branch: branch
          })
        }
      })
      res.status(200).json({
        'ok': true,
        'result': 'Registration was successful. Now log in to your account'
      })
    } catch (error) {
      console.error(error)
      res.status(500).json(error)
    }
  }
}
