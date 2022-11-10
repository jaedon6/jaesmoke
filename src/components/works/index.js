import { lazy } from "react";
import { FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";

import { useData } from "../../context";
import * as urls from "../../routes/endpoints";

const Work = lazy(() => import("./element"));

const Fade = lazy(() => import("react-reveal/Fade"));


export default function WorksWidget(props) {
  const { works } = useData();

  return (
    works.length >= 1 ?
    (
      <div className="card-row">
        { works.map(work => <Work key={work.id} work={work.data()} />) }
        <Fade bottom cascade>
          <div className="work-box">
            Let's Build the next BIG DEAL
            <Link
              to={urls.contact}
              data-role="action"
              onClick={() => window.scrollTo(0,0)}
              className="flex align-items-center justify-content-between">
              <FiArrowRight />
            </Link>
          </div>
        </Fade>
      </div>
    ) : (
      <div className="flex align-items-center justify-content-center" data-role="box">
        <div data-role="load-min"></div>
      </div>
    )
  )
}
