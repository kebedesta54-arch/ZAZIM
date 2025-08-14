
import { useState } from 'react'
import { z } from 'zod'
import api from '../utils/api'

const schema = z.object({
  name: z.string().min(2, 'שם קצר מדי / Name too short'),
  email: z.string().email('דוא"ל לא תקין / Invalid email'),
  message: z.string().min(5, 'נא לכתוב הודעה / Please write a message')
})

export default function ContactForm(){
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState(null)

  async function onSubmit(e){
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const data = Object.fromEntries(form.entries())
    const parsed = schema.safeParse(data)
    if(!parsed.success){
      setStatus({ ok:false, msg: parsed.error.errors[0].message })
      return
    }
    try{
      setLoading(true)
      const res = await api.post('/api/contact', parsed.data)
      setStatus({ ok: res.data.ok, msg: res.data.message || 'Sent!' })
      e.currentTarget.reset()
    }catch(err){
      setStatus({ ok:false, msg: err.response?.data?.message || 'Error sending' })
    }finally{
      setLoading(false)
    }
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-3 max-w-xl bg-white border rounded-lg p-4">
      <label className="grid gap-1">
        <span>שם / Name</span>
        <input name="name" className="form-input" required />
      </label>
      <label className="grid gap-1">
        <span>דוא"ל / Email</span>
        <input name="email" type="email" className="form-input" required />
      </label>
      <label className="grid gap-1">
        <span>הודעה / Message</span>
        <textarea name="message" rows="4" className="form-textarea" required></textarea>
      </label>
      <button disabled={loading} className="inline-flex items-center justify-center px-4 py-2 rounded bg-sky-600 text-white hover:bg-sky-700 disabled:opacity-50">
        {loading ? 'שולח/ת…' : 'שליחה'}
      </button>
      {status && (<p className={status.ok ? 'text-green-600' : 'text-red-600'}>{status.msg}</p>)}
    </form>
  )
}
