import { Suspense, lazy } from "react";
import { BrowserRouter, Routes as Rs, Route } from "react-router-dom";

import * as urls from "./endpoints";
import * as utils from "../utils";

const Container = lazy(() => import("../app/container"));

const Home = lazy(() => import("../views/home"));
const Contact = lazy(() => import("../views/contact"));


export default function Routes() {
  return (
    <BrowserRouter>
      <Container>
        <Suspense fallback={<div data-role="load"></div>}>
          <Rs>
            <Route
              exact
              path={urls.index}
              element={
                <Home title={`${utils.appname} — Creative Developer`} />
              }
            />
            <Route
              exact
              path={urls.contact}
              element={
                <Contact title={`${utils.appname} — Contact`} />
              }
            />
          </Rs>
        </Suspense>
      </Container>
    </BrowserRouter>
  )
}
