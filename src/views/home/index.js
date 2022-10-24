import React, { lazy } from "react";

const WorksWidget = lazy(() => import("../../components/works"));


export default function Home() {
  return (
    <>
      <div className="header-break"></div>
      <div className="container">
        <section className="jumbo">
          <div className="row">
            <div className="large-2 medium-12">
              <p>I'm Jay Smoke</p>
            </div>
            <div className="large-8 medium-12 left-text-small">
              <div className="heading">
                A Multidisciplinary Software Designer and Developer with over 5 years of experience
              </div>
              <p className="smoke-text">
                With over five(5) years of experience designing and developing software, I have developed a deep and strong understanding of software development principles such as SOLID, YAGNI, KISS, and the use of Architecture to manage and reduce system complexities.
              </p>
            </div>
            <div className="large-2 medium-12 flex justify-content-end">
              <p className="smoke-text">@aboutme</p>
            </div>
          </div>
        </section>
        <section className="jumbo">
          <div className="row">
            <div className="large-2">
              <p>Selected Works</p>
            </div>
            <div className="large-8">
              <WorksWidget />
            </div>
            <div className="large-2 medium-12 flex justify-content-end">
              <p className="smoke-text">2018 - <span className="white-text">Current</span></p>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
