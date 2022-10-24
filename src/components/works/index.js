import { Link } from "react-router-dom";


export default function WorksWidget(props) {
  return (
    <div className="card-row">
      <div className="card">
        <div className="title absolute small-text">Oshify</div>
        <img src="/images/w01.png" alt="work" />
        <div className="caption">
          <div className="content flex align-items-center justify-content-between">
            <div>
              <p className="small-text smoke-text">2018</p>
              <p>Site Developement</p>
            </div>
            <Link to="#" className="flex align-items-center justify-content-between">Open</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
