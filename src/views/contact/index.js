import { lazy } from "react";
import { FiArrowRight } from "react-icons/fi";

const Fade = lazy(() => import("react-reveal/Fade"));


export default function Contact(props) {
  return (
    <>
      <div className="header-break"></div>
      <div className="container">
        <section className="jumbo x">
          <div className="row reverse-responsive">
            <div className="large-2 medium-12">
            </div>
            <div className="large-8 medium-12 left-text-small">
              <div className="heading center-text">
                <Fade top cascade>
                  HOT LINES
                </Fade>
              </div>
              <br />
              <p className="smoke-text center-text">
                <span className="white-text">Home</span> / Contact
              </p>
            </div>
            <div className="large-2 medium-12 flex justify-content-end">
            </div>
          </div>
        </section>
        <div>
          <div className="row">
            <div className="large-2 medium-12"></div>
            <div className="large-8 medium-12 left-text-small">
              <div className="contact-card flex justify-content-between align-items-center w-100">
                <a
                  href="mailto:jaysmoke.inbox@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  data-role="action"
                  className="flex align-items-center justify-content-between">
                  <FiArrowRight />
                </a>
                <div className="label flex justify-content-between align-items-center">
                  <p className="smoke-text">Email Address</p>
                  <div className="text">
                    <a href="mailto:jaysmoke.inbox@gmail.com" target="_blank" rel="noreferrer">
                      jaysmoke.inbox@gmail.com
                    </a>
                  </div>
                </div>
              </div>
              <div className="contact-card flex justify-content-between align-items-center w-100">
                <a
                  href="https://t.me/jaesmoke"
                  target="_blank"
                  rel="noreferrer"
                  data-role="action"
                  className="flex align-items-center justify-content-between">
                  <FiArrowRight />
                </a>
                <div className="label flex justify-content-between align-items-center">
                  <p className="smoke-text">Telegram</p>
                  <div className="text">
                    <a href="https://t.me/jaesmoke" target="_blank" rel="noreferrer">
                      @jaesmoke
                    </a>
                  </div>
                </div>
              </div>
              <div className="contact-card flex justify-content-between align-items-center w-100">
                <a
                  href="tel:+233257396652"
                  target="_blank"
                  rel="noreferrer"
                  data-role="action"
                  className="flex align-items-center justify-content-between">
                  <FiArrowRight />
                </a>
                <div className="label flex justify-content-between align-items-center">
                  <p className="smoke-text">Phone Number</p>
                  <div className="text">
                    <a href="tel:+233257396652">+233 (0) 25 739 6652</a>
                  </div>
                </div>
              </div>
              <div className="contact-card flex justify-content-between align-items-center w-100">
                <a
                  href="https://linkedin.com/in/jaysmoke"
                  target="_blank"
                  rel="noreferrer"
                  data-role="action"
                  className="flex align-items-center justify-content-between">
                  <FiArrowRight />
                </a>
                <div className="label flex justify-content-between align-items-center">
                  <p className="smoke-text">Linkedin</p>
                  <div className="text">
                    <a href="https://linkedin.com/in/jaysmoke" target="_blank" rel="noreferrer">
                      https://linkedin.com/in/jaysmoke
                    </a>
                  </div>
                </div>
              </div>
              <div className="contact-card flex justify-content-between align-items-center w-100">
                <a
                  href="https://github.com/jaesmoke"
                  target="_blank"
                  rel="noreferrer"
                  data-role="action"
                  className="flex align-items-center justify-content-between">
                  <FiArrowRight />
                </a>
                <div className="label flex justify-content-between align-items-center">
                  <p className="smoke-text">Github</p>
                  <div className="text">
                    <a href="https://github.com/jaesmoke" target="_blank" rel="noreferrer">
                      https://github.com/jaesmoke
                    </a>
                  </div>
                </div>
              </div>
              <div className="breaker"></div>
              <p className="smoke-text center-text">
                Get in touch with me using any of the mediums above to get a quote, discuss opportunities or just say Hello
              </p>
            </div>
            <div className="large-2 medium-12 flex justify-content-end"></div>
          </div>
        </div>
      </div>
      <div className="header-break"></div>
      <div className="header-break"></div>
    </>
  )
}
