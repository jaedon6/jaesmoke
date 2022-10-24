import React, { Fragment, lazy, useEffect, useState } from "react";

const Routes = lazy(() => import("../routes"));


export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getTheme() {
      const theme = await localStorage.getItem("theme");
      const body = document.querySelector("body");

      switch (theme) {
        case "dark":
          body.removeAttribute("class");
          setLoading(false);
          break;
        case "light":
          body.classList.add("light");
          setLoading(false);
          break;
        default:
          await localStorage.setItem("theme", "dark");
          setLoading(false);
      }
    }

    getTheme();
  }, [loading])

  return (
    !loading &&
      <Fragment>
        <Routes />
      </Fragment>
  )
}
