import { lazy, Fragment } from "react";
import { RiUserSmileFill } from "react-icons/ri";

const WorksWidget = lazy(() => import("../../components/works"));
const Fade = lazy(() => import("react-reveal/Fade"));
const ServicesWidget = lazy(() => import("../../components/services"));
const BannerWidget = lazy(() => import("../../components/banner"));


export default function Home() {
  return (
    <Fragment>
      <div className="header-break"></div>
      <div className="container">
        <section className="jumbo x">
          <div className="row reverse-responsive">
            <div className="large-2 medium-12">
            </div>
            <div className="large-8 medium-12 left-text-small">
              <div className="heading center-text">
                <Fade top cascade>
                  J.SMOKE
                </Fade>
              </div>
              <br />
              <p className="smoke-text center-text">
                Multidisciplinary Software Engineer ⚡️
              </p>
            </div>
            <div className="large-2 medium-12 flex justify-content-end">
            </div>
          </div>
        </section>
        <section className="jumbo border-top">
          <div className="row reverse-responsive">
            <div className="large-2 medium-12 flex justify-content-between">
              <p className="mb-small">
                Selected Works
              </p>
              <p className="mb-small smoke-text hide-on-large">
                2018 - &nbsp;<span className="white-text">Current</span>
              </p>
            </div>
            <div className="large-8 medium-12">
              <WorksWidget />
            </div>
            <div className="large-2 medium-12 flex justify-content-end">
              <p className="mb-small smoke-text">
                From 2018 - Current
              </p>
            </div>
          </div>
        </section>
        <section className="jumbo border-top">
          <div className="row reverse-responsive">
            <div className="large-2 medium-12 flex justify-content-between">
              <p className="mb-small">
                Skillset
              </p>
            </div>
            <div className="large-8 medium-12">
              <ServicesWidget />
            </div>
            <div className="large-2 medium-12 flex justify-content-end">
              <p className="mb-small">
                Knowledge
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
                Having over five(5) years of experience designing and developing software, I have developed a deep and solid understanding of software development principles such as SOLID, YAGNI, KISS, and the use of Architecture to manage and reduce system complexities.
              </p>
              <br />
              <p className="smoke-text">
                I am an avid lover of Clean Code and Architecture, proposed by Robert C. Martin, and Test-Driven Development, and I often use them in projects I work on. My skills as a Software Developer are not limited to frameworks or libraries; I see them as necessary tools to get the job done. Hence I am a swift learner when I have to use tools I am not familiar with.
              </p>
              <br />
              <p className="border-top smoke-text">
                As a Software Developer with an eye for design and user experience, I craft quality software from front to back - every aspect considered. I strive to build products and connections driven by empathy, people, and technology.
              </p>
            </div>
            <div className="large-2 medium-12 flex justify-content-end">
              <p className="smoke-text flex justify-content-between">
                <RiUserSmileFill className="svg" />
                <span className="white-text">
                  jsmoke
                </span>
              </p>
            </div>
          </div>
        </section>
      </div>
    </Fragment>
  )
}
