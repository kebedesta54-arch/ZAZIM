
import { Helmet, HelmetProvider } from 'react-helmet-async'
export default function Seo({ title, description }){
  return (
    <HelmetProvider>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Helmet>
    </HelmetProvider>
  )
}
