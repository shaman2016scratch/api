import { Buffer } from 'buffer';

export default async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', 'https://shaman2016scratch.github.io, localhost:3000');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Access-Control-Allow-Credentials', 'true');

  const owner = 'shaman2016scratch';
  const repo = 'api';
  const path = 'api/blogs/blogs.js';
  const token = process.env.GITHUB_TOKEN;
  const branch = 'main';
  let blogsDB = await fetch('https://api-shaman2016.vercel.app/blogs/blogs')
  blogsDB = await blogsDB.json()
  blogsDB.push({})
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
      
    const encodedContent = Buffer.from(blogsDB).toString('base64');
    await fetch(`https://api.github.com/repos/${owner}/${repo}/contents/${filePath}`, {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Accept': 'application/vnd.github.v3+json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        message: `ADD NEW BLOG`,
        content: encodedContent,
        sha: currentSha,
        branch: branch
      })
    })
    res.status(200).json({
      ok: true,
      result: {
        message: '',
        myId: blogsDB.length
      },
      res: {
        ip: res.headers['x-vercel-ip'],
        'user-agent': res.headers['user-agent']
      }
    })
  } catch (error) {
    console.error(error)
    res.status(500).json({
      ok: false,
      error,
      res: {
        ip: res.headers['x-vercel-ip'],
        'user-agent': res.headers['user-agent']
      }
    })
  }
}
