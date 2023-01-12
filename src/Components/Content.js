import React from "react";
import "./Content.css";
import { AiOutlineArrowRight } from "react-icons/ai";
import { BsFillLightningFill } from "react-icons/bs";
import { RxDividerVertical } from "react-icons/rx";

function Content() {
  return (
    <div className="container">
      <section className="content-con">
        <div className="content-l">
          <div className="text-con">
            <p className="t1">E-COURSE PLATFORM</p>
            <p className="t2">
              Learning and<br></br> teaching online,<br></br> made easy.
            </p>
            <p className="t3">
              Gain subject certification or earn money<br></br> while teaching
              online withGlobalTalk.
            </p>
          </div>
          <div className="button">
            <a href="#" className="signIn-button">
              Sign In
              <AiOutlineArrowRight />
            </a>
            <a href="#" className="learnMore-button">
              Learn More
              <AiOutlineArrowRight />
            </a>
          </div>
          <div className="user">
            <div className="box">
              <p className="number">
                <BsFillLightningFill className="icon" />
                700+
                <RxDividerVertical className="line" />
              </p>
              <p className="text">Hours of content</p>
            </div>
            <div className="box">
              <p className="number">
                <BsFillLightningFill className="icon" />
                575k+
              </p>
              <p className="text">Active Users</p>
            </div>
          </div>
        </div>
        <div className="content-r">
          <img src="https://i.pinimg.com/550x/fb/de/08/fbde08398de3fff3d2f3bbb0418543d8.jpg" />
        </div>
      </section>
    </div>
  );
}

export default Content;
