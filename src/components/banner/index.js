import { Link } from "react-router-dom";
import { FiMaximize2 } from "react-icons/fi";

import { contact } from "../../routes/endpoints";


export default function BannerWidget() {
  return (
    <>
      <section className="banner flex align-items-center">
        <div className="banner-content">
          <div className="row">
            <div className="large-8 medium-12">
              <div className="banner-text shine">
                Meet your next
              </div>
              <div className="banner-text">
                Creative Developer
              </div>
              <br />
              <p className="mb-small smoke-text">
                As a Software Developer with an eye for design and user experience, I craft quality software front to back - every aspect considered. I strive to build products and connections driven by empathy, people, and technology.
              </p>
            </div>
            <div className="large-4 medium-12 relative banner-link">
              <img src="/images/straw.png" alt="hands" />
              <Link to={contact} onClick={() => window.scrollTo(0,0)} data-role="action">
                <FiMaximize2 />
              </Link>
            </div>
          </div>
        </div>
      </section>
      <div>
        <div className="banner-card-stack"></div>
        <div className="banner-card-stack"></div>
      </div>
    </>
  )
}
