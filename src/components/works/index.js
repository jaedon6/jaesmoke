import { Link } from "react-router-dom";
import { FiCompass } from "react-icons/fi";


export default function WorksWidget(props) {
  return (
    <div className="card-row">
      <div className="card pointer">
        <div className="title absolute small-text">Oshify</div>
        <img src="/images/w01.png" alt="work" />
        <div className="caption">
          <div className="content flex align-items-center justify-content-between">
            <div>
              <p className="small-text smoke-text">2018</p>
              <p>Site Developement</p>
            </div>
            <Link to="#" className="flex align-items-center justify-content-between">
              <FiCompass />
              &nbsp;
              Open
            </Link>
          </div>
        </div>
      </div>
      <div className="card pointer">
        <div className="title absolute small-text">Oshify</div>
        <img src="/images/w01.png" alt="work" />
        <div className="caption">
          <div className="content flex align-items-center justify-content-between">
            <div>
              <p className="small-text smoke-text">2018</p>
              <p>Site Developement</p>
            </div>
            <Link to="#" className="flex align-items-center justify-content-between">
              <FiCompass />
              &nbsp;
              Open
            </Link>
          </div>
        </div>
      </div>
      <div className="card pointer">
        <div className="title absolute small-text">Oshify</div>
        <img src="/images/w01.png" alt="work" />
        <div className="caption">
          <div className="content flex align-items-center justify-content-between">
            <div>
              <p className="small-text smoke-text">2018</p>
              <p>Site Developement</p>
            </div>
            <Link to="#" className="flex align-items-center justify-content-between">
              <FiCompass />
              &nbsp;
              Open
            </Link>
          </div>
        </div>
      </div>
      <div className="card pointer">
        <div className="title absolute small-text">Oshify</div>
        <img src="/images/w01.png" alt="work" />
        <div className="caption">
          <div className="content flex align-items-center justify-content-between">
            <div>
              <p className="small-text smoke-text">2018</p>
              <p>Site Developement</p>
            </div>
            <Link to="#" className="flex align-items-center justify-content-between">
              <FiCompass />
              &nbsp;
              Open
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
