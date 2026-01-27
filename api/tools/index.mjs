import fetch from 'node-fetch';

export default async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  const ouut = {
    "ok": true,
    "result": {
      "pagesCount": 3,
      "pages": [
        "tbc.html",
        "mini-brow.html",
        "search.html"
      ],
      "code": "https://github.com/shaman2016scratch/shaman2016scratch.github.io/tree/main/tools",
      "version": {
        "api": {
          "main": "1.1.0"
        },
        "pages": {
          "tbc": "2.1.0",
          "mini-brow": "alpha",
          "search": "alpha"
        }
      }
    }
  }
  res.status(200).json(ouut)
}
