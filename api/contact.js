
export default async function handler(req, res){
  if (req.method !== 'POST') return res.status(405).json({ ok:false, message: 'Method not allowed' })
  const { name, email, message } = req.body || {}
  if(!name || !email || !message) return res.status(400).json({ ok:false, message: 'Missing fields' })
  console.log('Contact form submission:', { name, email, message })
  return res.status(200).json({ ok:true, message: 'Message received. Thank you!' })
}
