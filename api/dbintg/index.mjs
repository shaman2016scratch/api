export default async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS, POST, PUT');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  const { path } = req.body
  if (path === "/") {
    const ouut = {
      "ok": true,
      "result": {
        "version": "1.0.0"
      }
    }
    res.status(200).json(ouut)
  } else if (path === "/get") {} else if (path === "/set") {} else if (path === "/add") {} else {
    res.status(404).json({
      "ok": false,
      "error": "Page not found"
    })
  }
}
