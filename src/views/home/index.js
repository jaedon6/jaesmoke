import { lazy } from "react";
import { FiLayers } from "react-icons/fi";

const WorksWidget = lazy(() => import("../../components/works"));
const ServicesWidget = lazy(() => import("../../components/services"));
const BannerWidget = lazy(() => import("../../components/banner"));


export default function Home() {
  return (
    <>
      <div className="header-break"></div>
      <div className="container">
        <section className="jumbo">
          <div className="row reverse-responsive">
            <div className="large-2 medium-12">
              <p className="mb-small">I'm Jay Smoke</p>
            </div>
            <div className="large-8 medium-12 left-text-small">
              <div className="heading">
                A Creative Software Designer and Developer with over 5 years of experience
              </div>
              <br />
              <p className="smoke-text">
                With five(5) years of experience designing and developing software, I have developed a deep and solid understanding of software development principles such as SOLID, YAGNI, KISS, and the use of Architecture to manage and reduce system complexities.
              </p>
            </div>
            <div className="large-2 medium-12 flex justify-content-end">
              <p className="smoke-text">@aboutme</p>
            </div>
          </div>
        </section>
        <section className="jumbo">
          <div className="row reverse-responsive">
            <div className="large-2 medium-12 flex justify-content-between">
              <p className="mb-small">Selected Works</p>
              <p className="mb-small smoke-text hide-on-large">2018 -&nbsp;<span className="white-text">Current</span></p>
            </div>
            <div className="large-8 medium-12">
              <WorksWidget />
            </div>
            <div className="large-2 medium-12 flex justify-content-end">
              <p className="smoke-text">2018 - <span className="white-text">Current</span></p>
            </div>
          </div>
        </section>
        <section className="jumbo">
          <div className="row reverse-responsive">
            <div className="large-2 medium-12 flex justify-content-between">
              <p className="mb-small">Skillset</p>
            </div>
            <div className="large-8 medium-12">
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
        <BannerWidget />
        <section className="jumbo">
          <div className="row reverse-responsive">
            <div className="large-2 medium-12">
              <p className="mb-small">So...</p>
            </div>
            <div className="large-8 medium-12">
              <p>
                Having over five(5) years of experience, I have grown a diverse set of skills not limited to software and design.
              </p>
              <br />
              <p className="smoke-text">
                I am an avid lover of Clean Code and Architecture, proposed by Robert C. Martin, and Test-Driven Development, and I often use them in projects I work on. My skills as a Software Developer are limited to frameworks or libraries; I see them as necessary tools to get the job done. Hence I am a swift learner when I have to use tools I am not familiar with.
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
