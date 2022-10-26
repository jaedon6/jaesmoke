import React, { Fragment, lazy } from "react";

import { DataProvider } from "../context";

const Routes = lazy(() => import("../routes"));


export default function App() {
  return (
    <Fragment>
      <DataProvider>
        <Routes />
      </DataProvider>
    </Fragment>
  )
}
