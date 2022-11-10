import { lazy } from "react";
import { FiMaximize2 } from "react-icons/fi";

const Fade = lazy(() => import("react-reveal/Fade"));


export default function Work({ work }) {
  return (
    <Fade bottom cascade>
      <div className="card pointer">
        <div className="caption">
          <div className="content flex align-items-center justify-content-between">
            <div>
              <p>
                {work.name} - {work.category}
              </p>
            </div>
            <a
              href={work.url}
              target="_blank"
              rel="noreferrer"
              data-role="action"
              className="flex align-items-center justify-content-between">
              <FiMaximize2 />
            </a>
          </div>
        </div>
        <img src={work.image} alt={work.name} />
      </div>
    </Fade>
  )
}
