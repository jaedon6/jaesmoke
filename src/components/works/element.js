import { FiMaximize2 } from "react-icons/fi";

export default function Work({ work }) {
  return (
    <div className="card pointer">
      <img src={work.image} alt={work.name} />
      <div className="caption">
        <div className="content flex align-items-center justify-content-between">
          <div>
            <p className="small-text smoke-text">
              {work.year.toString()}
              {work.collaborated && "(DUO)"} - {work.name}
            </p>
            <p>
              {work.category}
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
    </div>
  )
}
