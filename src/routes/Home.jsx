
import { useTranslation } from 'react-i18next'

export default function Home(){
  const { t } = useTranslation()
  const values = Object.values(t('values', { returnObjects: true }))
  const steps = [t('steps.s1'), t('steps.s2'), t('steps.s3'), t('steps.s4'), t('steps.s5'), t('steps.s6')]

  return (
    <div className="space-y-10">
      <section className="container grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold mb-3">{t('brand')}</h1>
          <p className="text-gray-600 mb-6">{t('sub')}</p>
          <a href="#contact" className="inline-flex px-5 py-3 rounded bg-sky-600 text-white hover:bg-sky-700">{t('cta')}</a>
        </div>
        <div className="rounded-2xl overflow-hidden shadow border bg-white">
          <img src="/hero.jpg" alt="ZAZIM - professional moving" className="w-full h-64 object-cover" />
        </div>
      </section>

      <section className="container">
        <div className="grid md:grid-cols-3 gap-6">
          {values.map((v, i) => (
            <div key={i} className="bg-white border rounded-xl p-5 shadow-sm">
              <h3 className="font-semibold">{v}</h3>
            </div>
          ))}
        </div>
      </section>

      <section className="container">
        <h2 className="text-2xl font-semibold mb-4">{t('steps.t')}</h2>
        <ol className="grid md:grid-cols-3 gap-6 list-decimal pl-5">
          {steps.map((s, i) => (<li key={i} className="bg-white border rounded-xl p-4 shadow-sm">{s}</li>))}
        </ol>
      </section>

      <section className="container">
        <div className="bg-amber-50 border border-amber-200 text-amber-900 rounded-xl p-4">
          {t('banner')}
        </div>
      </section>
    </div>
  )
}
