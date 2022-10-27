import { lazy } from "react";

import { useData } from "../../context";

const Work = lazy(() => import("./element"));


export default function WorksWidget(props) {
  const { works } = useData();

  return (
    works.length >= 1 ?
    (
      <div className="card-row">
        { works.map(work => <Work work={work} />) }
      </div>
    ) : (
      <div className="flex align-items-center justify-content-center" data-role="box">
        <div data-role="load-min"></div>
      </div>
    )
  )
}
