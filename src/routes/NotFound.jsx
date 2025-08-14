
import { Link } from 'react-router-dom'
export default function NotFound(){
  return (
    <div className="text-center py-20">
      <h1 className="text-5xl font-bold mb-3">404</h1>
      <p className="mb-6 opacity-80">Page not found.</p>
      <Link to="/" className="text-sky-600 hover:underline">Go home</Link>
    </div>
  )
}
