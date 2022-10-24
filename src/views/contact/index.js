import React from "react";
import { FiMail } from "react-icons/fi";


export default function Contact() {
  return (
    <>
      <div className="header-break"></div>
      <div className="container">
        <div className="jumbo">
          <div className="row">
            <div className="large-2 medium-12">
              <p>Get in Touch</p>
            </div>
            <div className="large-8 medium-12 left-text-small">
              <div className="heading">
                Let's turn ideas into Finished Products
              </div>
              <br />
              <p className="smoke-text">
                ccumulating over five(5) years of experience designing and developing software, I have developed a deep and strong understanding
              </p>
            </div>
            <div className="large-2 medium-12 flex justify-content-end">
              <p className="smoke-text">@contact</p>
            </div>
          </div>
        </div>
        <div>
          <div className="row">
            <div className="large-2 medium-12">
              <p>Cotnact Info</p>
            </div>
            <div className="large-8 medium-12 left-text-small">
              <div className="contact-card">
                <FiMail />
                jaysmoke.inbox@gmail.com
              </div>
            </div>
            <div className="large-2 medium-12 flex justify-content-end">
              <p className="smoke-text">handles</p>
            </div>
          </div>
        </div>
      </div>
      <div className="header-break"></div>
      <div className="header-break"></div>
    </>
  )
}
