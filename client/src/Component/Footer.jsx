import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

export default function Footer() {
  const dispatch = useDispatch();
  return (
    <section className="main-footer">
      <footer className="bg-dark-purple text-white">
        <div className="footer-main">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-12">
                <h6>About</h6>
                <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" />
                <p>
                  Kearekisa.co.bw is Botswana's leading classified ads and
                  listing platform that brings Batswana buyers and sellers
                  together in various categories such as cars, property,
                  services, jobs, electronics, etc.
                </p>
              </div>
              <div className="col-lg-2 col-md-12">
                <h6>Our Services</h6>
                <hr
                  className="
            deep-purple
            text-primary
            accent-2
            mb-4
            mt-0
            d-inline-block
            mx-auto
          "
                />
                <ul className="list-unstyled mb-0">
                  <li>
                    <Link
                      to="/contact_us"
                      onClick={() =>
                        dispatch({
                          type: "ActiveNav",
                          data: "Contact Us",
                        })
                      }
                    >
                      Contact Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/about_us"
                      onClick={() =>
                        dispatch({
                          type: "ActiveNav",
                          data: "About Us",
                        })
                      }
                    >
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/privacy_policy"
                      onClick={() =>
                        dispatch({
                          type: "ActiveNav",
                          data: "",
                        })
                      }
                    >
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link to="terms_condition">Terms & Conditions</Link>
                  </li>
                  <li>
                    <Link
                      to="stay_safe"
                      onClick={() =>
                        dispatch({
                          type: "ActiveNav",
                          data: "",
                        })
                      }
                    >
                      Stay Safe
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-12">
                <h6>Contact</h6>
                <hr
                  className="
            deep-purple
            text-primary
            accent-2
            mb-4
            mt-0
            d-inline-block
            mx-auto
          "
                />
                <ul className="list-unstyled mb-0">
                  <li>
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                      }}
                    >
                      <i className="fa fa-home me-3 text-primary" /> New York,
                      NY 10012, US
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                      }}
                    >
                      <i className="fa fa-envelope me-3 text-primary" />
                      info12323@example.com
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                      }}
                    >
                      <i className="fa fa-phone me-3 text-primary" /> + 01 234
                      567 88
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                      }}
                    >
                      <i className="fa fa-print me-3 text-primary" /> + 01 234
                      567 89
                    </a>
                  </li>
                </ul>
                <ul className="list-unstyled list-inline mt-3">
                  <li className="list-inline-item">
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                      }}
                      className="
                btn-floating btn-sm
                rgba-white-slight
                mx-1
                waves-effect waves-light
              "
                    >
                      <i className="fa fa-facebook bg-facebook" />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                      }}
                      className="
                btn-floating btn-sm
                rgba-white-slight
                mx-1
                waves-effect waves-light
              "
                    >
                      <i className="fa fa-twitter bg-info" />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                      }}
                      className="
                btn-floating btn-sm
                rgba-white-slight
                mx-1
                waves-effect waves-light
              "
                    >
                      <i className="fa fa-google-plus bg-danger" />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                      }}
                      className="
                btn-floating btn-sm
                rgba-white-slight
                mx-1
                waves-effect waves-light
              "
                    >
                      <i className="fa fa-linkedin bg-linkedin" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-4 col-md-12">
                <h6>Subscribe</h6>
                <hr
                  className="
            deep-purple
            text-primary
            accent-2
            mb-4
            mt-0
            d-inline-block
            mx-auto
          "
                />
                <div className="clearfix" />
                <div className="input-group w-70">
                  <input
                    type="text"
                    className="form-control br-ts-3 br-bs-3"
                    placeholder="Email"
                  />
                  <div className>
                    <button
                      type="button"
                      className="btn btn-primary br-ts-0 br-bs-0"
                    >
                      Subscribe
                    </button>
                  </div>
                </div>
                <h6 className="mb-0 mt-5">Payments</h6>
                <hr
                  className="
            deep-purple
            text-primary
            accent-2
            mb-2
            mt-3
            d-inline-block
            mx-auto
          "
                />
                <div className="clearfix" />
                <ul className="footer-payments">
                  <li className="ps-0">
                    <a
                      href="javascript:;"
                      onClick={(e) => {
                        e.preventDefault();
                      }}
                    >
                      <i
                        className="fa fa-cc-amex text-muted"
                        aria-hidden="true"
                      />
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:;"
                      onClick={(e) => {
                        e.preventDefault();
                      }}
                    >
                      <i
                        className="fa fa-cc-visa text-muted"
                        aria-hidden="true"
                      />
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:;"
                      onClick={(e) => {
                        e.preventDefault();
                      }}
                    >
                      <i
                        className="fa fa-credit-card-alt text-muted"
                        aria-hidden="true"
                      />
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:;"
                      onClick={(e) => {
                        e.preventDefault();
                      }}
                    >
                      <i
                        className="fa fa-cc-mastercard text-muted"
                        aria-hidden="true"
                      />
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:;"
                      onClick={(e) => {
                        e.preventDefault();
                      }}
                    >
                      <i
                        className="fa fa-cc-paypal text-muted"
                        aria-hidden="true"
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* Back to top */}
      {/* <a href="#top" id="back-to-top" style={{ display: "none" }}>
        <i className="fa fa-rocket" />
      </a> */}
    </section>
  );
}
