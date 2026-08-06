import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <section className="page-card">
      <p className="eyebrow">404</p>
      <h1>Page not found</h1>
      <p className="page-description">
        The page you’re looking for doesn’t exist or may have moved.
      </p>
      <div className="actions">
        <Link className="primary-btn" to="/">
          Return home
        </Link>
      </div>
    </section>
  )
}

export default NotFound
