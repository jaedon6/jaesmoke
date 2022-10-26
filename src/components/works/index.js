import { FiMaximize2 } from "react-icons/fi";

import { useData } from "../../context";

export default function WorksWidget(props) {
  const { works, isPending } = useData();

  return (
    !isPending && works.length >= 1 &&
    <div className="card-row">
    { works.map(
      work =>
      <div className="card pointer" key={work.id}>
        <img src={work.data().image} alt={work.data().name} />
        <div className="caption">
          <div className="content flex align-items-center justify-content-between">
            <div>
              <p className="small-text smoke-text">
                {work.data().year.toString()} {
                  work.data().collaborated ? "(DUO)" : null
                } - {work.data().name}
              </p>
              <p>{work.data().category}</p>
            </div>
            <a href={work.data().url} target="_blank" rel="noreferrer" className="flex align-items-center justify-content-between">
              <FiMaximize2 />
            </a>
          </div>
        </div>
      </div>
    ) }
    </div>
  )
}
