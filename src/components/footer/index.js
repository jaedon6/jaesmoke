import { Link } from "react-router-dom";


export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="large-8">
            <p>Thanks for reading 🤝</p>
          </div>

          <div className="large-4 flex align-tems-center justify-content-between">
            <Link to="#" onClick={() => window.scrollTo(0,0)}>Scroll to top</Link>
            <p className="smoke-text">&copy; 2022. JSmoke Studios</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
