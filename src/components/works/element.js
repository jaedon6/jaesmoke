import { FiMaximize2 } from "react-icons/fi";

export default function Work(work) {
  return (
    <div className="card pointer" key={work.id}>
      <img src={work.data().image} alt={work.data().name} />
      <div className="caption">
        <div className="content flex align-items-center justify-content-between">
          <div>
            <p className="small-text smoke-text">
              {work.data().year.toString()}
              {work.data().collaborated && "(DUO)"} - {work.data().name}
            </p>
            <p>
              {work.data().category}
            </p>
          </div>
          <a
            href={work.data().url}
            target="_blank"
            rel="noreferrer"
            className="flex align-items-center justify-content-between">
            <FiMaximize2 />
          </a>
        </div>
      </div>
    </div>
  )
}
