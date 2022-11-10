import { Link } from "react-router-dom";


export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="large-6 medium-12">
            <p className="mb-small">Thanks for visiting 🤝</p>
          </div>
          <div className="large-6 medium-12 flex justify-content-between">
            <Link to="#" onClick={() => window.scrollTo(0,0)}>Scroll to top</Link>
            <p className="smoke-text s">&copy; Smoke Studios</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
