import { Fragment, Suspense, lazy } from "react";

import { DataProvider } from "../context";

const Routes = lazy(() => import("../routes"));


export default function App() {
  return (
    <Fragment>
      <DataProvider>
        <Suspense fallback={<div data-role="load"></div>}>
          <Routes />
        </Suspense>
      </DataProvider>
    </Fragment>
  )
}
