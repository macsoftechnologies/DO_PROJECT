import React from "react";
import "./Industries.css";
import Navbar from "../products/Navbar";
import Footer from "../products/Footer";
import Faq from "../products/Faq";
// import lifescience from "../../src/videos/life-science.mp4";

const Industries = () => {
  const handleAccordianToggle = () => {
    let elements = document.querySelectorAll(".collapse.show");

    // Loop through each element and remove the "show" class
    elements.forEach(function (element) {
      element.classList.remove("show");
    });
  };
  return (
    <div>
      <Navbar />
      <div className="industries-play-bg-video">
        <video className="life-science-video" autoPlay loop muted>
          <source
            src="https://storage.googleapis.com/do-website-resources/life-science.mp4"
            type="video/mp4"
          />
        </video>
        <div className="mainimg">
          <p className="indheading">
            <div className="industies-mainhead">
              <p className="life">Life Science</p>
              <span className="data1">
                Developing data solutions in the Life Sciences sector to
                stimulate innovation.
              </span>
              <br />
            </div>
            <p className="industries-subhead">
              {" "}
              Harness the power of data-driven cloud computing in the Life
              Sciences sector with DataObserve to cut
              <br /> costs, enhance engagement, and facilitate seamless
              collaboration.
            </p>
          </p>
        
          <button className="button1">
            <span
              className="span1"
              style={{
                color: "#1A4AB9",
              }}
            >
              Get in touch
            </span>{" "}
            <i
              className="fa fa-long-arrow-right ml-3"
              style={{
                color: "#1A4AB9",
              }}
              aria-hidden="true"
            ></i>
          </button>
        </div>
      </div>

      <section className="industriesexpclass">
        <div className="main-exp container">
          <div>
            <h4 className="expertiseind">Our Expertise</h4>
          </div>
          <div>
            <p className="container col-md-9 exp-para">
              DataObserve provides a wide range of solutions tailored to the
              unique needs of the life science and pharmaceutical industry.
              Explore the breadth of our cloud-driven services designed to meet
              industry-specific requirements.
            </p>
          </div>

          <div
            className="container"
            style={{
              paddingTop: "50px",
              paddingLeft: "3%",
              backgroundColor: "white",
            }}
          >
            <ul
              class="nav nav-pills mb-3 pcmdheads"
              id="pills-tab"
              role="tablist"
              style={{ alignItems: "center", justifyContent: "center" }}
            >
              <li class="nav-item">
                <a
                  class="nav-link active"
                  id="pills-home-tab"
                  data-toggle="pill"
                  href="#pills-home"
                  role="tab"
                  aria-controls="pills-home"
                  aria-selected="true"
                  style={{
                    borderBottom: "3px solid #E2ECFF",
                    borderRadius: "0px",
                    color: "rgba(5, 5, 5, 0.35)",
                  }}
                >
                  Pharma
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  id="pills-profile-tab"
                  data-toggle="pill"
                  href="#pills-profile"
                  role="tab"
                  aria-controls="pills-profile"
                  aria-selected="false"
                  style={{
                    borderBottom: "3px solid #E2ECFF",
                    borderRadius: "0px",
                    color: "rgba(5, 5, 5, 0.35)",
                  }}
                >
                  clinicaldevices
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  id="pills-contact-tab"
                  data-toggle="pill"
                  href="#pills-contact"
                  role="tab"
                  aria-controls="pills-contact"
                  aria-selected="false"
                  style={{
                    borderBottom: "3px solid #E2ECFF",
                    borderRadius: "0px",
                    color: "rgba(5, 5, 5, 0.35)",
                  }}
                >
                  medicaldevices
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  id="pills-economic-tab"
                  data-toggle="pill"
                  href="#pills-economic"
                  role="tab"
                  aria-controls="pills-economic"
                  aria-selected="false"
                  style={{
                    borderBottom: "3px solid #E2ECFF",
                    borderRadius: "0px",
                    color: "rgba(5, 5, 5, 0.35)",
                  }}
                >
                  Genomics
                </a>
              </li>
            </ul>
            <div class="tab-content" id="pills-tabContent">
              <div
                class="tab-pane fade show active"
                id="pills-home"
                role="tabpanel"
                aria-labelledby="pills-home-tab"
              >
                <div className="row">
                  <div className="col-md-8">
                    <div>
                      <p>
                        Our life sciences solutions are designed to assist
                        organizations in producing improved medications and
                        enhancing operational efficiency, all while minimizing
                        downtime.
                      </p>
                    </div>
                    <div>
                      <div
                        class="accordion"
                        id="accordionExamplee"
                        style={{
                          height: "400px",
                          overflowY: "auto",
                          border: "none",
                        }}
                      >
                        <div
                          class="card"
                          style={{
                            border: "none",
                            marginBottom: "10px",
                            backgroundColor: "#F3F6FF",
                          }}
                        >
                          <div class="card-header pcmg-border" id="headingOnee">
                            <h2 class="ind-pcmg-heading mb-0">
                              <button
                                class="btn btn-link d-flex"
                                style={{
                                  alignItems: "center",
                                  justifyContent: "space-between",
                                }}
                                type="button"
                                data-toggle="collapse"
                                data-target="#collapseOnee"
                                aria-expanded="true"
                                aria-controls="collapseOnee"
                              >
                                Drug Discovery
                                <i
                                  class="fa fa-times"
                                  style={{ color: "#0046E8" }}
                                  aria-hidden="true"
                                ></i>
                              </button>
                            </h2>
                          </div>

                          <div
                            id="collapseOnee"
                            class="collapse show"
                            aria-labelledby="headingOnee"
                            data-parent="#accordionExamplee"
                          >
                            <div class="ind-pcmgdata card-body">
                              Biopharma companies are already harnessing
                              advanced insights through big data and analytics
                              in the field of life sciences. They can access
                              molecular lab data and perform quantum
                              computations on the fly, speeding up the drug
                              discovery process.
                            </div>
                          </div>
                        </div>
                        <div
                          class="card"
                          style={{
                            border: "none",
                            marginBottom: "10px",
                            backgroundColor: "#F3F6FF",
                          }}
                        >
                          <div
                            class="card-header  pcmg-border"
                            id="headingTwoo"
                          >
                            <h2 class="ind-pcmg-heading mb-0">
                              <button
                                class="btn btn-link d-flex"
                                style={{
                                  alignItems: "center",
                                  justifyContent: "space-between",
                                }}
                                type="button"
                                data-toggle="collapse"
                                data-target="#collapseTwoo"
                                aria-expanded="false"
                                aria-controls="collapseTwoo"
                              >
                                Drug Commercialization
                                <i
                                  class="fa fa-times"
                                  style={{ color: "#0046E8" }}
                                  aria-hidden="true"
                                ></i>
                              </button>
                            </h2>
                          </div>
                          <div
                            id="collapseTwoo"
                            class="collapse"
                            aria-labelledby="headingTwoo"
                            data-parent="#accordionExamplee"
                          >
                            <div class="ind-pcmgdata card-body">
                              DataObserve offers powerful cloud tools and data
                              lakes that can serve a multitude of purposes,
                              spanning analytics, data organization, lab data
                              aggregation, drug life cycle management, and the
                              commercialization process.
                            </div>
                          </div>
                        </div>
                        <div
                          class="card"
                          style={{
                            border: "none",
                            marginBottom: "10px",
                            backgroundColor: "#F3F6FF",
                          }}
                        >
                          <div
                            class="card-header  pcmg-border"
                            id="headingThree"
                          >
                            <h2 class="ind-pcmg-heading mb-0">
                              <button
                                class="btn btn-link d-flex"
                                style={{
                                  alignItems: "center",
                                  justifyContent: "space-between",
                                }}
                                type="button"
                                data-toggle="collapse"
                                data-target="#collapseThree"
                                aria-expanded="false"
                                aria-controls="collapseThree"
                              >
                                Operations and Supply-chain
                                <i
                                  class="fa fa-times"
                                  style={{ color: "#0046E8" }}
                                  aria-hidden="true"
                                ></i>
                              </button>
                            </h2>
                          </div>
                          <div
                            id="collapseThree"
                            class="collapse"
                            aria-labelledby="headingThree"
                            data-parent="#accordionExamplee"
                          >
                            <div class="ind-pcmgdata card-body">
                              DataObserve's life science and pharma services
                              make it possible to streamline pharmaceutical
                              operations within your supply chain or orchestrate
                              all your development processes in the cloud.
                            </div>
                          </div>
                        </div>

                        <div
                          class="card"
                          style={{
                            border: "none",
                            marginBottom: "10px",
                            backgroundColor: "#F3F6FF",
                          }}
                        >
                          <div
                            class="card-header  pcmg-border"
                            id="headingFour"
                          >
                            <h2 class="ind-pcmg-heading mb-0">
                              <button
                                class="btn btn-link d-flex"
                                style={{
                                  alignItems: "center",
                                  justifyContent: "space-between",
                                }}
                                type="button"
                                data-toggle="collapse"
                                data-target="#collapseFour"
                                aria-expanded="false"
                                aria-controls="collapsefour"
                              >
                                Pharmacovigilance
                                <i
                                  class="fa fa-times"
                                  style={{ color: "#0046E8" }}
                                  aria-hidden="true"
                                ></i>
                              </button>
                            </h2>
                          </div>
                          <div
                            id="collapseFour"
                            class="collapse"
                            aria-labelledby="headingFour"
                            data-parent="#accordionExamplee"
                          >
                            <div class="ind-pcmgdata card-body">
                              The field of pharmacovigilance or drug safety
                              analysis is undergoing a significant
                              transformation with the introduction of data
                              analytics in life sciences. Our solutions are
                              designed to assist you in aggregating reporting,
                              mitigating risks, and enhancing precision in this
                              domain.
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <img
                      className="industries-pharama"
                      src="./images/longpharma.png"
                    />
                  </div>
                </div>
              </div>
              <div
                class="tab-pane fade"
                id="pills-profile"
                role="tabpanel"
                aria-labelledby="pills-profile-tab"
              >
                <div className="row">
                  <div className="col-md-8">
                    <div>
                      <p>
                        From pilot studies to prevention trials, discover how
                        our cloud partners and data analysis are revolutionizing
                        traditional clinical trial approaches.
                      </p>
                    </div>
                    <div>
                      <div
                        class="accordion"
                        id="accordionExamplef"
                        style={{
                          height: "400px",
                          overflowY: "auto",
                          border: "none",
                        }}
                      >
                        <div
                          class="card"
                          style={{
                            marginBottom: "10px",
                            backgroundColor: "#FEE",
                            border: "none",
                          }}
                        >
                          <div
                            class="card-header  pcmg-border-2"
                            id="headingOnef"
                          >
                            <h2 class="ind-pcmg-heading mb-0">
                              <button
                                class="btn btn-link d-flex"
                                style={{
                                  alignItems: "center",
                                  justifyContent: "space-between",
                                }}
                                type="button"
                                data-toggle="collapse"
                                data-target="#collapseOnef"
                                aria-expanded="true"
                                aria-controls="collapseOnef"
                              >
                                Clinical Trial Management
                                <i
                                  class="fa fa-times"
                                  style={{ color: "#0046E8" }}
                                  aria-hidden="true"
                                ></i>
                              </button>
                            </h2>
                          </div>

                          <div
                            id="collapseOnef"
                            class="collapse show"
                            aria-labelledby="headingOnef"
                            data-parent="#accordionExamplef"
                          >
                            <div class="ind-pcmgdata card-body">
                              Using cloud-powered automated clinical trial
                              monitoring, AWS in pharma allows medical
                              professionals to run intricate clinical trials
                              with better data quality and lower costs.
                            </div>
                          </div>
                        </div>
                        <div
                          class="card"
                          style={{
                            marginBottom: "10px",
                            backgroundColor: "#FEE",
                            border: "none",
                          }}
                        >
                          <div
                            class="card-header  pcmg-border-2"
                            id="headingTwof"
                          >
                            <h2 class="ind-pcmg-heading mb-0">
                              <button
                                class="btn btn-link d-flex"
                                style={{
                                  alignItems: "center",
                                  justifyContent: "space-between",
                                }}
                                type="button"
                                data-toggle="collapse"
                                data-target="#collapseTwof"
                                aria-expanded="false"
                                aria-controls="collapseTwoof"
                              >
                                Patient Engagement
                                <i
                                  class="fa fa-times"
                                  style={{ color: "#0046E8" }}
                                  aria-hidden="true"
                                ></i>
                              </button>
                            </h2>
                          </div>
                          <div
                            id="collapseTwof"
                            class="collapse"
                            aria-labelledby="headingTwof"
                            data-parent="#accordionExamplef"
                          >
                            <div class="ind-pcmgdata card-body">
                              AWS in pharma aims to bridge the gap between
                              doctors and patients by boosting the engagement
                              rate using interactive cloud solutions and deep
                              data insights.
                            </div>
                          </div>
                        </div>
                        <div
                          class="card"
                          style={{
                            marginBottom: "10px",
                            backgroundColor: "#FEE",
                            border: "none",
                          }}
                        >
                          <div
                            class="card-header  pcmg-border-2"
                            id="headingThreef"
                          >
                            <h2 class="ind-pcmg-heading mb-0">
                              <button
                                class="btn btn-link d-flex"
                                style={{
                                  alignItems: "center",
                                  justifyContent: "space-between",
                                }}
                                type="button"
                                data-toggle="collapse"
                                data-target="#collapseThreef"
                                aria-expanded="false"
                                aria-controls="collapseThreef"
                              >
                                Real-world Evidence
                                <i
                                  class="fa fa-times"
                                  style={{ color: "#0046E8" }}
                                  aria-hidden="true"
                                ></i>
                              </button>
                            </h2>
                          </div>
                          <div
                            id="collapseThreef"
                            class="collapse"
                            aria-labelledby="headingThreef"
                            data-parent="#accordionExamplef"
                          >
                            <div class="ind-pcmgdata card-body">
                              By deploying real-world evidence platforms using a
                              variety of AWS solutions, professionals can
                              interpret disparate pharmaceutical data and track
                              genuine patterns. This, in turn, can be used to
                              advance life sciences.
                            </div>
                          </div>
                        </div>
                        <div
                          class="card"
                          style={{
                            marginBottom: "10px",
                            backgroundColor: "#FEE",
                            border: "none",
                          }}
                        >
                          <div
                            class="card-header  pcmg-border-2"
                            id="headingFourf"
                          >
                            <h2 class="ind-pcmg-heading mb-0">
                              <button
                                class="btn btn-link d-flex"
                                style={{
                                  alignItems: "center",
                                  justifyContent: "space-between",
                                }}
                                type="button"
                                data-toggle="collapse"
                                data-target="#collapseFourf"
                                aria-expanded="false"
                                aria-controls="collapseFourf"
                              >
                                Digital Therapeutics
                                <i
                                  class="fa fa-times"
                                  style={{ color: "#0046E8" }}
                                  aria-hidden="true"
                                ></i>
                              </button>
                            </h2>
                          </div>
                          <div
                            id="collapseFourf"
                            class="collapse"
                            aria-labelledby="headingf"
                            data-parent="#accordionExamplef"
                          >
                            <div class="ind-pcmgdata card-body">
                              Digital Therapeutics integrated with
                              top-of-the-line AWS solutions enables
                              organizations to build, customize and deploy
                              independent yet interconnected medication devices
                              for optimal patient care.
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <img
                      src="./images/longclinicaltrials.png"
                      className="longclinicaltrials"
                    />
                  </div>
                </div>
              </div>
              <div
                class="tab-pane fade"
                id="pills-contact"
                role="tabpanel"
                aria-labelledby="pills-contact-tab"
              >
                <div className="row">
                  <div className="col-md-8">
                    <div>
                      <p>
                        The convergence of medical devices with the vast
                        capabilities of cloud technology and data analytics in
                        the field of life sciences has democratized diagnostics,
                        making them more accessible to patients around the
                        world. Explore the diverse impacts it has across various
                        sectors within the domain.
                      </p>
                    </div>
                    <div>
                      <div
                        class="accordion"
                        id="accordionExampleg"
                        style={{
                          height: "343px",
                          overflowY: "auto",
                          border: "none",
                        }}
                      >
                        <div
                          class="card"
                          style={{
                            marginBottom: "10px",
                            backgroundColor: "#D9F5ED",
                            border: "none",
                          }}
                        >
                          <div
                            class="card-header  pcmg-border-3"
                            id="headingOneg"
                          >
                            <h2 class="ind-pcmg-heading mb-0">
                              <button
                                class="btn btn-link d-flex"
                                style={{
                                  alignItems: "center",
                                  justifyContent: "space-between",
                                }}
                                type="button"
                                data-toggle="collapse"
                                data-target="#collapseOneg"
                                aria-expanded="true"
                                aria-controls="collapseOneg"
                              >
                                Digital Health Monitoring
                                <i
                                  class="fa fa-times"
                                  style={{ color: "#0046E8" }}
                                  aria-hidden="true"
                                ></i>
                              </button>
                            </h2>
                          </div>

                          <div
                            id="collapseOneg"
                            class="collapse show"
                            aria-labelledby="headingOneg"
                            data-parent="#accordionExampleg"
                          >
                            <div class="ind-pcmgdata card-body">
                              Leveraging remote patient monitoring facilities
                              and real-time data sharing, AWS-driven digital
                              health monitoring allows pharma professionals to
                              keep constant tabs on their patient’s health.
                            </div>
                          </div>
                        </div>
                        <div
                          class="card"
                          style={{
                            marginBottom: "10px",
                            backgroundColor: "#D9F5ED",
                            border: "none",
                          }}
                        >
                          <div
                            class="card-header pcmg-border-3"
                            id="headingTwog"
                          >
                            <h2 class="ind-pcmg-heading mb-0">
                              <button
                                class="btn btn-link d-flex"
                                style={{
                                  alignItems: "center",
                                  justifyContent: "space-between",
                                }}
                                type="button"
                                data-toggle="collapse"
                                data-target="#collapseTwog"
                                aria-expanded="false"
                                aria-controls="collapseTwog"
                              >
                                Advanced Analytics for Medical Imaging
                                <i
                                  class="fa fa-times"
                                  style={{ color: "#0046E8" }}
                                  aria-hidden="true"
                                ></i>
                              </button>
                            </h2>
                          </div>
                          <div
                            id="collapseTwog"
                            class="collapse"
                            aria-labelledby="headingTwog"
                            data-parent="#accordionExampleg"
                          >
                            <div class="ind-pcmgdata card-body">
                              AWS allows research teams and radiologists to
                              accelerate the pace of tech adoption and
                              innovations while also helping them unleash the
                              full potential of medical imagery with advanced
                              analytics.
                            </div>
                          </div>
                        </div>
                        <div
                          class="card"
                          style={{
                            marginBottom: "10px",
                            backgroundColor: "#D9F5ED",
                            border: "none",
                          }}
                        >
                          <div
                            class="card-header pcmg-border-3"
                            id="headingThreeg"
                          >
                            <h2 class="ind-pcmg-heading mb-0">
                              <button
                                class="btn btn-link d-flex"
                                style={{
                                  alignItems: "center",
                                  justifyContent: "space-between",
                                }}
                                type="button"
                                data-toggle="collapse"
                                data-target="#collapseThreeg"
                                aria-expanded="false"
                                aria-controls="collapseThreeg"
                              >
                                WebApps for Medical Device
                                <i
                                  class="fa fa-times"
                                  style={{ color: "#0046E8" }}
                                  aria-hidden="true"
                                ></i>
                              </button>
                            </h2>
                          </div>
                          <div
                            id="collapseThreeg"
                            class="collapse"
                            aria-labelledby="headingThreeg"
                            data-parent="#accordionExampleg"
                          >
                            <div class="ind-pcmgdata card-body">
                              Pharma and life science web apps are software that
                              brings pharmaceutical services to your fingertips.
                              These smartphone-friendly web apps utilize AWS for
                              life sciences to ensure seamless communication and
                              delivery.
                            </div>
                          </div>
                        </div>
                        <div
                          class="card"
                          style={{
                            marginBottom: "10px",
                            backgroundColor: "#D9F5ED",
                            border: "none",
                          }}
                        >
                          <div
                            class="card-header pcmg-border-3"
                            id="headingFourg"
                          >
                            <h2 class="ind-pcmg-heading mb-0">
                              <button
                                class="btn btn-link d-flex"
                                style={{
                                  alignItems: "center",
                                  justifyContent: "space-between",
                                }}
                                type="button"
                                data-toggle="collapse"
                                data-target="#collapseFourg"
                                aria-expanded="false"
                                aria-controls="collapseFourg"
                              >
                                Wearables and IoT
                                <i
                                  class="fa fa-times"
                                  style={{ color: "#0046E8" }}
                                  aria-hidden="true"
                                ></i>
                              </button>
                            </h2>
                          </div>
                          <div
                            id="collapseFourg"
                            class="collapse"
                            aria-labelledby="headingFourg"
                            data-parent="#accordionExampleg"
                          >
                            <div class="ind-pcmgdata card-body">
                              Wearables have become an integral part of life
                              sciences and pharmaceutical testing. Data
                              analytics for life sciences enables wearable
                              pharma devices to share, upload, and process
                              participants’ data in real-time.
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <img
                      className="longmedicaldevices"
                      src="./images/longmedicaldevices.png"
                    />
                  </div>
                </div>
              </div>
              <div
                class="tab-pane fade"
                id="pills-economic"
                role="tabpanel"
                aria-labelledby="pills-economic-tab"
              >
                <div className="row">
                  <div className="col-md-8">
                    <div>
                      <p>
                        In broad terms, Genomics is a field that focuses on the
                        examination of DNA genomes' structure, evolution, and
                        functionality. DO, in collaboration with its partners,
                        has been at the forefront of driving innovation in
                        genomics through the following approaches.
                      </p>
                    </div>
                    <div>
                      <div
                        class="accordion"
                        id="accordionExampleh"
                        style={{
                          height: "343px",
                          overflowY: "auto",
                          border: "none",
                        }}
                      >
                        <div
                          class="card"
                          style={{
                            marginBottom: "10px",
                            backgroundColor: "#FFFBE6",
                            border: "none",
                          }}
                        >
                          <div
                            class="card-header pcmg-border-4"
                            id="headingOneh"
                          >
                            <h2 class="ind-pcmg-heading mb-0">
                              <button
                                class="btn btn-link d-flex"
                                style={{
                                  alignItems: "center",
                                  justifyContent: "space-between",
                                }}
                                type="button"
                                data-toggle="collapse"
                                data-target="#collapseOneh"
                                aria-expanded="true"
                                aria-controls="collapseOneh"
                              >
                                Pharmacogenomics
                                <i
                                  class="fa fa-times"
                                  style={{ color: "#0046E8" }}
                                  aria-hidden="true"
                                ></i>
                              </button>
                            </h2>
                          </div>

                          <div
                            id="collapseOneh"
                            class="collapse show"
                            aria-labelledby="headingOneh"
                            data-parent="#accordionExampleh"
                          >
                            <div class="ind-pcmgdata card-body">
                              Pharmacogenomics is the study of analyzing genes
                              responsible for variable actions that drugs
                              trigger. AWS solutions enable researchers to draw
                              more refined pharmacogenomic results in lesser
                              time.
                            </div>
                          </div>
                        </div>
                        <div
                          class="card"
                          style={{
                            marginBottom: "10px",
                            backgroundColor: "#FFFBE6",
                            border: "none",
                          }}
                        >
                          <div
                            class="card-header pcmg-border-4"
                            id="headingTwoh"
                          >
                            <h2 class="ind-pcmg-heading mb-0">
                              <button
                                class="btn btn-link d-flex"
                                style={{
                                  alignItems: "center",
                                  justifyContent: "space-between",
                                }}
                                type="button"
                                data-toggle="collapse"
                                data-target="#collapseTwoh"
                                aria-expanded="false"
                                aria-controls="collapseTwoh"
                              >
                                Tertiary Analysis
                                <i
                                  class="fa fa-times"
                                  style={{ color: "#0046E8" }}
                                  aria-hidden="true"
                                ></i>
                              </button>
                            </h2>
                          </div>
                          <div
                            id="collapseTwoh"
                            class="collapse"
                            aria-labelledby="headingTwoh"
                            data-parent="#accordionExampleh"
                          >
                            <div class="ind-pcmgdata card-body">
                              Transform genomic data into biological
                              interpretations with the help of potent machine
                              learning and high-performance cloud computing
                              resources. Ask Agilisium for help today.
                            </div>
                          </div>
                        </div>
                        <div
                          class="card"
                          style={{
                            marginBottom: "10px",
                            backgroundColor: "#FFFBE6",
                            border: "none",
                          }}
                        >
                          <div
                            class="card-header pcmg-border-4"
                            id="headingThreeh"
                          >
                            <h2 class="ind-pcmg-heading mb-0">
                              <button
                                class="btn btn-link d-flex"
                                style={{
                                  alignItems: "center",
                                  justifyContent: "space-between",
                                }}
                                type="button"
                                data-toggle="collapse"
                                data-target="#collapseThreeh"
                                aria-expanded="false"
                                aria-controls="collapseThreeh"
                              >
                                Clinical Genomics
                                <i
                                  class="fa fa-times"
                                  style={{ color: "#0046E8" }}
                                  aria-hidden="true"
                                ></i>
                              </button>
                            </h2>
                          </div>
                          <div
                            id="collapseThreeh"
                            class="collapse"
                            aria-labelledby="headingThreeh"
                            data-parent="#accordionExampleh"
                          >
                            <div class="ind-pcmgdata card-body">
                              Data analytics for life sciences grant clinical
                              professionals the power to diagnose with utmost
                              precision using better genetic data. AWS has been
                              the leading choice for safe and fast clinical
                              genomics for years.
                            </div>
                          </div>
                        </div>
                        <div
                          class="card"
                          style={{
                            marginBottom: "10px",
                            backgroundColor: "#FFFBE6",
                            border: "none",
                          }}
                        >
                          <div
                            class="card-header pcmg-border-4"
                            id="headingFourh"
                          >
                            <h2 class="ind-pcmg-heading mb-0">
                              <button
                                class="btn btn-link d-flex"
                                style={{
                                  alignItems: "center",
                                  justifyContent: "space-between",
                                }}
                                type="button"
                                data-toggle="collapse"
                                data-target="#collapseFourh"
                                aria-expanded="false"
                                aria-controls="collapseFourh"
                              >
                                Multi-modal and Multi-omics
                                <i
                                  class="fa fa-times"
                                  style={{ color: "#0046E8" }}
                                  aria-hidden="true"
                                ></i>
                              </button>
                            </h2>
                          </div>
                          <div
                            id="collapseFourh"
                            class="collapse"
                            aria-labelledby="headingFourh"
                            data-parent="#accordionExampleh"
                          >
                            <div class="ind-pcmgdata card-body">
                              Experience increased computer efficiency at scale
                              and achieved high data integration capabilities,
                              making discovering clinical data correlations
                              easier than ever with multi-modal and multi-omics.
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <img
                      className="multiomics"
                      src="./images/longgenomics.png"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* jgutihjg */}
      </section>

      <div className="pmt container">
        <h3 className="platforms">
          Accelerate Life Sciences Data Transformation
          <br />
          Journey!
        </h3>
        <p className="container col-md-11 ind-platformspara">
          DataObserve aims to establish itself as a prominent provider of cloud
          and data solutions, serving a worldwide clientele of life science{" "}
          organizations. We combine the ideal fusion of data and cloud
          technologies to support and empower the life sciences sector.
        </p>
        <div className="container mt-3">
          <div className="row box">
            <div className="col-md-4 ind-bb-sg-1">
              <div className="bx1-border instudrie-box">
                <div className="text-initial">
                  <div className="d-flex">
                    <img
                      src="./images/business.png"
                      className="App-logo-industrie business"
                      alt="logo"
                      width={45}
                      style={{
                        marginBottom: "10px",
                        marginTop: "-2px",
                      }}
                    />
                    <h5 className="ind-boxhead">
                      Advanced Business Intelligence
                    </h5>
                  </div>
                  <p className="boxtext text-initial">
                    Harness the potential of big data analysis in the life
                    sciences sector through collaborative advanced business
                    intelligence and EPM optimization tools.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4 ind-bb-sg-2">
              <div className="bx1-border instudrie-box">
                <div className="text-initial">
                  <div className="d-flex">
                    <img
                      src="./images/comercialdatalake.png"
                      className="App-logo-industrie business"
                      alt="logo"
                      width={45}
                      style={{
                        marginBottom: "10px",
                        marginTop: "-2px",
                      }}
                    />
                    <h5 className="ind-boxhead">
                      Commercial Data Lake Platforms
                    </h5>
                  </div>
                  <p className="boxtext text-initial">
                    Establish a centralized repository for personalized life
                    sciences data, facilitating storage and organization within
                    a single, limitless realm of possibilities through
                    DataObserve's cloud solutions.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4 ind-bb-sg-3">
              <div className="bx1-border instudrie-box">
                <div className="text-initial">
                  <div className="d-flex">
                    <img
                      src="./images/Data-driven.png"
                      className="App-logo-industrie business"
                      alt="logo"
                      width={45}
                      style={{
                        marginBottom: "10px",
                        marginTop: "-2px",
                      }}
                    />
                    <h5 className="ind-boxhead">Data-driven R&D</h5>
                  </div>
                  <p className="boxtext text-initial">
                    Leverage the capabilities of data with our cloud-driven lab
                    informatics to gain intricate life science insights that
                    drive human-centered research and development (R&D).
                    Harnessing this cloud data will enable you to enhance the
                    governance of your business processes.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4 ind-bb-sg-4">
              <div className="bx1-border instudrie-box">
                <div className="text-initial">
                  <div className="d-flex">
                    <img
                      src="./images/supply-chain.png"
                      className="App-logo-industrie business"
                      alt="logo"
                      width={45}
                      style={{
                        marginBottom: "10px",
                        marginTop: "-2px",
                      }}
                    />
                    <h5 className="ind-boxhead">
                      Manufacturing and supply chain
                    </h5>
                  </div>
                  <p className="boxtext text-initial">
                    By implementing cutting-edge big data analytics solutions in
                    manufacturing and supply chain, we provide comprehensive
                    capabilities to convert raw data into actionable roadmaps.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4 ind-bb-sg-5">
              <div className="bx1-border instudrie-box">
                <div className="text-initial">
                  <div className="d-flex">
                    <img
                      src="./images/decentralized.png"
                      className="App-logo-industrie business"
                      alt="logo"
                      width={45}
                      style={{
                        marginBottom: "10px",
                        marginTop: "-2px",
                      }}
                    />
                    <h5 className="ind-boxhead">
                      Decentralized Clinical Trials
                    </h5>
                  </div>
                  <p className="boxtext text-initial">
                    Step into the future of clinical trials with DataObserve's
                    life sciences cloud. Utilize our human-centric decentralized
                    solutions for pharmaceutical tasks.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4 ind-bb-sg-6">
              <div className="bx1-border instudrie-box">
                <div className="text-initial">
                  <div className="d-flex">
                    <img
                      src="./images/m-devices.png"
                      className="App-logo-industrie business"
                      alt="logo"
                      width={45}
                      style={{
                        marginBottom: "10px",
                        marginTop: "-2px",
                      }}
                    />
                    <h5 className="ind-boxhead">Medical Devices</h5>
                  </div>
                  <p className="boxtext text-initial">
                    DataObserve empowers life science organizations and
                    pharmaceutical labs to enhance their outcomes and digitize
                    their processes using cloud-enabled medical devices.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="cs-div">
        <h1 className="case">Our Case Studies</h1>

        <div
          class="container  mb-3 mt-5 Built-back-colour"
          style={{
            backgroundColor: "#1A4AB9",
            borderRadius: "20px",
          }}
        >
          <div className="right-media-Corner">
            <img
              className="built-corner-image"
              src="./images/right-corner-media.png"
              alt="media"
              width={100}
              height={100}
            />
          </div>

          <div
            class="row overall-built-Corner"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "spacebetween",
            }}
          >
            <div class="col-md-5">
              <img
                style={{ height: "250px", width: "100%" }}
                src="./images/build.png"
                className="card-img"
                alt="..."
              />
            </div>
            <div class="col-md-7 cLOUD-Unified">
              <div class="card-body CLOUD-bODY">
                <h5
                  class="col-md-9 card-title CLouD-BULIT"
                  style={{
                    color: "white",
                    letterSpacing: "0.68px",
                    fontSize: "19px",
                  }}
                >
                  Built A Unified Augmented Analytics
                  <br /> decision intelligence Platform
                </h5>
                <p
                  class="col-md-9 card-text-3"
                  style={{ fontSize: "13px", color: "#fff", opacity: "0.5" }}
                >
                  Learn how we created a self-service, predictive, insights
                  platform driven by an adaptive machine learning engine which
                  helps improve decision-making.
                </p>
                <p class=" col-md-9 card-text" style={{ color: "white" }}>
                  <p style={{ fontSize: 16 }}>
                    Read case study
                    <i
                      class="fa fa-long-arrow-right ml-2"
                      aria-hidden="true"
                    ></i>
                  </p>
                </p>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-around",
                  }}
                >
                  <img
                    src="./images/accede.png"
                    alt=""
                    style={{ width: "60px", height: "20px" }}
                  />
                  <img
                    src="./images/solakhen.png"
                    alt=""
                    style={{ width: "100px" }}
                  />
                  <img
                    src="./images/grbeco.png"
                    alt=""
                    style={{ width: "95px" }}
                  />
                  <img
                    className="srdsystems-cloud"
                    src="./images/srdsystems.png"
                    alt=""
                    style={{ width: "70px" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bles-div">
          <div className="container">
            <div className="management row" aria-live="center">
              <div>
                <p className="mpara">
                  DataObserve constructs FAIR (Findable, Accessible,
                  Interoperable, and Reusable) Data Management Solutions to
                  future-proof the life science industry.
                </p>
                <div className="">
                  <div className="col-md-8">
                    <p className="text-justify guidelines">
                      The FAIR Data Principles serve as essential guidelines for
                      scientific data management and stewardship, emphasizing
                      the importance of making research data findable,
                      accessible, interoperable, and reusable. These principles
                      are instrumental in promoting the widespread and efficient
                      use of data. Additionally, for our customers, the
                      governance, trustworthiness, traceability, and quality of
                      data are paramount, as they play a crucial role in
                      accelerating self-service analytics and artificial
                      intelligence (AI) initiatives.
                    </p>
                  </div>
                </div>
              </div>

              <div style={{ marginTop: "50px" }}>
                <div className="row Industrie-FInd">
                  <div className="col-md-3 text-left">
                    <p className="logo-images">
                      {" "}
                      <img className="searcheye" src="./images/searcheye.png" />
                    </p>
                    <h5 className="ble-s">Findable</h5>
                    <p className="bles-data">
                      Data is characterized by comprehensive metadata and
                      possesses a distinct and enduring identifier.
                    </p>
                  </div>
                  <div className="col-md-3 text-left">
                    <p className="logo-images">
                      {" "}
                      <img className="searcheye" src="./images/amt.png" />
                    </p>
                    <h5 className="ble-s">Accessible</h5>
                    <p className=" bles-data">
                      Data, along with its associated metadata, is
                      comprehensible to both humans and machines and can be
                      accessed through clearly defined protocols.
                    </p>
                  </div>
                  <div className="col-md-3 text-left">
                    <p className="logo-images">
                      {" "}
                      <img
                        className="searcheye"
                        src="./images/Interoperable.png"
                      />
                    </p>
                    <h5 className="ble-s">Interoperable</h5>
                    <p className="bles-data">
                      Data and their accompanying metadata employ formal and
                      accessible knowledge representation methods to ensure
                      their reusability.
                    </p>
                  </div>
                  <div className="col-md-3 text-left">
                    <p className="logo-images">
                      {" "}
                      <img className="searcheye" src="./images/Reusable.png" />
                    </p>
                    <h5 className="ble-s">Reusable</h5>
                    <p className="bles-data">
                      Metadata precisely detail the <br />
                      origin and terms of use for the
                      <br /> data.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* talent as service */}

      <div className="container tasdiv" style={{ marginTop: "60px" }}>
        <div className="talent-div ">
          <div>
            <h1 className="tlnt-heading">Talent as a Service</h1>
            <p className="container col-md-8 tlnt-para">
              Recruit highly skilled employees as needed through a cloud-based
              platform. These hires will not only perform tasks efficiently but
              also contribute to cost savings.
            </p>
          </div>
          <div class="row tlnt-card" style={{ marginTop: "50px" }}>
            <div className="col-md-6">
              <img
                className="tlnt-card-web-img"
                // style={{
                //   width: "80%",
                //   borderRadius: "30px",
                //   marginLeft: "-15px",
                // }}
                src="./images/tlnt-card.png"
              />
            </div>
            <div
              className="col-md-6 eng"
            // style={{ marginTop: "40px", marginLeft: "-100px" }}
            >
              <p className="tlnt-card-para">
                We're introducing a new approach to hiring cloud Engineers. This
                service will help your cloud engineering team to build
                innovative digital transformation solutions.
              </p>
              <h1 className="tlnt-docreators">Meet DOcreators !</h1>

              <div className="tlnt-btn">
                <button className="tlnt-botn">
                  Explore DoCreater{" "}
                  <i class="fa fa-long-arrow-right ml-2" aria-hidden="true"></i>
                </button>
                <div className="dood">
                  <img src="./images/dood.png" className="doodpng" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="lifescience-labimg">
        <div className="lab-img-section">
          <img src="./images/newlabdown.png" alt="#" className="lab-img" />
        </div>

        {/* <div className="lab-data-industries ">
          <div class="card-body industries-bg-pink">
            <p className="doc">
              {" "}
              <span>
                <img src="./images/doc.png" />
              </span>{" "}
              BLOG{" "}
            </p>
            <h5 class="ind-card-title" >
              Big data analytics for the pharmaceutical industry- A big leap towards digital success
            </h5>
            <h6
              class="card-subtitle mb-2 "  >
              Today’s world is data-driven. From your phone, to your laptop,
              to your smart home devices, everyday data is being generated
              in the quintillions. This can be a mess, especially if you run a
              business.
            </h6>
            <p class="readmore">
              <small>
                Read more
                <i class="fa fa-long-arrow-right ghgh" aria-hidden="true"></i>
              </small>
            </p>
          </div>

        </div> */}

<div className="lifescience-pink-wholediv">
  <div className="container">
  <div className="row">
  <div className="col-md-7"></div>
  <div className="col-md-5 lifescience-n-pink">
  <p className="lifescience-doc">
              {" "}
              <span>
                <img src="./images/doc.png" />
              </span>{" "}
              BLOG{" "}
            </p>
            <h5 class="lifescience-card-title" >
              Big data analytics for the pharmaceutical industry- A big leap towards digital success
            </h5>
            <h6
              class="lifescience-subtitle  "  >
              Today’s world is data-driven. From your phone, to your laptop,
              to your smart home devices, everyday data is being generated
              in the quintillions. This can be a mess, especially if you run a
              business.
            </h6>
            <p class="lifescience-readmore">
              <small>
                Read more
                <i class="fa fa-long-arrow-right ghgh" aria-hidden="true"></i>
              </small>
            </p>

  </div>
  </div>
  </div>

</div>
           

      </div>
      <div class="container">
        <h1 className="benfits">
          {" "}
          Digital Transformation Benefits in Life Science
        </h1>
        <p className="container col-md-9 benfits-para">
          DataObserve is the fastest-growing Cloud Transformation & Data
          Analytics company with strong expertise in
         
          Data lake solutions, Data Warehouse Engineering, Data Migration &
          Modernization.
        </p>
        <div class="row">
          <div class="col-md-3 text-center">
            <img className="down-logo" src="./images/mtr.png" />
            <h2 className="percentage">42%</h2>
            <p className="pp-data">
              Faster to Insights in R&D by
              <br />
              Data Democratization
            </p>
          </div>

          <div class="col-md-3 text-center  ">
            <img className="down-logo" src="./images/amt.png" />
            <h2 className="percentage">30%</h2>
            <p className="pp-data">
              Reduce in Drug
              <br />
              Commercialization Cost
            </p>
          </div>

          <div class="col-md-3 text-center ">
            <img className="down-logo" src="./images/timeind.png" />
            <h2 className="percentage">65%</h2>
            <p className="pp-data">
              Time Saved by Digital Clinical
              <br />
              Documentation
            </p>
          </div>

          <div class="col-md-3 text-center">
            <img className="down-logo-1" src="./images/Accelerators.png" />
            <h2 className="percentage">25%</h2>
            <p className="pp-data">
              Efficiency Achieved in Patient
              <br />
              Engagement
            </p>
          </div>
        </div>
      </div>

      {/* !--faq's--! */}

      <div class="card text-center" style={{ border: "0px" }}>
        <div class="card-body faq-class">
          <h5 class="cardsdetails">FAQs</h5>
          <div
            class="accordion"
            id="accordionExample"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "space-around",
            }}
          >
            <div
              class="card"
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.05)",
                color: "white",
                margin: "10px",
                width: "80%",
              }}
            >
              <div
                class="card-header"
                id="headingOne"
                style={{ textAlign: "left" }}
              >
                <h2 class="mb-0">
                  <button
                    class="btn btn-link"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                    style={{
                      color: "white",
                      textDecoration: "none",
                      width: "100%",
                      textAlign: "left",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <p className="faq">
                      What are Data Solutions for Life Sciences, and how do they
                      contribute to innovation?
                    </p>
                    <p
                      style={{
                        margin: "0px",
                        backgroundColor: "rgba(255, 255, 255, 0.05)",
                        borderRadius: "3px",
                        width: "18px",
                        height: "20px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      +
                    </p>
                  </button>
                </h2>
              </div>

              <div
                id="collapseOne"
                class="collapse show"
                aria-labelledby="headingOne"
                data-parent="#accordionExample"
              >
                <div class="card-bodys">
                  Data Solutions for Life Sciences involve leveraging advanced
                  technologies and analytics to harness the power of data in the
                  field of life sciences. These solutions aim to drive
                  innovation by unlocking insights, accelerating research, and
                  improving decision-making processes.
                </div>
              </div>
            </div>
            <div
              class="card"
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.05)",
                color: "white",
                margin: "10px",
                width: "80%",
              }}
            >
              <div
                class="card-header"
                id="headingTwo"
                style={{ textAlign: "left" }}
              >
                <h2 class="mb-0">
                  <button
                    class="btn btn-link collapsed"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                    style={{
                      color: "white",
                      textDecoration: "none",
                      width: "100%",
                      textAlign: "left",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <p className="faq">
                      How do Data Solutions benefit researchers and scientists
                      in the Life Sciences industry?
                    </p>
                    <p
                      style={{
                        margin: "0px",
                        backgroundColor: "rgba(255, 255, 255, 0.05)",
                        borderRadius: "3px",
                        width: "18px",
                        height: "20px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      +
                    </p>
                  </button>
                </h2>
              </div>
              <div
                id="collapseTwo"
                class="collapse"
                aria-labelledby="headingTwo"
                data-parent="#accordionExample"
              >
                <div class="card-bodys">
                  Data Solutions empower researchers and scientists by providing
                  efficient tools for data collection, analysis, and
                  interpretation. This accelerates the pace of research,
                  facilitates collaboration, and enhances the discovery process
                  in areas such as genomics, drug discovery, and personalized
                  medicine.
                </div>
              </div>
            </div>
            <div
              class="card"
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.05)",
                color: "white",
                margin: "10px",
                width: "80%",
              }}
            >
              <div
                class="card-header"
                id="headingThree"
                style={{ textAlign: "left" }}
              >
                <h2 class="mb-0">
                  <button
                    class="btn btn-link collapsed"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                    style={{
                      color: "white",
                      textDecoration: "none",
                      width: "100%",
                      textAlign: "left",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <p className="faq">
                      What specific challenges do Data Solutions for Life
                      Sciences address?
                    </p>
                    <p
                      style={{
                        margin: "0px",
                        backgroundColor: "rgba(255, 255, 255, 0.05)",
                        borderRadius: "3px",
                        width: "18px",
                        height: "20px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      +
                    </p>
                  </button>
                </h2>
              </div>
              <div
                id="collapseThree"
                class="collapse"
                aria-labelledby="headingThree"
                data-parent="#accordionExample"
              >
                <div class="card-bodys">
                  These solutions address challenges related to data management,
                  integration of diverse data sources, scalability, and the need
                  for real-time analytics. By overcoming these hurdles,
                  organizations can streamline their processes and focus on
                  breakthrough innovations.
                </div>
              </div>
            </div>
            <div
              class="card"
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.05)",
                color: "white",
                margin: "10px",
                width: "80%",
              }}
            >
              <div
                class="card-header"
                id="headingFour"
                style={{ textAlign: "left" }}
              >
                <h2 class="mb-0">
                  <button
                    class="btn btn-link collapsed"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseFour"
                    aria-expanded="false"
                    aria-controls="collapseFour"
                    style={{
                      color: "white",
                      textDecoration: "none",
                      width: "100%",
                      textAlign: "left",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <p className="faq">
                      Can Data Solutions for Life Sciences be customized to fit
                      specific research requirements?
                    </p>
                    <p
                      style={{
                        margin: "0px",
                        backgroundColor: "rgba(255, 255, 255, 0.05)",
                        borderRadius: "3px",
                        width: "18px",
                        height: "20px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      +
                    </p>
                  </button>
                </h2>
              </div>
              <div
                id="collapseFour"
                class="collapse"
                aria-labelledby="headingFour"
                data-parent="#accordionExample"
              >
                <div class="card-bodys">
                  Yes, our Data Solutions are highly customizable to meet the
                  unique needs of different research projects in the Life
                  Sciences domain. Whether it's adapting to specific data types,
                  compliance standards, or integration with existing systems, we
                  tailor our solutions accordingly.
                </div>
              </div>
            </div>
            <div
              class="card"
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.05)",
                color: "white",
                margin: "10px",
                width: "80%",
              }}
            >
              <div
                class="card-header"
                id="headingFive"
                style={{ textAlign: "left" }}
              >
                <h2 class="mb-0">
                  <button
                    class="btn btn-link collapsed"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseFive"
                    aria-expanded="false"
                    aria-controls="collapseFive"
                    style={{
                      color: "white",
                      textDecoration: "none",
                      width: "100%",
                      textAlign: "left",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <p className="faq">
                      How do Data Solutions enhance collaboration among
                      researchers and organizations?
                    </p>
                    <p
                      style={{
                        margin: "0px",
                        backgroundColor: "rgba(255, 255, 255, 0.05)",
                        borderRadius: "3px",
                        width: "18px",
                        height: "20px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      +
                    </p>
                  </button>
                </h2>
              </div>
              <div
                id="collapseFive"
                class="collapse"
                aria-labelledby="headingFive"
                data-parent="#accordionExample"
              >
                <div class="card-bodys">
                  Our Data Solutions facilitate seamless collaboration by
                  providing a centralized platform for data sharing,
                  collaboration, and real-time communication. This fosters
                  teamwork and accelerates the pace of research by breaking down
                  silos and promoting knowledge exchange.
                </div>
              </div>
            </div>
            <div
              class="card"
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.05)",
                color: "white",
                margin: "10px",
                width: "80%",
              }}
            >
              <div
                class="card-header"
                id="headingSix"
                style={{ textAlign: "left" }}
              >
                <h2 class="mb-0">
                  <button
                    class="btn btn-link collapsed"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseSix"
                    aria-expanded="false"
                    aria-controls="collapseSix"
                    style={{
                      color: "white",
                      textDecoration: "none",
                      width: "100%",
                      textAlign: "left",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <p className="faq">
                      Are Data Solutions for Life Sciences compliant with
                      industry regulations and standards?
                    </p>
                    <p
                      style={{
                        margin: "0px",
                        backgroundColor: "rgba(255, 255, 255, 0.05)",
                        borderRadius: "3px",
                        width: "18px",
                        height: "20px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      +
                    </p>
                  </button>
                </h2>
              </div>
              <div
                id="collapseSix"
                class="collapse"
                aria-labelledby="headingSix"
                data-parent="#accordionExample"
              >
                <div class="card-bodys">
                  Absolutely. Our Data Solutions adhere to industry-specific
                  regulations and standards, such as HIPAA and GDPR, ensuring
                  the highest levels of data security, privacy, and compliance.
                  This is critical in the life sciences
                </div>
              </div>
            </div>
            <div
              class="card"
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.05)",
                color: "white",
                margin: "10px",
                width: "80%",
              }}
            >
              <div
                class="card-header"
                id="headingSeven"
                style={{ textAlign: "left" }}
              >
                <h2 class="mb-0">
                  <button
                    class="btn btn-link collapsed"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseSeven"
                    aria-expanded="false"
                    aria-controls="collapseSeven"
                    style={{
                      color: "white",
                      textDecoration: "none",
                      width: "100%",
                      textAlign: "left",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <p className="faq">
                      How do Data Solutions contribute to precision medicine and
                      personalized healthcare?
                    </p>
                    <p
                      style={{
                        margin: "0px",
                        backgroundColor: "rgba(255, 255, 255, 0.05)",
                        borderRadius: "3px",
                        width: "18px",
                        height: "20px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      +
                    </p>
                  </button>
                </h2>
              </div>
              <div
                id="collapseSeven"
                class="collapse"
                aria-labelledby="headingSeven"
                data-parent="#accordionExample"
              >
                <div class="card-bodys">
                  By integrating and analyzing diverse datasets, including
                  genomic, clinical, and lifestyle data, our solutions enable
                  the development of personalized treatment plans. This
                  contributes to advancements in precision medicine, allowing
                  for more targeted and effective patient care.
                </div>
              </div>
            </div>
            <div
              class="card"
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.05)",
                color: "white",
                margin: "10px",
                width: "80%",
              }}
            >
              <div
                class="card-header"
                id="headingEight"
                style={{ textAlign: "left" }}
              >
                <h2 class="mb-0">
                  <button
                    class="btn btn-link collapsed"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseEight"
                    aria-expanded="false"
                    aria-controls="collapseEight"
                    style={{
                      color: "white",
                      textDecoration: "none",
                      width: "100%",
                      textAlign: "left",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <p className="faq">
                      Can Data Solutions be integrated with existing laboratory
                      and research management systems?
                    </p>
                    <p
                      style={{
                        margin: "0px",
                        backgroundColor: "rgba(255, 255, 255, 0.05)",
                        borderRadius: "3px",
                        width: "18px",
                        height: "20px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      +
                    </p>
                  </button>
                </h2>
              </div>
              <div
                id="collapseEight"
                class="collapse"
                aria-labelledby="headingEight"
                data-parent="#accordionExample"
              >
                <div class="card-bodys">
                  Yes, our Data Solutions are designed to seamlessly integrate
                  with existing laboratory information management systems (LIMS)
                  and research management systems. This integration ensures a
                  smooth workflow and minimizes disruptions to ongoing research
                  activities.
                </div>
              </div>
            </div>
            <div
              class="card"
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.05)",
                color: "white",
                margin: "10px",
                width: "80%",
              }}
            >
              <div
                class="card-header"
                id="headingNine"
                style={{ textAlign: "left" }}
              >
                <h2 class="mb-0">
                  <button
                    class="btn btn-link collapsed"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseNine"
                    aria-expanded="false"
                    aria-controls="collapseNine"
                    style={{
                      color: "white",
                      textDecoration: "none",
                      width: "100%",
                      textAlign: "left",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <p className="faq">
                      What kind of analytics capabilities do Data Solutions
                      offer for life sciences research?
                    </p>
                    <p
                      style={{
                        margin: "0px",
                        backgroundColor: "rgba(255, 255, 255, 0.05)",
                        borderRadius: "3px",
                        width: "18px",
                        height: "20px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      +
                    </p>
                  </button>
                </h2>
              </div>
              <div
                id="collapseNine"
                class="collapse"
                aria-labelledby="headingNine"
                data-parent="#accordionExample"
              >
                <div class="card-bodys">
                  Our Data Solutions provide a range of analytics capabilities,
                  including predictive analytics, machine learning, and data
                  visualization. These tools empower researchers to derive
                  meaningful insights from large datasets, identify patterns,
                  and make data-driven decisions.
                </div>
              </div>
            </div>
            <div
              class="card"
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.05)",
                color: "white",
                margin: "10px",
                width: "80%",
              }}
            >
              <div
                class="card-header"
                id="headingTen"
                style={{ textAlign: "left" }}
              >
                <h2 class="mb-0">
                  <button
                    class="btn btn-link collapsed"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseTen"
                    aria-expanded="false"
                    aria-controls="collapseTen"
                    style={{
                      color: "white",
                      textDecoration: "none",
                      width: "100%",
                      textAlign: "left",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <p className="faq">
                      How can organizations get started with implementing Data
                      Solutions for Life Sciences?
                    </p>
                    <p
                      style={{
                        margin: "0px",
                        backgroundColor: "rgba(255, 255, 255, 0.05)",
                        borderRadius: "3px",
                        width: "18px",
                        height: "20px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      +
                    </p>
                  </button>
                </h2>
              </div>
              <div
                id="collapseTen"
                class="collapse"
                aria-labelledby="headingTen"
                data-parent="#accordionExample"
              >
                <div class="card-bodys">
                  To get started, organizations can reach out to our team for a
                  consultation. We offer a tailored approach to understand
                  specific needs, assess existing infrastructure, and create a
                  roadmap for implementing data solutions that drive innovation
                  in life sciences.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* !----footer----! */}

      <Footer />
    </div>
  );
};

export default Industries;
