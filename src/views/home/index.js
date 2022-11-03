import { lazy, Fragment } from "react";
import { IoWalletOutline } from "react-icons/io5";
import { RiUserSmileFill } from "react-icons/ri";

const WorksWidget = lazy(() => import("../../components/works"));
const ServicesWidget = lazy(() => import("../../components/services"));
const BannerWidget = lazy(() => import("../../components/banner"));


export default function Home() {
  return (
    <Fragment>
      <div className="header-break"></div>
      <div className="container">
        <section className="jumbo">
          <div className="row reverse-responsive">
            <div className="large-2 medium-12">
              <p className="mb-small">I'm Jay Smoke</p>
            </div>
            <div className="large-8 medium-12 left-text-small">
              <div className="heading">
                Creative Software Designer and Developer with over 5 years of experience
              </div>
              <br />
              <p className="smoke-text">
                With five(5) years of experience in designing and developing software, I have developed a deep and solid understanding of software development principles such as SOLID, YAGNI, KISS, and the use of Architecture to manage and reduce system complexities.
              </p>
            </div>
            <div className="large-2 medium-12 flex justify-content-end">
              <p className="smoke-text">
                <div className="chip mr-0">BIO</div>
              </p>
            </div>
          </div>
        </section>
        <section className="jumbo">
          <div className="row reverse-responsive">
            <div className="large-2 medium-12 flex justify-content-between">
              <p className="mb-small">Selected Works</p>
              <p className="mb-small smoke-text hide-on-large"><span className="chip">2018</span> -&nbsp;<span className="white-text">Current</span></p>
            </div>
            <div className="large-8 medium-12">
              <WorksWidget />
            </div>
            <div className="large-2 medium-12 flex justify-content-end">
              <p className="smoke-text"><span className="chip mr-0">2018</span>
              &nbsp; - &nbsp;<span className="white-text">Current</span></p>
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
              <p>
                <span className="chip">techstack</span>
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
                I am an avid lover of Clean Code and Architecture, proposed by Robert C. Martin, and Test-Driven Development, and I often use them in projects I work on. My skills as a Software Developer are not limited to frameworks or libraries; I see them as necessary tools to get the job done. Hence I am a swift learner when I have to use tools I am not familiar with.
              </p>
            </div>
            <div className="large-2 medium-12 flex justify-content-end">
              <p className="smoke-text flex justify-content-between">
                <RiUserSmileFill className="svg" />
                <span className="white-text">jsmoke</span>
              </p>
            </div>
          </div>
        </section>
      </div>
    </Fragment>
  )
}
