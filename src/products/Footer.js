import React, { useEffect } from "react";
import "./Footer.css";
import { Link, Navigate, useNavigate } from "react-router-dom";

function Footer() {
  const Navigate = useNavigate();
  // useEffect(() => {
  //   setTimeout(() => {
  //     const script = document.createElement("script");

  //     script.src =
  //       "https://dataobserve.myfreshworks.com/crm/sales/web_forms/3bb315e5ced066d76d0a5422db2d9724ded4938333d17e75ec4c1192ae934cf4/form.js";
  //     script.async = true;

  //     document.getElementById("footerForm").appendChild(script);
  //   }, 20000);
  // }, []);
  return (
    <div>
      <div className="bg-color">
        <div className="container">
          <div className="row bg-white">
            <div className="col-md-6 rounded">
              <div className="ttuclass">
                <div className="card">
                  <div
                    class="card-body footercardbody"
                    style={{
                      borderTopLeftRadius: "25px",
                      borderTopRightRadius: "25px",
                    }}
                  >
                    <h5 class="card-title title">Talk to Us</h5>
                    {/* {/ <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6> /} */}
                    <p className="card-text question">
                      Got a question? Dont a hesitate to give us a call today or
                      shoot us an email
                    </p>
                    <i class="fa fa-envelope" aria-hidden="true" style={{fontSize:"14px"}}>
                      <span classname="hello" style={{ marginLeft: "10px" ,fontSize:"14px"}}>
                        hello@dataserve.io
                      </span>
                    </i>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div>
               <div>
                <div>
                  <form>
                    <div className="form-group">
                      <label className="required">Full Name</label>
                      <input type="text" className="form-control name" />
                      <label className="required">Work Email</label>
                      <input type="text" className="form-control name" />
                      <label>Contact Number</label>
                      <input type="text" className="form-control name" />
                      
                      <Link to="/contact" className="c-t">
                        <button className="contact-us-2">Contact Us</button>
                      </Link>
                      
                      
                    </div>
                  </form>
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>

        <div class="footer">
          <div className="container">
            <div className="row">
              <div className="col-md-3">
                <div class="col">
                  <h1 className="footer-heading" style={{ color: "#1A4AB9" }}>
                    Company
                  </h1>
                  <ul>
                    <li><a href="./company" style={{color:"white",textDecoration:"none"}}>About Us</a></li>
                    <li><a href="./people" style={{color:"white",textDecoration:"none"}}>People and Careers</a></li>
                  </ul>
                </div>
              </div>
              <div className="col-md-3">
                <div class="col">
                  <h1 className="footer-heading" style={{ color: "#1A4AB9" }}>
                    Services
                  </h1>
                  <ul>
                    <li><a href="./cloud" style={{color:"white",textDecoration:"none"}}>Cloud transformation</a></li>
                    <li><a href="./dataeng" style={{color:"white",textDecoration:"none"}}>Data Engineering</a></li>
                    <li><a href="./databi" style={{color:"white",textDecoration:"none"}}>Data Analytics and BI</a></li>
                    <li><a href="./aiml" style={{color:"white",textDecoration:"none"}}>AI & Machine Learning</a></li>
                    <li><a href="./devops" style={{color:"white",textDecoration:"none"}}>DevOps-as-a-service</a></li>
                    <li><a href="./application" style={{color:"white",textDecoration:"none"}}>Application Modernization</a></li>
                    <li><a href="./talent" style={{color:"white",textDecoration:"none"}}>Talent as a Service</a></li>
                  </ul>
                </div>
              </div>

              <div className="col-md-3">
                <div class="col">
                  <h1 className="footer-heading" style={{ color: "#1A4AB9" }}>
                    Industries
                  </h1>
                  <ul>
                    <li><a href="./industries" style={{color:"white",textDecoration:"none"}}>Life sciences and Pharma</a></li>
                    <li><a href="./media" style={{color:"white",textDecoration:"none"}}>Media & Entertainment</a></li>
                    <li><a href="./gaming" style={{color:"white",textDecoration:"none"}}>Gaming and gambling</a></li>
                  </ul>
                  <h1 className="footer-heading" style={{ color: "#1A4AB9" }}>
                    Products
                  </h1>
                  <ul>
                    <li><a href="./observability" style={{color:"white",textDecoration:"none"}}>
                      DO{" "}
                      <span
                        style={{
                          color: "rgba(255, 255, 255, 0.70)",
                          fontSize: "15px",
                          fontWeight: "700",
                          lineHeight: "22.5px",
                          letterSpacing: "-0.32px",
                        }}
                      >
                        360
                      </span>
                      </a>
                    </li>
                    {/* <li>Health EM</li> */}
                    <li><a href="./datainsights" style={{color:"white",textDecoration:"none"}}>DO Insights</a></li>
                    <li><a href="./datacharts" style={{color:"white",textDecoration:"none"}}>DO Charts</a></li>
                    <li><a href="./datamonitor" style={{color:"white",textDecoration:"none"}}>DO Monitor</a></li>
                    <li><a href="./dataprompt" style={{color:"white",textDecoration:"none"}}>Do Prompt</a></li>


                  </ul>
                </div>
              </div>

              <div className="col-md-3">
                <div class="col">
                  <h1 className="footer-heading" style={{ color: "#1A4AB9" }}>
                    Insights
                  </h1>
                  <ul>
                    <li><a href="./casestudies" style={{color:"white",textDecoration:"none"}}>Case Studies</a></li>
                    <li><a href="./blog" style={{color:"white",textDecoration:"none"}}>Blogs</a></li>
                    <li><a href="./ebooks" style={{color:"white",textDecoration:"none"}}>Ebooks</a></li>
                    <li><a href="#" style={{color:"white",textDecoration:"none"}}>Webinars & Videos</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div class="contain">
            <div class="clearfix"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
