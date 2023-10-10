import React from "react";
import "./Dataeng.css";
// import Faq from "../products/Faq";
import Navbar from "../products/Navbar";
import dataengineer from "../../src/videos/dataenginner.mp4";
import Footer from "../products/Footer";

const Dataeng = () => {
  return (
    <div>
      <Navbar />
      <div className="enterprise">
        <div>
          <video className="data-engineer" autoPlay loop muted>
            <source src={dataengineer} type="video/mp4" />
          </video>
          <div className="container">
            <div
              style={{
                display: "inline-flex",
                minHeight: "1080px",
                flexDirection: "column",
                alignItems: "flex-start",
                marginTop: "115px",
                position: "absolute",
                top: "128px",
                left: "10%",
              }}
            >
              <p
                style={{
                  color: "white",
                  fontSize: "18px",
                  fontStyle: "normal",
                  fontWeight: "600",
                }}
              >
                Data Engineering
              </p>
              <h4
                style={{
                  color: "white",
                  fontSize: "33px",
                  fontStyle: "normal",
                  fontWeight: "700",
                  lineHeight: "43px",
                  paddingRight: "540px",
                }}
              >
                Enable business agility with advanced data engineering services
                that prepare you for the future.
              </h4>
              <button
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
                  style={{
                    color: "#FF4925",
                    fontSize: "14px",
                    fontStyle: "normal",
                    fontWeight: "600",
                    lineHeight: "19px",
                  }}
                >
                  Talk to us now
                </span>
                <i
                  className="fa fa-long-arrow-right ml-3"
                  style={{
                    width: "23px",
                    fontSize: "29px",
                    flexShrink: "0",
                    color: "#FF4925",
                  }}
                  aria-hidden="true"
                ></i>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          marginTop: "30px",
          alignItems: "center",
        }}
      >
        <h4 style={{ textAlign: "center", fontWeight: 700, fontSize: "43px" }}>
          Our Data Engineering Services
        </h4>
        <p style={{ textAlign: "center", marginTop: "10px", width: "755px" }}>
          DataObserve’s data engineering services and analytics solutions are
          designed to grow businesses and help them stand out from the crowd.
          How do we do it? Glad you asked! We begin with thoroughly
          understanding your current business model and identifying optimization
          opportunities. This allows us to create user-friendly data engineering
          solutions to modernize data platforms and streamline data processing
          pipelines.
        </p>
      </div>
      <div className="cloudcards">
        <div class="ccdiv w-100">
          <div className="cloudimgcard">
            <img className="notrepimg" src="/images/dwm.png" alt="" />
            <div className="cloudcard card">
              <h1 className="cloudcardheading">Data Warehouse Migration</h1>
              <p className="cloudcardpara mb-0">
                Harness the potential of the cloud to seamlessly transition your
                data to a high-end, cloud-enabled system capable of generating
                significantly improved insights.
              </p>
            </div>
          </div>
          <div className="cloudimgcard">
            <img className="notrepimg" src="/images/etldp.png" alt="" />
            <div className="cloudcard card">
              <h1 className="cloudcardheading">ELT/ETL Data Processing  </h1>
              <p className="cloudcardpara mb-0">
                Fed up with the burdensome management of legacy data lakes?
                Revolutionize your business with our agile and scalable data
                modernization solutions.
              </p>
            </div>
          </div>
          <div className="cloudimgcard">
            <img className="notrepimg" src="/images/datam.png" alt="" />
            <div className="cloudcard card">
              <h1 className="cloudcardheading">Database Modernization  </h1>
              <p className="cloudcardpara mb-0">
                Frustrated with the complexities of managing legacy data lakes?
                Revitalize your business with our agile and scalable data
                modernization solutions.
              </p>
            </div>
          </div>
          <div className="cloudimgcard">
            <img className="notrepimg" src="/images/dataops.png" alt="" />
            <div className="cloudcard card">
              <h1 className="cloudcardheading">DataOps</h1>
              <p className="cloudcardpara mb-0">
                Enhance processing efficiency and introduce greater agility to
                your data engineering capabilities through DataOps, an automated
                solution that combines the principles of DevOps with data
                management.
              </p>
            </div>
          </div>
          <div className="cloudimgcard">
            <img className="notrepimg" src="/images/diap.png" alt="" />
            <div className="cloudcard card">
              <h1 className="cloudcardheading">
                Data Integration and Pipelines
              </h1>
              <p className="cloudcardpara mb-0">
                Incorporate cloud data pipelines into your business to
                streamline the flow and transformation of your data.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        class="container card mb-3 mt-5 Built-back-colour"
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
              style={{ height: "252px", width: "100%" }}
              src="./images/build.png"
              className="card-img"
              alt="..."
            />
          </div>
          <div class="col-md-7">
            <div class="card-body">
              <h5
                class="card-title"
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
                class="card-text-3"
                style={{ fontSize: "13px", color: "#fff", opacity: "0.5" }}
              >
                Learn how we created a self-service, predictive, insights
                platform driven
                <br /> by an adaptive machine learning engine which helps
                improve decision-
                <br />
                making.
              </p>
              <p class="card-text" style={{ color: "white" }}>
                <p style={{ fontSize: 16 }}>
                  Read case study
                  <i class="fa fa-long-arrow-right ml-2" aria-hidden="true"></i>
                </p>
              </p>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-around",
                  marginLeft: "-20px",
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
                  src="./images/srdsystems.png"
                  alt=""
                  style={{ width: "70px" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <h3 className="cloud-head">Experience the DataObserve Advantage</h3>
          <p style={{ width: "700px", textAlign: "center" }}>
            At DataObserve, as a data engineering firm, we are fueled by
            continuous innovation and relentlessly pursue excellence in crafting
            cloud-compatible solutions.
          </p>
        </div>
        <div className="container mt-3">
          <div className="row box">
            <div
              className="col-md-4"
              style={{
                justifyContent: "center",
                alignItems: "center",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div
                className="text-center box-padding"
                style={{ height: "330px" }}
              >
                <img
                  src="./images/improved1.png"
                  className="App-logo"
                  alt="logo"
                  width={100}
                  style={{ height: "63px", width: "60px" }}
                />
                <h5 className="cloudcardheadings" style={{ marginTop: "18px" }}>
                  Improved Operational Efficiency
                </h5>

                <p className="arrowtext text-center">
                  Opt for cloud-driven data engineering solutions combined with
                  the capabilities of AI technology to attain enhanced
                  efficiency and greater transparency in your supply chain.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div
                className="text-center box-padding"
                style={{ height: "330px" }}
              >
                <img
                  src="./images/drive1.png"
                  className="App-logo"
                  alt="logo"
                  width={100}
                  style={{ height: "79px", width: "59px" }}
                />
                <h5 className="cloudcardheadings">
                  Drive Democratization of Data
                </h5>

                <p className="arrowtext text-center">
                  Utilizing tools such as Amazon Redshift and Azure Synapse, you
                  can swiftly analyze vast volumes of data and make it
                  accessible to your entire workforce and stakeholders.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div
                className="text-center box-padding"
                style={{ height: "330px" }}
              >
                <img
                  src="./images/leve.png"
                  className="App-logo"
                  alt="logo"
                  width={100}
                  style={{ height: "73px", width: "53px" }}
                />
                <h5 className="cloudcardheadings">Leverage More Flexibility</h5>

                <p className="arrowtext text-center">
                  Modify the size of your compute cluster in an instant, scale
                  your service, or allocate any desired amount of computing
                  resources effortlessly by opting for our AWS cloud data
                  engineering services.
                </p>
              </div>
            </div>
          </div>
          <div>
            <div
              class="card mb-3 mt-5"
              style={{
                backgroundColor: "#1A4AB9",
                maxWidth: "100%",
                borderRadius: "20px",
              }}
            >
              <div
                class="row no-gutters"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "spacebetween",
                }}
              >
                <div class="col-md-1"></div>
                <div class="col-md-8">
                  <div class="card-body expertcardbody d-flex">
                    <div>
                      <h5 class="card-title" style={{ color: "white" }}>
                        Revamp Your Cloud Infrastructure with Our Data
                        Engineering Services
                      </h5>
                      <p
                        class="card-text"
                        style={{ color: "white", width: "500px" }}
                      >
                        Attain business agility and flexibility through our
                        technology expertise in cloud and data warehouses. Our
                        team of data engineers is ready to guide you from
                        inception to completion.
                      </p>
                    </div>
                    <div>
                      <button
                        style={{
                          width: "200px",
                          border: "none",
                          height: "55px",
                          margin: "42px",
                          borderRadius: "6px",
                        }}
                      >
                        Talk to us now{" "}
                        <i
                          class="fa fa-long-arrow-right ml-3"
                          aria-hidden="true"
                        ></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h3 className="cloud-head"> What Makes Us Stand Out</h3>
        <p
          className="container"
          style={{ width: "700px", textAlign: "center" }}
        >
          With a wealth of experience in delivering data engineering services
          over the years, we aspire to be a trusted source of data and cloud
          solutions for businesses worldwide. Our team of data engineering
          experts is well-equipped to guide you through every facet of setting
          up data lakehouses, creating data pipelines, and constructing a robust
          ETL process in data engineering. Here are several compelling reasons
          why we are the perfect choice:
        </p>
        <div className="container mt-3">
          <div className="row box">
            <div className="col-md-4">
              <div
                className="text-center box-padding"
                style={{ height: "450px" }}
              >
                <img
                  src="./images/iden.png"
                  className="App-logo"
                  alt="logo"
                  width={100}
                />
                <h5 className="cloudcardheadings">
                  Identify Patterns for Business Growth{" "}
                </h5>

                <p className="arrowtext text-center">
                  From identifying data anomalies to recommending pertinent
                  cloud actions through tools like Power BI and Tableau, we
                  assist you in foreseeing both challenges and opportunities.
                  Harness these insights to revolutionize your business with
                  data-driven transformations powered by the cloud.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div
                className="text-center box-padding"
                style={{ height: "450px" }}
              >
                <img
                  src="./images/getb.png"
                  className="App-logo"
                  alt="logo"
                  width={100}
                />
                <h5 className="cloudcardheadings">Get Better Data Insights</h5>

                <p className="arrowtext text-center">
                  With DataObserve's assistance, you can develop customized
                  algorithms that offer enhanced insights into various facets of
                  your customers' requirements. Leveraging these insights, you
                  can also forecast future trends and proactively prepare for
                  whatever lies ahead.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div
                className="text-center box-padding"
                style={{ height: "450px" }}
              >
                <img
                  src="./images/eff.png"
                  className="App-logo"
                  alt="logo"
                  width={100}
                />
                <h5 className="cloudcardheadings">
                  Efficiency in Data Models 
                </h5>

                <p className="arrowtext text-center">
                  Our team of experienced data engineering consultants and
                  experts will construct CI/CD pipelines tailored to your
                  specific model and ensure their regular upkeep. Are you ready
                  to push your boundaries with our data engineering solutions?
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div
                className="text-center box-padding"
                style={{ height: "450px" }}
              >
                <img
                  src="./images/robust.png"
                  className="App-logo"
                  alt="logo"
                  width={100}
                />
                <h5 className="cloudcardheadings">Robust AWS databases</h5>

                <p className="arrowtext text-center">
                  Our specialization lies in data engineering and database
                  services, including Amazon Dynamo DB and Azure Synapse. These
                  databases facilitate the automation of time-consuming
                  operational tasks, such as patching and backups.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div
                className="text-center box-padding"
                style={{ height: "450px" }}
              >
                <img
                  src="./images/centered.png"
                  className="App-logo"
                  alt="logo"
                  width={100}
                />
                <h5 className="cloudcardheadings">Centered Data Governance</h5>

                <p className="arrowtext text-center">
                  Data governance encompasses all activities related to ensuring
                  a company's data is secure, accurate, and accessible. Our
                  customized data governance systems, coupled with cloud
                  efficiencies, fulfill all these requirements, ensuring the
                  security and accessibility of your data.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div
                className="text-center box-padding"
                style={{ height: "450px" }}
              >
                <img
                  src="./images/endto.png"
                  className="App-logo"
                  alt="logo"
                  width={100}
                />
                <h5 className="cloudcardheadings">End-to-end Support</h5>

                <p className="arrowtext text-center">
                  At DataObserve, as a data engineering consulting firm, we take
                  pride in our team of experienced cloud data scientists who
                  assist you throughout the entire data migration,
                  transformation, and warehousing process.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="card text-center" style={{ border: "0px" }}>
        {/* {/ <div class="card-header">Featured</div> /} */}
        <div class="card-body faq-class">
          <h5 class="card-title" style={{ color: "white" }}>
            FAQs
          </h5>
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
                    <p style={{ margin: "0px" }}>
                      What is Data Engineering as a Service (DEaaS) and how can
                      it benefit my organization?
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
                <div class="card-body">
                  Data Engineering as a Service is a model that provides
                  end-to-end data processing solutions, including data
                  collection, transformation, and storage. It helps
                  organizations harness the power of their data by offering
                  expertise in data engineering without the need for in-house
                  teams. DEaaS streamlines the data pipeline, enhances data
                  quality, and accelerates insights for informed
                  decision-making.
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
                    <p style={{ margin: "0px" }}>
                      How does Data Engineering as a Service support
                      organizations in managing their data infrastructure?
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
                <div class="card-body">
                  DEaaS supports organizations by managing the entire data
                  engineering lifecycle. This includes data ingestion, cleaning,
                  transformation, and storage. Our services are designed to
                  optimize data pipelines, ensure data quality, and provide
                  scalable and cost-effective solutions for managing large
                  volumes of data.
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
                    <p style={{ margin: "0px" }}>
                      What are the key components of your Data Engineering as a
                      Service offering?
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
                <div class="card-body">
                  Our Data Engineering as a Service offering encompasses a range
                  of components, including data integration, ETL (Extract,
                  Transform, Load) processes, data warehousing, and data
                  pipeline orchestration. We tailor our services to meet your
                  specific data engineering needs, ensuring that you have a
                  robust and efficient data infrastructure.
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
                    <p style={{ margin: "0px" }}>
                      How can Data Engineering as a Service enhance the quality
                      of my organization's data?
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
                <div class="card-body">
                  DEaaS enhances data quality by implementing robust data
                  cleansing, validation, and transformation processes. We work
                  to ensure that your data is accurate, consistent, and
                  reliable. By maintaining high data quality standards, your
                  organization can make confident decisions based on trustworthy
                  and meaningful insights.
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
                    <p style={{ margin: "0px" }}>
                      Is Data Engineering as a Service suitable for both
                      small-scale and large-scale data projects?
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
                aria-labelledby="headingFiver"
                data-parent="#accordionExample"
              >
                <div class="card-body">
                  Yes, DEaaS is designed to be flexible and scalable. Whether
                  you have a small-scale data project or need support for
                  large-scale data processing and storage, our services can be
                  tailored to meet your requirements. This scalability ensures
                  that you have the right level of support for your data
                  engineering needs.
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
                    <p style={{ margin: "0px" }}>
                      How does Data Engineering as a Service address data
                      security and compliance?
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
                <div class="card-body">
                  Security and compliance are top priorities in our Data
                  Engineering as a Service approach. We implement
                  industry-standard security measures, including data
                  encryption, access controls, and compliance with data
                  protection regulations. Our team is dedicated to ensuring that
                  your data is handled securely and in accordance with relevant
                  compliance standards.
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
                    <p style={{ margin: "0px" }}>
                      Can Data Engineering as a Service integrate with existing
                      data infrastructure?
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
                <div class="card-body">
                  Absolutely. Our Data Engineering as a Service solutions are
                  designed to seamlessly integrate with your existing data
                  infrastructure. Whether you use on-premises solutions,
                  cloud-based platforms, or a hybrid setup, our team has the
                  expertise to ensure smooth integration with your current
                  systems.
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
                    <p style={{ margin: "0px" }}>
                      How can Data Engineering as a Service accelerate
                      time-to-insights for my organization?
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
                <div class="card-body">
                  DEaaS accelerates time-to-insights by optimizing data
                  processing workflows and streamlining the data pipeline. Our
                  services are geared towards minimizing data processing
                  bottlenecks, enabling you to quickly derive meaningful
                  insights from your data. This acceleration supports informed
                  decision-making and enhances your organization's agility.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Dataeng;
