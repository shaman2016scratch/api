import fetch from 'node-fetch';

export default async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  const ouut = {
    "ok": true,
    "result": {
      "token": "",
      "chats": [],
      "chatInfo": {},
      "openChat": {},
      "messList": [],
      "mess": [],
      "ilb": 0,
      "upd": 0,
      "bs": {}
    },
    "status": 200,
    "description": "The save key for tbc can be used to open in the client and not in the api."
  }
  res.status(200).json(ouut)
}
