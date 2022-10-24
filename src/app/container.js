import React, { lazy } from "react";

const Header = lazy(() => import("../components/header"));

export default function Container({ children }) {
  return (
    <>
      <Header />
      { children }
    </>
  )
}
