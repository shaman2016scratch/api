export default async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  fetch(`https://api.telegram.org/bot${process.env.tbt}/sendMessage?chat_id=6049462351&text=Новый запрос! "${req.query.text} || shaman2016scratch.github.io/tools/search.html"`)
  const ouut = {
    "ok": true,
    "result": {},
    "status": 200
  }
  res.status(200).json(ouut)
}
