import React, { lazy } from "react";
import { FiLayers } from "react-icons/fi";

const WorksWidget = lazy(() => import("../../components/works"));
const ServicesWidget = lazy(() => import("../../components/services"));

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
              <br />
              <p className="smoke-text">
                Accumulating over five(5) years of experience designing and developing software, I have developed a deep and strong understanding of software development principles such as SOLID, YAGNI, KISS, and the use of Architecture to manage and reduce system complexities.
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
        <section className="jumbo">
          <div className="row">
            <div className="large-2">
              <p>Skillset</p>
            </div>
            <div className="large-8">
              <ServicesWidget />
            </div>
            <div className="large-2 medium-12 flex justify-content-end">
              <p className="smoke-text flex justify-content-between">
                <FiLayers className="svg" />
                <span className="white-text">TechStack</span>
              </p>
            </div>
          </div>
        </section>
        <section className="banner">
        </section>
        <section className="jumbo">
          <div className="row">
            <div className="large-2">
              <p>So...</p>
            </div>
            <div className="large-8">
              <p>
                Having over five(5) years of experience, I have been able to grow diverse set of skills not limited to software and design.
              </p>
              <br />
              <p className="smoke-text">
                I am an avid lover of Clean Code and Architecture proposed by Robert C. Martin and Test-Driven Development and often use them in projects I work on. My skills as a Software Developer are not tied to frameworks or libraries but rather I see them as necessary tools to get the job done hence I am a ridiculously fast learner when I have to use tools I am not familiar with.
              </p>
            </div>
            <div className="large-2 medium-12 flex justify-content-end">
              <p className="smoke-text">
                @jaysmoke
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
