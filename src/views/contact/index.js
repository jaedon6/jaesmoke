import { FiMail, FiPhone, FiLinkedin } from "react-icons/fi";
import { FaTelegramPlane } from "react-icons/fa";
import { GoMarkGithub } from "react-icons/go";


export default function Contact(props) {
  return (
    <>
      <div className="header-break"></div>
      <div className="container">
        <div className="jumbo">
          <div className="row reverse-responsive">
            <div className="large-2 medium-12">
              <p className="mb-small">Get in Touch</p>
            </div>
            <div className="large-8 medium-12 left-text-small">
              <div className="heading">
                Connect with me
              </div>
              <br />
              <p className="smoke-text">
                Have any questions? Get in touch with me using any of the mediums below to get a quote, discuss opportunities or just say Hello 👋
              </p>
            </div>
            <div className="large-2 medium-12 flex justify-content-end">
              <p className="smoke-text">@contact</p>
            </div>
          </div>
        </div>
        <div>
          <div className="row">
            <div className="large-2 medium-12"></div>
            <div className="large-8 medium-12 left-text-small">
              <div className="contact-card flex justify-content-between w-100">
                <div className="icon flex align-items-center justify-content-center">
                  <FiMail />
                </div>
                <div className="label flex justify-content-between align-items-center">
                  <p className="smoke-text">Email Address</p>
                  <div className="text">
                    <a href="mailto:jaysmoke.inbox@gmail.com" target="_blank" rel="noreferrer">jaysmoke.inbox@gmail.com</a>
                  </div>
                </div>
              </div>
              <div className="contact-card flex justify-content-between w-100">
                <div className="icon flex align-items-center justify-content-center">
                  <FaTelegramPlane />
                </div>
                <div className="label flex justify-content-between align-items-center">
                  <p className="smoke-text">Telegram</p>
                  <div className="text">
                    <a href="https://t.me/jaesmoke" target="_blank" rel="noreferrer">@jaesmoke</a>
                  </div>
                </div>
              </div>
              <div className="contact-card flex justify-content-between w-100">
                <div className="icon flex align-items-center justify-content-center">
                  <FiPhone />
                </div>
                <div className="label flex justify-content-between align-items-center">
                  <p className="smoke-text">Phone Number</p>
                  <div className="text">
                    <a href="tel:+233257396652">+233 (0) 25 739 6652</a>
                  </div>
                </div>
              </div>
              <div className="contact-card flex justify-content-between w-100">
                <div className="icon flex align-items-center justify-content-center">
                  <FiLinkedin />
                </div>
                <div className="label flex justify-content-between align-items-center">
                  <p className="smoke-text">Linkedin</p>
                  <div className="text">
                    <a href="https://linkedin.com/in/jaysmoke" target="_blank" rel="noreferrer">
                      https://linkedin.com/in/jaysmoke
                    </a>
                  </div>
                </div>
              </div>
              <div className="contact-card flex justify-content-between w-100">
                <div className="icon flex align-items-center justify-content-center">
                  <GoMarkGithub />
                </div>
                <div className="label flex justify-content-between align-items-center">
                  <p className="smoke-text">Github</p>
                  <div className="text">
                    <a href="https://github.com/jaesmoke" target="_blank" rel="noreferrer">
                      https://github.com/jaesmoke
                    </a>
                  </div>
                </div>
              </div>
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
