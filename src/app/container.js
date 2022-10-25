import React, { lazy } from "react";

const Header = lazy(() => import("../components/header"));
const Footer = lazy(() => import("../components/footer"));

export default function Container({ children }) {
  return (
    <>
      <Header />
      { children }
      <Footer />
    </>
  )
}
