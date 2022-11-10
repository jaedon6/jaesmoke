import { Link } from "react-router-dom";
import { FiMaximize2 } from "react-icons/fi";

import { contact } from "../../routes/endpoints";


export default function BannerWidget() {
  return (
    <div className="container">
      <section className="banner border-top flex align-items-center">
        <div className="banner-content">
          <div className="row">
            <div className="large-7 medium-12">
              <div className="heading shine">
                Your .Next
              </div>
              <div className="heading">
                Innovative Developer
              </div>
            </div>
            <div className="large-5 medium-12 relative banner-link">
              <img src="/images/straw.png" alt="hands" />
              <Link to={contact} onClick={() => window.scrollTo(0,0)} data-role="action">
                <FiMaximize2 />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
