import React, { useState, useEffect, useRef } from "react";
import "./Home.css";
import { Link, Navigate, useNavigate } from "react-router-dom";

import Footer from "../products/Footer";
import Navbar from "../products/Navbar";
// import allanimations from "../../src/videos/allanimations.mp4"

function Home() {
  const Navigate = useNavigate();
  const [isProcessVisible, setIsProcessVisible] = useState(false);
  const sectionRef = useRef(null);

  return (
    <div>
      <Navbar />

      <section>
        <div className="HomePage-Video">
          <video className="Landing-Page-video" autoPlay loop muted>
            <source
              src="https://storage.googleapis.com/do-website-resources/landing-banner.mp4"
              type="video/mp4"
            />
          </video>

          <div className="container Landing-page-Main">
            <div className="row">
              <div className="col-md-6">
                <p className="Landing-page-DES">Data Engineering Simplified</p>
                <p className="Homepage-dataobserve-content">
                  DataObserve unites your entire organization with trusted data
                  that's easy to find, understand, and access so you can do more
                  with your data.
                </p>
                <a href="./contact" style={{ textDecoration: "none" }}>
                  <button
                    className="datatypes"
                    style={{
                      display: "flex",
                      height: "61px",
                      maxWidth: "255px",
                      padding: "20px 46px 21px 48px",
                      justifyContent: "center",
                      alignItems: "center",
                      border: "none",
                      marginTop: "70px",
                      borderRadius: "5px",
                    }}
                  >
                    <span
                      className="spans"
                      style={{
                        color: "#0046E8",
                        fontSize: "18px",
                        fontStyle: "normal",
                        fontWeight: "600",
                        lineHeight: "19px",
                      }}
                    >
                      Contact Us
                    </span>{" "}
                    <i
                      className="fa fa-long-arrow-right ARROW-RIGHT-CLOUD"
                      style={{
                        width: "23px",
                        fontSize: "29px",
                        flexShrink: "0",
                        color: "#0046E8",
                        marginLeft: "12px",
                      }}
                      aria-hidden="true"
                    ></i>
                  </button>
                </a>
              </div>

              <div className="col-md-6"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="landing-page-what-we-do-02">
        <div className="container Landing-Page-what-wedo-2">
          <div className="row">
            <div className="col-md-5">
              <h6 className="WHAT-LANDING">WHAT WE DO</h6>
              <h4 className="confidence-landing-Page">
                We ensure confidence by addressing your most formidable
                difficulties.
              </h4>
              <p className="Effective-landing-wedo">
                Effective problem-solving extends beyond discovering solutions;
                it involves continually posing further questions until we grasp
                the factors influencing success and the path to achieve it. Our
                emphasis lies in assisting you in charting the correct course of
                action, eliminating uncertainty, and progressing confidently by
                integrating the strengths of AI and analytics.
              </p>
              <p className="landing-Read">Read our commitment to you</p>
              <hr
                style={{
                  width: "220px",
                  display: "inline-block",
                  borderTop: "1px solid white",
                  marginTop: "0rem",
                }}
              />
            </div>

            <div className="col-md-7">
              <video
                className="Landing-Page-video-we-do"
                autoPlay
                loop
                controls
              >
                <source
                  src="https://storage.googleapis.com/do-website-resources/landing-whatwedo.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="HAPPY-Customers-images">
          <div>
            <h4 className="customers">DataObserve's Happy Customers</h4>
          </div>
          <div className="Digital-Overall-gap">
            <div class="shadow-none p-3 mb-5 bg-white rounded happy-customers-shadowletters">
              <div className="d-flex happy-customers-data-observe">
                <div>
                  <img
                    className="srd-img-01"
                    src="./images/srd-1.png"
                    alt="srd"
                    width={100}
                  />
                </div>
                <div>
                  <img
                    className="srd-img-02"
                    src="./images/srd-2.png"
                    alt="srd"
                    width={100}
                  />
                </div>
                <div>
                  <img
                    className="srd-img-03"
                    src="./images/srd-3.png"
                    alt="srd"
                    width={100}
                  />
                </div>
                <div>
                  <img
                    className="srd-img-04"
                    src="./images/srd-4.png"
                    alt="srd"
                    width={100}
                  />
                </div>
                <div>
                  <img
                    className="srd-img-05"
                    src="./images/srd-5.png"
                    alt="srd"
                    width={100}
                  />
                </div>
                <div>
                  <img
                    className="srd-img-06"
                    src="./images/srd-6.png"
                    alt="srd"
                    width={100}
                  />
                </div>
                <div>
                  <img
                    className="srd-img-07"
                    src="./images/srd-7.png"
                    alt="srd"
                    width={100}
                  />
                </div>
                <div>
                  <img
                    className="srd-img-08"
                    src="./images/srd-8.png"
                    alt="srd"
                    width={100}
                  />
                </div>
                <div>
                  <img
                    className="srd-img-09"
                    src="./images/srd-9.png"
                    alt="srd"
                    width={100}
                  />
                </div>
                <div>
                  <img
                    className="srd-img-10"
                    src="./images/srd-10.png"
                    alt="srd"
                    width={100}
                  />
                </div>
                <div>
                  <img
                    className="srd-img-11"
                    src="./images/srd-11.png"
                    alt="srd"
                    width={100}
                  />
                </div>
                <div>
                  <img
                    className="srd-img-12"
                    src="./images/srd-12.png"
                    alt="srd"
                    width={100}
                  />
                </div>
                <div>
                  <img
                    className="srd-img-13"
                    src="./images/srd-13.png"
                    alt="srd"
                    width={100}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="Landingpage-dna-image">
          <div>
            <img
              className="landing-Dna"
              src="./images/landingpage-DNA.png"
              alt="dna"
            />
          </div>
          <div className="landingpag-dna-text">
            <div className="container">
              <div className="row">
                <div className="col-md-1"></div>
                <div className="col-md-7">
                  <h4 className="landing-power-us">What powers us?</h4>
                  <h4 className="landing-observer-dna">The Observer DNA</h4>
                  <p className="landing-dna-paragraph">
                    An inherent quality within the outstanding teams at
                    DataObserve, this enables us to unravel intricacies and
                    tackle some of the most challenging problems. A sense of
                    ownership permeates everything we undertake, coupled with a
                    forward-looking strategy to problem-solving, leveraging
                    extensive expertise, and daring to experiment with
                    unconventional methods to ultimately provide value.
                  </p>
                  <div className="d-flex">
                    <a
                      href="./company"
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      <button className="landing-How-WE-work">
                        See how we work{" "}
                      </button>
                    </a>

                    <a
                      href="./people"
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      <button className="landing-How-WE-work-1">
                        Find a career with us{" "}
                      </button>
                    </a>
                  </div>
                </div>
                <div className="col-md-4"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="Intelligent-Action">
        <div className="container">
          <p className="Intelligent-Heading">
            Transform your enterprise data into intelligent action
          </p>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-md-3 Landing-strategy-all circles-Landing">
              <img
                className="advisory-landing"
                src="./images/advisory.png"
                alt="ad"
              />
              <p className="Gen-devops-talent-1">STRATEGY AND ADVISORY</p>

              <p className="Gen-devops-talent-3">
                Gen AI as a Service
                <br />
                DevOps as a Service
                <br />
                Talent as a Service
              </p>

              <hr style={{ width: "60px", backgroundColor: "#312E2D" }} />
            </div>
            <div className="col-md-3 Landing-strategy-all circles-Landing">
              <img
                className="advisory-landing"
                src="./images/engineerdata.png"
                alt="ad"
              />
              <p className="Gen-devops-talent-1">ENGINEER YOUR DATA</p>
              <div>
                <p className="Gen-devops-talent-3">
                  DO360
                  <br />
                  DO Insights
                  <br />
                  DO Monitoring
                </p>
              </div>
              <hr style={{ width: "60px", backgroundColor: "#312E2D" }} />
            </div>
            <div className="col-md-3 Landing-strategy-all circles-Landing">
              <img
                className="advisory-landing"
                src="./images/aiml-landing.png"
                alt="ad"
              />
              <p className="Gen-devops-talent-1">DIFFERENTIATE WITH AI/ML</p>
              <div>
                <p className="Gen-devops-talent">
                  Data Engineering
                  <br />
                  AI & Machine Learning
                  <br />
                  DO Charts
                  <br />
                  DO Prompt
                </p>
              </div>
              <hr style={{ width: "60px", backgroundColor: "#312E2D" }} />
            </div>
            <div className="col-md-3 Landing-strategy-all circles-Landing">
              <img
                className="advisory-landing"
                src="./images/insights-landing.png"
                alt="ad"
              />
              <p className="Gen-devops-talent-1">OPERATIONALIZE INSIGHTS</p>
              <div>
                <p className="Gen-devops-talent-3">
                  Cloud Transformation
                  <br />
                  Application Modernization
                  <br />
                  Data Analytics & BI
                  <br />
                </p>
              </div>
              <hr style={{ width: "60px", backgroundColor: "#312E2D" }} />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="Landing-building-image">
          <div>
            <img
              src="./images/building-landing.png"
              className="building-Landing"
              alt="building"
            />
          </div>

          <div className="landing-building-text">
            <div className="container">
              <div className="row">
                <div className="col-md-1"></div>
                <div className="col-md-5">
                  <p className="Building-Heading">
                    Enhancing industry standards through the integration of AI
                    and analytics.
                  </p>
                  <p className="Building-paragraph">
                    Each industry presents its unique challenges, and for
                    numerous pressing issues, there are no established
                    playbooks. Achieving solutions requires a delicate balance
                    between adhering to best practices and engaging in
                    fundamental, ground-up thinking.
                  </p>
                </div>
                <div className="col-md-6"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="AI-journey-main-background">
        <div className="container journey-Ai">
          <div className="row">
            <div className="col-md-4">
              <p className="AI-Journey">
                Boost your AI journey with our products, tools and accelerators.
              </p>
            </div>
            <div className="col-md-8">
              <img
                src="./images/ai-journey.png"
                className="ai-Journey-image"
                alt="ai"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="software-homePAGE">
        <div className="">
          <div className="row Coures-IMAGES">
            <div className="col-md-1"></div>
            <div className="col-md-5 Home-PAGE-Latest">
              <p className="landing-PartnerdBRING">
                We’ve partnered with the <br />
                best to bring you the latest
              </p>
              <hr
                style={{
                  width: "100px",
                  backgroundColor: "#312E2D",
                  marginLeft: "10px",
                }}
              />
            </div>
            <div className="col-md-6 all-mgasd">
              <div className="d-flex software-Coures">
                <img
                  src="./images/microsoft.png"
                  className="Microsoft"
                  alt="microsoft"
                />

                <img
                  src="./images/google-cloud.png"
                  className="Microsoft"
                  alt="microsoft"
                />

                <img
                  src="./images/aws-home.png"
                  className="Microsoft"
                  alt="microsoft"
                />
              </div>
              <div className="d-flex software-Coures">
                <img
                  src="./images/snow-home.png"
                  className="Microsoft"
                  alt="microsoft"
                />

                <img
                  src="./images/data-bricks.png"
                  className="Microsoft"
                  alt="microsoft"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="Home-Career-page">
        <div className="container-fluid Unlock-landing">
          <div className="row">
            <div className="col-md-6 potential-Landing">
              <p className="Potential">
                Unlock your complete potential for a future filled with
                limitless opportunities.
              </p>
              <p className="landing-EXplore">
                Explore a purposeful career journey within a collaborative
                setting.
              </p>
            </div>
            <div className="col-md-6 landing-Limit">
              <img
                src="./images/limit.png"
                alt="limit"
                className="limit-Image-1"
              />
            </div>
          </div>
        </div>
        <a href="./contact" style={{ textDecoration: "none" }}>
          <button
            className="datatypes"
            style={{
              display: "flex",
              height: "61px",
              maxWidth: "255px",
              padding: "20px 46px 21px 48px",
              justifyContent: "center",
              alignItems: "center",
              border: "none",
              marginTop: "10px",
              borderRadius: "5px",
            }}
          >
            <span
              className="spans"
              style={{
                color: "#0046E8",
                fontSize: "18px",
                fontStyle: "normal",
                fontWeight: "600",
                lineHeight: "19px",
              }}
            >
              Contact Us
            </span>{" "}
            <i
              className="fa fa-long-arrow-right ARROW-RIGHT-CLOUD"
              style={{
                width: "23px",
                fontSize: "29px",
                flexShrink: "0",
                color: "#0046E8",
                marginLeft: "12px",
              }}
              aria-hidden="true"
            ></i>
          </button>
        </a>
      </section>

      <Footer />
    </div>
  );
}

export default Home;
