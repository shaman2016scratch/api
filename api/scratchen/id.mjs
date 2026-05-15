export default async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  const data = {
    users: {
      SHAMAN2016: 'AAA',
      Scratch_Lobo: 'AAB',
      DiamondCat2026: 'AAC',
      ilya6612288: 'AAD',
      qa3141: 'AAE',
      Paps25: 'AAF',
      EmerDog1234567: 'AAG',
      LonHaochen: 'ABA',
      mrmalettis_1234: 'ABB',
      BON_NAM_WAN_Dam: 'ABC',
      Platon_BG: 'ABD',
      MandosEshkerist: 'ABE',
      TheCloud_: 'ABF'
    },
    keys: {
      AAA: { rep: 400 }
    }
  }
  res.status(200).json(ouut)
}
