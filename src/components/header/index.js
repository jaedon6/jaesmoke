import { lazy, Fragment } from "react";
import { NavLink } from "react-router-dom";

import * as urls from "../../routes/endpoints";

const ToggleTheme = lazy(() => import("../toggle/theme"));


export default function Header() {
  return (
    <header className="flex absolute justify-content-center align-items-end w-100">
      <nav className="flex justify-content-between align-items-center">
        <Fragment>
          <ul className="no-list-marker flex">
            <li><NavLink to={urls.index} end>Portfolio</NavLink></li>
            <li><NavLink to={urls.contact}>Contact</NavLink></li>
          </ul>
          <ToggleTheme />
        </Fragment>
      </nav>
    </header>
  )
}
