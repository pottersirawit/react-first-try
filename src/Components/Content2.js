import React from "react";
import "./Content2.css";
import { BsFillLightningFill } from "react-icons/bs";
import image4 from "./image 8.png";
import image2 from "./image 1.png";
import image3 from "./image 2.png";
import image1 from "./aaa.png";

function Content2() {
  return (
    <React.Fragment>
      <div className="bg">
        <section className="content-con">
          <div className="content-l">
            <div className="text-con">
              <p className="t1">E-COURSE PLATFORM</p>
              <p className="t2">
                Learning and<br></br> teaching online,<br></br> made easy.
              </p>
              <p className="t3">
                Practice your English and learn new things<br></br> with the
                platform.
              </p>
            </div>
            <div className="user">
              <div className="box">
                <p className="number">
                  <BsFillLightningFill className="icon" />
                  600
                </p>
                <p className="text">Active Users</p>
              </div>
            </div>
          </div>
          <div className="content-r">
            <img src={image1} />
          </div>
        </section>
      </div>

      <div className="bg2">
        <section className="content-con">
          <div className="content-l">
            <img src={image2} />
          </div>
          <div className="content-r">
            <div className="text-con">
              <p className="t2">
                Learn a language<br></br> in a playful way
              </p>
              <p className="t3">
                Make learning words more fun<br></br> with mini-games
              </p>
            </div>
          </div>
        </section>
      </div>

      <div className="bg">
        <section className="content-con">
          <div className="content-l">
            <div className="text-con">
              <p className="t2">
                Increase your<br></br> vocabulary
              </p>
              <p className="t3">
                Traditional and new effective<br></br> approaches to word study
              </p>
            </div>
          </div>
          <div className="content-r">
            <img src={image3} />
          </div>
        </section>
      </div>

      <section className="content-con">
        <div className="content-l">
          <img src={image4} />
        </div>
        <div className="content-r">
          <div className="text-con">
            <p className="t2">
              Watch your<br></br> progress every day
            </p>
            <p className="t3">
              Save statistics on your achievements,<br></br> words learned, and
              mistakes
            </p>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default Content2;
