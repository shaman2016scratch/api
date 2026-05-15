import data from '../data.js'

export default async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  const { users } = data
  res.status(200).json({
    ok: true,
    result: {
      users
    }
  })
}
