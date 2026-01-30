export default async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  fetch(`https://api.telegram.org/bot${process.env.tbt}/sendMessage?chat_id=6049462351&text=Новый заход в поисковик! (https://shaman2016scratch.github.io/tools/search.html), ua: ${req.headers['user-agent']}, ip: ${req.headers['x-forwarded-for']?.split(',')[0].trim()}`)
  const ouut = {
    "ok": true,
    "result": {
      "ip": req.headers['x-forwarded-for']?.split(',')[0].trim(),
      "ua": req.headers['user-agent']
    },
    "status": 200,
  }
  res.status(200).json(ouut)
}
