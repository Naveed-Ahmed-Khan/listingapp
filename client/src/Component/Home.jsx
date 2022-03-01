import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { callApi } from "../Utitlies/callAPI";
import Swal from "sweetalert2";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
export default function Home() {
  useEffect(() => {
    getCategoris();
  }, []);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const [categorisData, setCategorisData] = useState([]);
  const [searchField, setSearchField] = useState("");
  const [saveModal, setSaveModal] = useState({
    sendername: "",
    senderemail: "",
    messbody: "",
  });
  const handleInput = (e) => {
    const { value, name } = e.target;
    setSaveModal({
      ...saveModal,
      [name]: value,
    });
  };
  const handlePostMessage = async () => {
    const respone = await callApi("/contactmessage", "post", saveModal);
    if (respone) {
      Swal.fire("Message sent successfully", "", "success");
    }
  };
  const getCategoris = async () => {
    const data = await axios.get(`${process.env.REACT_APP_URL_USER}/category`);
    // setCategorisData(data?.data);
  };
  const handleGlobalSearch = (e) => {
    e.preventDefault();
    dispatch({
      type: "MainSearch",
      data: searchField,
    });
    dispatch({
      type: "ActiveNav",
      data: "Browse Categories",
    });
    navigate("/browse_categories");
  };

  return (
    <React.Fragment>
      {/*Sliders Section*/}
      <section>
        <div
          className="banner-1 cover-image sptb-2 sptb-tab bg-background2"
          data-bs-image-src="../assets/images/banners/newBanner2.jpg"
          style={{
            background:
              'url("../assets/images/banners/newBanner2.jpg") center center',
          }}
        >
          <div className="header-text mb-0">
            <div className="container">
              <div className="text-center text-white mb-7">
                <h1 className="mb-1">Botswana's Marketplace</h1>
              </div>
              <div className="row">
                <div className="col-xl-10 col-lg-12 col-md-12 d-block mx-auto">
                  <div className="search-background bg-transparent">
                    <div className="form row g-0">
                      <div
                        className="
                            form-group
                            col-xl-10 col-lg-9 col-md-12
                            mb-0
                            bg-white
                          "
                      >
                        <input
                          type="text"
                          className="
                              form-control
                              input-lg
                              br-te-md-0 br-be-md-0
                              border-end-0
                            "
                          id="text4"
                          placeholder="Looking for..."
                          onChange={(e) => setSearchField(e.target.value)}
                        />
                      </div>

                      <div className="col-xl-2 col-lg-3 col-md-12 mb-0">
                        <a
                          style={{ backgroundColor: "#fceb42 " }}
                          href="#"
                          className="
                              btn btn-lg btn-block text-dark
                              br-ts-md-0 br-bs-md-0
                            "
                          onClick={handleGlobalSearch}
                        >
                          Search Here
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* /header-text */}
        </div>
      </section>
      {/*Sliders Section*/}
      <section className="categories">
        <div className="container">
          <div
            id="small-categories"
            className="owl-carousel owl-carousel-icons2 owl-loaded owl-drag"
          >
            <div className="owl-stage-outer">
              <div
                className="owl-stage"
                style={{
                  transform: "translate3d(-3603px, 0px, 0px)",
                  transition: "all 0.25s ease 0s",
                  width: "7206px",
                }}
              >
                <div
                  className="owl-item cloned"
                  style={{ width: "275.25px", marginRight: "25px" }}
                >
                  <div className="item">
                    <div className="card mb-0">
                      <div className="card-body">
                        <div className="cat-item text-center">
                          <Link to="browse_categories" />
                          <div className="cat-img">
                            <img
                              src="../assets/images/brand/newLogo1.png"
                              alt="img"
                            />
                          </div>
                          <div className="cat-desc">
                            <h5 className="mb-1">Education</h5>
                            <small className="badge badge-pill badge-primary me-2">
                              46
                            </small>
                            <span className="text-muted">ads are posted</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="owl-item cloned"
                  style={{ width: "275.25px", marginRight: "25px" }}
                >
                  <div className="item">
                    <div className="card mb-0">
                      <div className="card-body">
                        <div className="cat-item text-center">
                          <Link to="browse_categories" />
                          <div className="cat-img">
                            <img
                              src="../assets/images/brand/newLogo1.png"
                              alt="img"
                            />
                          </div>
                          <div className="cat-desc">
                            <h5 className="mb-1">Computer</h5>
                            <small className="badge badge-pill badge-primary me-2">
                              22
                            </small>
                            <span className="text-muted">ads are posted</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="owl-item cloned"
                  style={{ width: "275.25px", marginRight: "25px" }}
                >
                  <div className="item">
                    <div className="card mb-0">
                      <div className="card-body">
                        <div className="cat-item text-center">
                          <Link to="browse_categories" />
                          <div className="cat-img">
                            <img
                              src="../assets/images/brand/newLogo1.png"
                              alt="img"
                            />
                          </div>
                          <div className="cat-desc">
                            <h5 className="mb-1">Construction</h5>
                            <small className="badge badge-pill badge-primary me-2">
                              31
                            </small>
                            <span className="text-muted">ads are posted</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="owl-item cloned"
                  style={{ width: "275.25px", marginRight: "25px" }}
                >
                  <div className="item">
                    <div className="card mb-0">
                      <div className="card-body">
                        <div className="cat-item text-center">
                          <Link to="browse_categories" />
                          <div className="cat-img">
                            <img
                              src="../assets/images/brand/newLogo1.png"
                              alt="img"
                            />
                          </div>
                          <div className="cat-desc">
                            <h5 className="mb-1">Furnitures</h5>
                            <small className="badge badge-pill badge-primary me-2">
                              12
                            </small>
                            <span className="text-muted">ads are posted</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="owl-item cloned"
                  style={{ width: "275.25px", marginRight: "25px" }}
                >
                  <div className="item">
                    <div className="card mb-0">
                      <div className="card-body">
                        <div className="cat-item text-center">
                          <Link to="browse_categories" />
                          <div className="cat-img">
                            <img
                              src="../assets/images/brand/newLogo1.png"
                              alt="img"
                            />
                          </div>
                          <div className="cat-desc">
                            <h5 className="mb-1">Electronics</h5>
                            <small className="badge badge-pill badge-primary me-2">
                              21
                            </small>
                            <span className="text-muted">ads are posted</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="owl-item cloned"
                  style={{ width: "275.25px", marginRight: "25px" }}
                >
                  <div className="item">
                    <div className="card mb-0">
                      <div className="card-body">
                        <div className="cat-item text-center">
                          <Link to="browse_categories" />
                          <div className="cat-img">
                            <img
                              src="../assets/images/brand/newLogo1.png"
                              alt="img"
                            />
                          </div>
                          <div className="cat-desc">
                            <h5 className="mb-1">Health</h5>
                            <small className="badge badge-pill badge-primary me-2">
                              24
                            </small>
                            <span className="text-muted">ads are posted</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="owl-item"
                  style={{ width: "275.25px", marginRight: "25px" }}
                >
                  <div className="item">
                    <div className="card mb-0">
                      <div className="card-body">
                        <div className="cat-item text-center">
                          <Link to="browse_categories" />
                          <div className="cat-img">
                            <img
                              src="../assets/images/brand/newLogo1.png"
                              alt="img"
                            />
                          </div>
                          <div className="cat-desc">
                            <h5 className="mb-1">Real Estate</h5>
                            <small className="badge badge-pill badge-primary me-2">
                              45
                            </small>
                            <span className="text-muted">ads are posted</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="owl-item"
                  style={{ width: "275.25px", marginRight: "25px" }}
                >
                  <div className="item">
                    <div className="card mb-0">
                      <div className="card-body">
                        <div className="cat-item text-center">
                          <Link to="browse_categories" />
                          <div className="cat-img">
                            <img
                              src="../assets/images/brand/newLogo1.png"
                              alt="img"
                            />
                          </div>
                          <div className="cat-desc">
                            <h5 className="mb-1">Clothing</h5>
                            <small className="badge badge-pill badge-primary me-2">
                              32
                            </small>
                            <span className="text-muted">ads are posted</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="owl-item"
                  style={{ width: "275.25px", marginRight: "25px" }}
                >
                  <div className="item">
                    <div className="card mb-0">
                      <div className="card-body">
                        <div className="cat-item text-center">
                          <Link to="browse_categories" />
                          <div className="cat-img">
                            <img
                              src="../assets/images/brand/newLogo1.png"
                              alt="img"
                            />
                          </div>
                          <div className="cat-desc">
                            <h5 className="mb-1">Restaurant</h5>
                            <small className="badge badge-pill badge-primary me-2">
                              19
                            </small>
                            <span className="text-muted">ads are posted</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="owl-item"
                  style={{ width: "275.25px", marginRight: "25px" }}
                >
                  <div className="item">
                    <div className="card mb-0">
                      <div className="card-body">
                        <div className="cat-item text-center">
                          <Link to="browse_categories" />
                          <div className="cat-img text-shadow1">
                            <img
                              src="../assets/images/brand/newLogo1.png"
                              alt="img"
                            />
                          </div>
                          <div className="cat-desc">
                            <h5 className="mb-1">Vehicle</h5>
                            <small className="badge badge-pill badge-primary me-2">
                              25
                            </small>
                            <span className="text-muted">ads are posted</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="owl-item"
                  style={{ width: "275.25px", marginRight: "25px" }}
                >
                  <div className="item">
                    <div className="card mb-0">
                      <div className="card-body">
                        <div className="cat-item text-center">
                          <Link to="browse_categories" />
                          <div className="cat-img">
                            <img
                              src="../assets/images/brand/newLogo1.png"
                              alt="img"
                            />
                          </div>
                          <div className="cat-desc">
                            <h5 className="mb-1">Services</h5>
                            <small className="badge badge-pill badge-primary me-2">
                              23
                            </small>
                            <span className="text-muted">ads are posted</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="owl-item"
                  style={{ width: "275.25px", marginRight: "25px" }}
                >
                  <div className="item">
                    <div className="card mb-0">
                      <div className="card-body">
                        <div className="cat-item text-center">
                          <Link to="browse_categories" />
                          <div className="cat-img">
                            <img
                              src="../assets/images/brand/newLogo1.png"
                              alt="img"
                            />
                          </div>
                          <div className="cat-desc">
                            <h5 className="mb-1">Beauty</h5>
                            <small className="badge badge-pill badge-primary me-2">
                              52
                            </small>
                            <span className="text-muted">ads are posted</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="owl-item active"
                  style={{ width: "275.25px", marginRight: "25px" }}
                >
                  <div className="item">
                    <div className="card mb-0">
                      <div className="card-body">
                        <div className="cat-item text-center">
                          <Link to="browse_categories" />
                          <div className="cat-img">
                            <img
                              src="../assets/images/brand/newLogo1.png"
                              alt="img"
                            />
                          </div>
                          <div className="cat-desc">
                            <h5 className="mb-1">Education</h5>
                            <small className="badge badge-pill badge-primary me-2">
                              46
                            </small>
                            <span className="text-muted">ads are posted</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="owl-item active"
                  style={{ width: "275.25px", marginRight: "25px" }}
                >
                  <div className="item">
                    <div className="card mb-0">
                      <div className="card-body">
                        <div className="cat-item text-center">
                          <Link to="browse_categories" />
                          <div className="cat-img">
                            <img
                              src="../assets/images/brand/newLogo1.png"
                              alt="img"
                            />
                          </div>
                          <div className="cat-desc">
                            <h5 className="mb-1">Computer</h5>
                            <small className="badge badge-pill badge-primary me-2">
                              22
                            </small>
                            <span className="text-muted">ads are posted</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="owl-item active"
                  style={{ width: "275.25px", marginRight: "25px" }}
                >
                  <div className="item">
                    <div className="card mb-0">
                      <div className="card-body">
                        <div className="cat-item text-center">
                          <Link to="browse_categories" />
                          <div className="cat-img">
                            <img
                              src="../assets/images/brand/newLogo1.png"
                              alt="img"
                            />
                          </div>
                          <div className="cat-desc">
                            <h5 className="mb-1">Construction</h5>
                            <small className="badge badge-pill badge-primary me-2">
                              31
                            </small>
                            <span className="text-muted">ads are posted</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="owl-item active"
                  style={{ width: "275.25px", marginRight: "25px" }}
                >
                  <div className="item">
                    <div className="card mb-0">
                      <div className="card-body">
                        <div className="cat-item text-center">
                          <Link to="browse_categories" />
                          <div className="cat-img">
                            <img
                              src="../assets/images/brand/newLogo1.png"
                              alt="img"
                            />
                          </div>
                          <div className="cat-desc">
                            <h5 className="mb-1">Furnitures</h5>
                            <small className="badge badge-pill badge-primary me-2">
                              12
                            </small>
                            <span className="text-muted">ads are posted</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="owl-item"
                  style={{ width: "275.25px", marginRight: "25px" }}
                >
                  <div className="item">
                    <div className="card mb-0">
                      <div className="card-body">
                        <div className="cat-item text-center">
                          <Link to="browse_categories" />
                          <div className="cat-img">
                            <img
                              src="../assets/images/brand/newLogo1.png"
                              alt="img"
                            />
                          </div>
                          <div className="cat-desc">
                            <h5 className="mb-1">Electronics</h5>
                            <small className="badge badge-pill badge-primary me-2">
                              21
                            </small>
                            <span className="text-muted">ads are posted</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="owl-item"
                  style={{ width: "275.25px", marginRight: "25px" }}
                >
                  <div className="item">
                    <div className="card mb-0">
                      <div className="card-body">
                        <div className="cat-item text-center">
                          <Link to="browse_categories" />
                          <div className="cat-img">
                            <img
                              src="../assets/images/brand/newLogo1.png"
                              alt="img"
                            />
                          </div>
                          <div className="cat-desc">
                            <h5 className="mb-1">Health</h5>
                            <small className="badge badge-pill badge-primary me-2">
                              24
                            </small>
                            <span className="text-muted">ads are posted</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="owl-item cloned"
                  style={{ width: "275.25px", marginRight: "25px" }}
                >
                  <div className="item">
                    <div className="card mb-0">
                      <div className="card-body">
                        <div className="cat-item text-center">
                          <Link to="browse_categories" />
                          <div className="cat-img">
                            <img
                              src="../assets/images/brand/newLogo1.png"
                              alt="img"
                            />
                          </div>
                          <div className="cat-desc">
                            <h5 className="mb-1">Real Estate</h5>
                            <small className="badge badge-pill badge-primary me-2">
                              45
                            </small>
                            <span className="text-muted">ads are posted</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="owl-item cloned"
                  style={{ width: "275.25px", marginRight: "25px" }}
                >
                  <div className="item">
                    <div className="card mb-0">
                      <div className="card-body">
                        <div className="cat-item text-center">
                          <Link to="browse_categories" />
                          <div className="cat-img">
                            <img
                              src="../assets/images/brand/newLogo1.png"
                              alt="img"
                            />
                          </div>
                          <div className="cat-desc">
                            <h5 className="mb-1">Clothing</h5>
                            <small className="badge badge-pill badge-primary me-2">
                              32
                            </small>
                            <span className="text-muted">ads are posted</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="owl-item cloned"
                  style={{ width: "275.25px", marginRight: "25px" }}
                >
                  <div className="item">
                    <div className="card mb-0">
                      <div className="card-body">
                        <div className="cat-item text-center">
                          <Link to="browse_categories" />
                          <div className="cat-img">
                            <img
                              src="../assets/images/brand/newLogo1.png"
                              alt="img"
                            />
                          </div>
                          <div className="cat-desc">
                            <h5 className="mb-1">Restaurant</h5>
                            <small className="badge badge-pill badge-primary me-2">
                              19
                            </small>
                            <span className="text-muted">ads are posted</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="owl-item cloned"
                  style={{ width: "275.25px", marginRight: "25px" }}
                >
                  <div className="item">
                    <div className="card mb-0">
                      <div className="card-body">
                        <div className="cat-item text-center">
                          <Link to="browse_categories" />
                          <div className="cat-img text-shadow1">
                            <img
                              src="../assets/images/brand/newLogo1.png"
                              alt="img"
                            />
                          </div>
                          <div className="cat-desc">
                            <h5 className="mb-1">Vehicle</h5>
                            <small className="badge badge-pill badge-primary me-2">
                              25
                            </small>
                            <span className="text-muted">ads are posted</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="owl-item cloned"
                  style={{ width: "275.25px", marginRight: "25px" }}
                >
                  <div className="item">
                    <div className="card mb-0">
                      <div className="card-body">
                        <div className="cat-item text-center">
                          <Link to="browse_categories" />
                          <div className="cat-img">
                            <img
                              src="../assets/images/brand/newLogo1.png"
                              alt="img"
                            />
                          </div>
                          <div className="cat-desc">
                            <h5 className="mb-1">Services</h5>
                            <small className="badge badge-pill badge-primary me-2">
                              23
                            </small>
                            <span className="text-muted">ads are posted</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="owl-item cloned"
                  style={{ width: "275.25px", marginRight: "25px" }}
                >
                  <div className="item">
                    <div className="card mb-0">
                      <div className="card-body">
                        <div className="cat-item text-center">
                          <Link to="browse_categories" />
                          <div className="cat-img">
                            <img
                              src="../assets/images/brand/newLogo1.png"
                              alt="img"
                            />
                          </div>
                          <div className="cat-desc">
                            <h5 className="mb-1">Beauty</h5>
                            <small className="badge badge-pill badge-primary me-2">
                              52
                            </small>
                            <span className="text-muted">ads are posted</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="owl-nav">
              <button type="button" role="presentation" className="owl-prev">
                <span aria-label="Previous">‹</span>
              </button>
              <button type="button" role="presentation" className="owl-next">
                <span aria-label="Next">›</span>
              </button>
            </div>
            <div className="owl-dots disabled" />
          </div>
        </div>
      </section>
      {/*Featured Ads*/}
      <section className="sptb bg-patterns">
        <div className="container">
          <div className="section-title center-block text-center">
            <h2>Featured Ads</h2>
            <p>
              Mauris ut cursus nunc. Morbi eleifend, ligula at consectetur
              vehicula
            </p>
          </div>
          <div
            id="myCarousel2"
            className="owl-carousel owl-carousel-icons2 owl-loaded owl-drag"
          >
            {/* Wrapper for carousel items */}
            <div className="owl-stage-outer">
              <div
                className="owl-stage"
                style={{
                  transform: "translate3d(-1201px, 0px, 0px)",
                  transition: "all 0.25s ease 0s",
                  width: "3904px",
                }}
              >
                <div
                  className="owl-item cloned"
                  style={{ width: "275.25px", marginRight: "25px" }}
                >
                  <div className="item">
                    <div className="card mb-0">
                      <div className="arrow-ribbon bg-primary">sale</div>
                      <div className="item-card7-imgs">
                        <a
                          href="classified.html"
                          onClick={(e) => {
                            e.preventDefault();
                          }}
                        />
                        <img
                          src="../assets/images/products/products/h3.jpg"
                          alt="img"
                          className="cover-image"
                        />
                      </div>
                      <div className="item-card7-overlaytext">
                        <a
                          href="classified.html"
                          onClick={(e) => {
                            e.preventDefault();
                          }}
                          className="text-white"
                        >
                          {" "}
                          RealEstate
                        </a>
                        <h4 className="mb-0">$752.99</h4>
                      </div>
                      <div className="card-body">
                        <div className="item-card7-desc">
                          <div className="item-card7-text">
                            <a
                              href="classified.html"
                              onClick={(e) => {
                                e.preventDefault();
                              }}
                              className="text-dark"
                            >
                              <h4 className>2Bk Deluxe Flat</h4>
                            </a>
                          </div>
                          <ul className="item-cards7-ic mb-0">
                            {/* <li>
                              <a href="#">
                                <span className="text-muted">
                                  <i className="icon icon-eye me-1" /> 22 Views
                                </span>
                              </a>
                            </li> */}
                            <li>
                              <a
                                href="#"
                                onClick={(e) => {
                                  e.preventDefault();
                                }}
                                className="icons"
                              >
                                <i className="icon icon-location-pin text-muted me-1" />
                                USA
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                onClick={(e) => {
                                  e.preventDefault();
                                }}
                                className="icons"
                              >
                                <i className="icon icon-event text-muted me-1" />{" "}
                                5 hours ago
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                onClick={(e) => {
                                  e.preventDefault();
                                }}
                                className="icons"
                              >
                                <i className="icon icon-phone text-muted me-1" />{" "}
                                14 675 65430
                              </a>
                            </li>
                          </ul>
                          <p className="mb-0">
                            Omnis iste natus error sit dolore dg voluptatem
                            accusantium
                          </p>
                        </div>
                      </div>
                      <div className="card-footer">
                        <div className="footerimg d-flex mt-0 mb-0">
                          <div className="d-flex footerimg-l mb-0">
                            <img
                              src="../assets/images/faces/male/17.jpg"
                              alt="image"
                              className="avatar brround me-2"
                            />
                            <h5 className="time-title text-muted p-0 leading-normal mt-2 mb-0">
                              Christopher
                              <i
                                className="icon icon-check text-success fs-12 ms-1"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                title
                                data-bs-original-title="verified"
                                aria-label="verified"
                              />
                            </h5>
                          </div>
                          <div className="mt-2 footerimg-r ms-auto">
                            <a
                              href="#"
                              className="text-muted"
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title
                              data-bs-original-title="Add Wishlist"
                              aria-label="Add Wishlist"
                            >
                              <i className="fa fa-heart" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="owl-item cloned"
                  style={{ width: "275.25px", marginRight: "25px" }}
                >
                  <div className="item">
                    <div className="card mb-0">
                      <div className="arrow-ribbon bg-purple">sale</div>
                      <div className="item-card7-imgs">
                        <a
                          href="classified.html"
                          onClick={(e) => {
                            e.preventDefault();
                          }}
                        />
                        <img
                          src="../assets/images/products/products/v4.jpg"
                          alt="img"
                          className="cover-image"
                        />
                      </div>
                      <div className="item-card7-overlaytext">
                        <a
                          href="classified.html"
                          onClick={(e) => {
                            e.preventDefault();
                          }}
                          className="text-white"
                        >
                          {" "}
                          Vehicle
                        </a>
                        <h4 className="mb-0">$786.00</h4>
                      </div>
                      <div className="card-body">
                        <div className="item-card7-desc">
                          <div className="item-card7-text">
                            <a
                              href="classified.html"
                              onClick={(e) => {
                                e.preventDefault();
                              }}
                              className="text-dark"
                            >
                              <h4 className>Gittbo AutoMobiles</h4>
                            </a>
                          </div>
                          <ul className="item-cards7-ic mb-0">
                            {/* <li>
                              <a href="#">
                                <span className="text-muted">
                                  <i className="icon icon-eye me-1" /> 22 Views
                                </span>
                              </a>
                            </li> */}
                            <li>
                              <a
                                href="#"
                                onClick={(e) => {
                                  e.preventDefault();
                                }}
                                className="icons"
                              >
                                <i className="icon icon-location-pin text-muted me-1" />
                                USA
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                onClick={(e) => {
                                  e.preventDefault();
                                }}
                                className="icons"
                              >
                                <i className="icon icon-event text-muted me-1" />{" "}
                                5 hours ago
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                onClick={(e) => {
                                  e.preventDefault();
                                }}
                                className="icons"
                              >
                                <i className="icon icon-phone text-muted me-1" />{" "}
                                14 675 65430
                              </a>
                            </li>
                          </ul>
                          <p className="mb-0">
                            Omnis iste natus error sit dolore dg voluptatem
                            accusantium
                          </p>
                        </div>
                      </div>
                      <div className="card-footer">
                        <div className="footerimg d-flex mt-0 mb-0">
                          <div className="d-flex footerimg-l mb-0">
                            <img
                              src="../assets/images/faces/male/18.jpg"
                              alt="image"
                              className="avatar brround me-2"
                            />
                            <h5 className="time-title text-muted p-0 leading-normal mt-2 mb-0">
                              Wendy Peake
                              <i
                                className="icon icon-check text-success fs-12 ms-1"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                title
                                data-bs-original-title="verified"
                                aria-label="verified"
                              />
                            </h5>
                          </div>
                          <div className="mt-2 footerimg-r ms-auto">
                            <a
                              href="#"
                              className="text-muted"
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title
                              data-bs-original-title="Add Wishlist"
                              aria-label="Add Wishlist"
                            >
                              <i className="fa fa-heart" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="owl-item cloned"
                  style={{ width: "275.25px", marginRight: "25px" }}
                >
                  <div className="item">
                    <div className="card mb-0">
                      <div className="arrow-ribbon bg-success">Open</div>
                      <div className="item-card7-imgs">
                        <a
                          href="classified.html"
                          onClick={(e) => {
                            e.preventDefault();
                          }}
                        />
                        <img
                          src="../assets/images/products/products/f2.jpg"
                          alt="img"
                          className="cover-image"
                        />
                      </div>
                      <div className="item-card7-overlaytext">
                        <a
                          href="classified.html"
                          onClick={(e) => {
                            e.preventDefault();
                          }}
                          className="text-white"
                        >
                          {" "}
                          Restaurant
                        </a>
                        <h4 className="fs-20 mb-0">$86.00</h4>
                      </div>
                      <div className="card-body">
                        <div className="item-card7-desc">
                          <div className="item-card7-text">
                            <a
                              href="classified.html"
                              onClick={(e) => {
                                e.preventDefault();
                              }}
                              className="text-dark"
                            >
                              <h4 className>Chinese Restaurant</h4>
                            </a>
                          </div>
                          <ul className="item-cards7-ic mb-0">
                            {/* <li>
                              <a href="#">
                                <span className="text-muted">
                                  <i className="icon icon-eye me-1" /> 12 Views
                                </span>
                              </a>
                            </li> */}
                            <li>
                              <a
                                href="#"
                                onClick={(e) => {
                                  e.preventDefault();
                                }}
                                className="icons"
                              >
                                <i className="icon icon-location-pin text-muted me-1" />
                                UK
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                onClick={(e) => {
                                  e.preventDefault();
                                }}
                                className="icons"
                              >
                                <i className="icon icon-event text-muted me-1" />{" "}
                                1 hours ago
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                onClick={(e) => {
                                  e.preventDefault();
                                }}
                                className="icons"
                              >
                                <i className="icon icon-phone text-muted me-1" />{" "}
                                14 675 65430
                              </a>
                            </li>
                          </ul>
                          <p className="mb-0">
                            Omnis iste natus error sit dolore dg voluptatem
                            accusantium
                          </p>
                        </div>
                      </div>
                      <div className="card-footer">
                        <div className="footerimg d-flex mt-0 mb-0">
                          <div className="d-flex footerimg-l mb-0">
                            <img
                              src="../assets/images/faces/female/12.jpg"
                              alt="image"
                              className="avatar brround me-2"
                            />
                            <h5 className="time-title text-muted p-0 leading-normal mt-2 mb-0">
                              Wendy Peake
                              <i
                                className="icon icon-check text-success fs-12 ms-1"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                title
                                data-bs-original-title="verified"
                                aria-label="verified"
                              />
                            </h5>
                          </div>
                          <div className="mt-2 footerimg-r ms-auto">
                            <a
                              href="#"
                              className="text-pink"
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title
                              data-bs-original-title="Remove from Wishlist"
                              aria-label="Remove from Wishlist"
                            >
                              <i className="fa fa-heart" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="owl-item cloned"
                  style={{ width: "275.25px", marginRight: "25px" }}
                >
                  <div className="item">
                    <div className="card mb-0">
                      <div className="arrow-ribbon bg-secondary">sale</div>
                      <div className="item-card7-imgs">
                        <a
                          href="classified.html"
                          onClick={(e) => {
                            e.preventDefault();
                          }}
                        />
                        <img
                          src="../assets/images/products/products/j3.jpg"
                          alt="img"
                          className="cover-image"
                        />
                      </div>
                      <div className="item-card7-overlaytext">
                        <a
                          href="classified.html"
                          onClick={(e) => {
                            e.preventDefault();
                          }}
                          className="text-white"
                        >
                          {" "}
                          Beauty
                        </a>
                        <h4 className="font-weight-semibold mb-0">$65.00</h4>
                      </div>
                      <div className="card-body">
                        <div className="item-card7-desc">
                          <div className="item-card7-text d-flex">
                            <a
                              href="classified.html"
                              onClick={(e) => {
                                e.preventDefault();
                              }}
                              className="text-dark"
                            >
                              <h4 className>FrogeBeauty &amp; Spa</h4>
                            </a>
                          </div>
                          <ul className="item-cards7-ic mb-0">
                            {/* <li>
                              <a href="#">
                                <span className="text-muted">
                                  <i className="icon icon-eye me-1" /> 22 Views
                                </span>
                              </a>
                            </li> */}
                            <li>
                              <a
                                href="#"
                                onClick={(e) => {
                                  e.preventDefault();
                                }}
                                className="icons"
                              >
                                <i className="icon icon-location-pin text-muted me-1" />
                                USA
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                onClick={(e) => {
                                  e.preventDefault();
                                }}
                                className="icons"
                              >
                                <i className="icon icon-event text-muted me-1" />{" "}
                                5 hours ago
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                onClick={(e) => {
                                  e.preventDefault();
                                }}
                                className="icons"
                              >
                                <i className="icon icon-phone text-muted me-1" />{" "}
                                14 675 65430
                              </a>
                            </li>
                          </ul>
                          <p className="mb-0">
                            Omnis iste natus error sit dolore dg voluptatem
                            accusantium
                          </p>
                        </div>
                      </div>
                      <div className="card-footer">
                        <div className="footerimg d-flex mt-0 mb-0">
                          <div className="d-flex footerimg-l mb-0">
                            <img
                              src="../assets/images/faces/female/19.jpg"
                              alt="image"
                              className="avatar brround me-2"
                            />
                            <h5 className="time-title text-muted p-0 leading-normal mt-2 mb-0">
                              Elizabeth
                              <i
                                className="icon icon-check text-success fs-12 ms-1"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                title
                                data-bs-original-title="verified"
                                aria-label="verified"
                              />
                            </h5>
                          </div>
                          <div className="mt-2 footerimg-r ms-auto">
                            <a
                              href="classified.html"
                              onClick={(e) => {
                                e.preventDefault();
                              }}
                              className="text-muted"
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title
                              data-bs-original-title="Add Wishlist"
                              aria-label="Add Wishlist"
                            >
                              <i className="fa fa-heart" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="owl-item active"
                  style={{ width: "275.25px", marginRight: "25px" }}
                >
                  <div className="item">
                    <div className="card mb-0">
                      <div className="arrow-ribbon bg-danger">sale</div>
                      <div className="item-card7-imgs">
                        <a
                          href="classified.html"
                          onClick={(e) => {
                            e.preventDefault();
                          }}
                        />
                        <img
                          src="../assets/images/products/products/b3.jpg"
                          alt="img"
                          className="cover-image"
                        />
                      </div>
                      <div className="item-card7-overlaytext">
                        <a
                          href="classified.html"
                          onClick={(e) => {
                            e.preventDefault();
                          }}
                          className="text-white"
                        >
                          {" "}
                          Beauty &amp; Spa{" "}
                        </a>
                        <h4 className="mb-0">$398.99</h4>
                      </div>
                      <div className="card-body">
                        <div className="item-card7-desc">
                          <div className="item-card7-text">
                            <a
                              href="classified.html"
                              onClick={(e) => {
                                e.preventDefault();
                              }}
                              className="text-dark"
                            >
                              <h4 className>Golik Beauty &amp; Spa</h4>
                            </a>
                          </div>
                          <ul className="item-cards7-ic mb-0">
                            {/* <li>
                              <a href="#">
                                <span className="text-muted">
                                  <i className="icon icon-eye me-1" /> 22 Views
                                </span>
                              </a>
                            </li> */}
                            <li>
                              <a
                                href="#"
                                onClick={(e) => {
                                  e.preventDefault();
                                }}
                                className="icons"
                              >
                                <i className="icon icon-location-pin text-muted me-1" />
                                USA
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                onClick={(e) => {
                                  e.preventDefault();
                                }}
                                className="icons"
                              >
                                <i className="icon icon-event text-muted me-1" />{" "}
                                5 hours ago
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                onClick={(e) => {
                                  e.preventDefault();
                                }}
                                className="icons"
                              >
                                <i className="icon icon-phone text-muted me-1" />{" "}
                                14 675 65430
                              </a>
                            </li>
                          </ul>
                          <p className="mb-0">
                            Omnis iste natus error sit dolore dg voluptatem
                            accusantium
                          </p>
                        </div>
                      </div>
                      <div className="card-footer">
                        <div className="footerimg d-flex mt-0 mb-0">
                          <div className="d-flex footerimg-l mb-0">
                            <img
                              src="../assets/images/faces/female/17.jpg"
                              alt="image"
                              className="avatar brround me-2"
                            />
                            <h5 className="time-title text-muted p-0 leading-normal mt-2 mb-0">
                              Victoria
                              <i
                                className="icon icon-check text-success fs-12 ms-1"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                title
                                data-bs-original-title="verified"
                                aria-label="verified"
                              />
                            </h5>
                          </div>
                          <div className="mt-2 footerimg-r ms-auto">
                            <a
                              href="#"
                              className="text-pink"
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title
                              data-bs-original-title="Remove from Wishlist"
                              aria-label="Remove from Wishlist"
                            >
                              <i className="fa fa-heart" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="owl-item active"
                  style={{ width: "275.25px", marginRight: "25px" }}
                >
                  <div className="item">
                    <div className="card mb-0">
                      <div className="arrow-ribbon bg-primary">sale</div>
                      <div className="item-card7-imgs">
                        <a
                          href="classified.html"
                          onClick={(e) => {
                            e.preventDefault();
                          }}
                        />
                        <img
                          src="../assets/images/products/products/h3.jpg"
                          alt="img"
                          className="cover-image"
                        />
                      </div>
                      <div className="item-card7-overlaytext">
                        <a
                          href="classified.html"
                          onClick={(e) => {
                            e.preventDefault();
                          }}
                          className="text-white"
                        >
                          {" "}
                          RealEstate
                        </a>
                        <h4 className="mb-0">$752.99</h4>
                      </div>
                      <div className="card-body">
                        <div className="item-card7-desc">
                          <div className="item-card7-text">
                            <a
                              href="classified.html"
                              onClick={(e) => {
                                e.preventDefault();
                              }}
                              className="text-dark"
                            >
                              <h4 className>2Bk Deluxe Flat</h4>
                            </a>
                          </div>
                          <ul className="item-cards7-ic mb-0">
                            {/* <li>
                              <a href="#">
                                <span className="text-muted">
                                  <i className="icon icon-eye me-1" /> 22 Views
                                </span>
                              </a>
                            </li> */}
                            <li>
                              <a
                                href="#"
                                onClick={(e) => {
                                  e.preventDefault();
                                }}
                                className="icons"
                              >
                                <i className="icon icon-location-pin text-muted me-1" />
                                USA
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                onClick={(e) => {
                                  e.preventDefault();
                                }}
                                className="icons"
                              >
                                <i className="icon icon-event text-muted me-1" />{" "}
                                5 hours ago
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                onClick={(e) => {
                                  e.preventDefault();
                                }}
                                className="icons"
                              >
                                <i className="icon icon-phone text-muted me-1" />{" "}
                                14 675 65430
                              </a>
                            </li>
                          </ul>
                          <p className="mb-0">
                            Omnis iste natus error sit dolore dg voluptatem
                            accusantium
                          </p>
                        </div>
                      </div>
                      <div className="card-footer">
                        <div className="footerimg d-flex mt-0 mb-0">
                          <div className="d-flex footerimg-l mb-0">
                            <img
                              src="../assets/images/faces/male/17.jpg"
                              alt="image"
                              className="avatar brround me-2"
                            />
                            <h5 className="time-title text-muted p-0 leading-normal mt-2 mb-0">
                              Christopher
                              <i
                                className="icon icon-check text-success fs-12 ms-1"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                title
                                data-bs-original-title="verified"
                                aria-label="verified"
                              />
                            </h5>
                          </div>
                          <div className="mt-2 footerimg-r ms-auto">
                            <a
                              href="#"
                              className="text-muted"
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title
                              data-bs-original-title="Add Wishlist"
                              aria-label="Add Wishlist"
                            >
                              <i className="fa fa-heart" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="owl-item active"
                  style={{ width: "275.25px", marginRight: "25px" }}
                >
                  <div className="item">
                    <div className="card mb-0">
                      <div className="arrow-ribbon bg-purple">sale</div>
                      <div className="item-card7-imgs">
                        <a
                          href="classified.html"
                          onClick={(e) => {
                            e.preventDefault();
                          }}
                        />
                        <img
                          src="../assets/images/products/products/v4.jpg"
                          alt="img"
                          className="cover-image"
                        />
                      </div>
                      <div className="item-card7-overlaytext">
                        <a
                          href="classified.html"
                          onClick={(e) => {
                            e.preventDefault();
                          }}
                          className="text-white"
                        >
                          {" "}
                          Vehicle
                        </a>
                        <h4 className="mb-0">$786.00</h4>
                      </div>
                      <div className="card-body">
                        <div className="item-card7-desc">
                          <div className="item-card7-text">
                            <a
                              href="classified.html"
                              onClick={(e) => {
                                e.preventDefault();
                              }}
                              className="text-dark"
                            >
                              <h4 className>Gittbo AutoMobiles</h4>
                            </a>
                          </div>
                          <ul className="item-cards7-ic mb-0">
                            {/* <li>
                              <a href="#">
                                <span className="text-muted">
                                  <i className="icon icon-eye me-1" /> 22 Views
                                </span>
                              </a>
                            </li> */}
                            <li>
                              <a
                                href="#"
                                onClick={(e) => {
                                  e.preventDefault();
                                }}
                                className="icons"
                              >
                                <i className="icon icon-location-pin text-muted me-1" />
                                USA
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                onClick={(e) => {
                                  e.preventDefault();
                                }}
                                className="icons"
                              >
                                <i className="icon icon-event text-muted me-1" />{" "}
                                5 hours ago
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                onClick={(e) => {
                                  e.preventDefault();
                                }}
                                className="icons"
                              >
                                <i className="icon icon-phone text-muted me-1" />{" "}
                                14 675 65430
                              </a>
                            </li>
                          </ul>
                          <p className="mb-0">
                            Omnis iste natus error sit dolore dg voluptatem
                            accusantium
                          </p>
                        </div>
                      </div>
                      <div className="card-footer">
                        <div className="footerimg d-flex mt-0 mb-0">
                          <div className="d-flex footerimg-l mb-0">
                            <img
                              src="../assets/images/faces/male/18.jpg"
                              alt="image"
                              className="avatar brround me-2"
                            />
                            <h5 className="time-title text-muted p-0 leading-normal mt-2 mb-0">
                              Wendy Peake
                              <i
                                className="icon icon-check text-success fs-12 ms-1"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                title
                                data-bs-original-title="verified"
                                aria-label="verified"
                              />
                            </h5>
                          </div>
                          <div className="mt-2 footerimg-r ms-auto">
                            <a
                              href="#"
                              className="text-muted"
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title
                              data-bs-original-title="Add Wishlist"
                              aria-label="Add Wishlist"
                            >
                              <i className="fa fa-heart" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="owl-item active"
                  style={{ width: "275.25px", marginRight: "25px" }}
                >
                  <div className="item">
                    <div className="card mb-0">
                      <div className="arrow-ribbon bg-success">Open</div>
                      <div className="item-card7-imgs">
                        <a
                          href="classified.html"
                          onClick={(e) => {
                            e.preventDefault();
                          }}
                        />
                        <img
                          src="../assets/images/products/products/f2.jpg"
                          alt="img"
                          className="cover-image"
                        />
                      </div>
                      <div className="item-card7-overlaytext">
                        <a
                          href="classified.html"
                          onClick={(e) => {
                            e.preventDefault();
                          }}
                          className="text-white"
                        >
                          {" "}
                          Restaurant
                        </a>
                        <h4 className="fs-20 mb-0">$86.00</h4>
                      </div>
                      <div className="card-body">
                        <div className="item-card7-desc">
                          <div className="item-card7-text">
                            <a
                              href="classified.html"
                              onClick={(e) => {
                                e.preventDefault();
                              }}
                              className="text-dark"
                            >
                              <h4 className>Chinese Restaurant</h4>
                            </a>
                          </div>
                          <ul className="item-cards7-ic mb-0">
                            {/* <li>
                              <a href="#">
                                <span className="text-muted">
                                  <i className="icon icon-eye me-1" /> 12 Views
                                </span>
                              </a>
                            </li> */}
                            <li>
                              <a
                                href="#"
                                onClick={(e) => {
                                  e.preventDefault();
                                }}
                                className="icons"
                              >
                                <i className="icon icon-location-pin text-muted me-1" />
                                UK
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                onClick={(e) => {
                                  e.preventDefault();
                                }}
                                className="icons"
                              >
                                <i className="icon icon-event text-muted me-1" />{" "}
                                1 hours ago
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                onClick={(e) => {
                                  e.preventDefault();
                                }}
                                className="icons"
                              >
                                <i className="icon icon-phone text-muted me-1" />{" "}
                                14 675 65430
                              </a>
                            </li>
                          </ul>
                          <p className="mb-0">
                            Omnis iste natus error sit dolore dg voluptatem
                            accusantium
                          </p>
                        </div>
                      </div>
                      <div className="card-footer">
                        <div className="footerimg d-flex mt-0 mb-0">
                          <div className="d-flex footerimg-l mb-0">
                            <img
                              src="../assets/images/faces/female/12.jpg"
                              alt="image"
                              className="avatar brround me-2"
                            />
                            <h5 className="time-title text-muted p-0 leading-normal mt-2 mb-0">
                              Wendy Peake
                              <i
                                className="icon icon-check text-success fs-12 ms-1"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                title
                                data-bs-original-title="verified"
                                aria-label="verified"
                              />
                            </h5>
                          </div>
                          <div className="mt-2 footerimg-r ms-auto">
                            <a
                              href="#"
                              className="text-pink"
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title
                              data-bs-original-title="Remove from Wishlist"
                              aria-label="Remove from Wishlist"
                            >
                              <i className="fa fa-heart" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="owl-item"
                  style={{ width: "275.25px", marginRight: "25px" }}
                >
                  <div className="item">
                    <div className="card mb-0">
                      <div className="arrow-ribbon bg-secondary">sale</div>
                      <div className="item-card7-imgs">
                        <a
                          href="classified.html"
                          onClick={(e) => {
                            e.preventDefault();
                          }}
                        />
                        <img
                          src="../assets/images/products/products/j3.jpg"
                          alt="img"
                          className="cover-image"
                        />
                      </div>
                      <div className="item-card7-overlaytext">
                        <a
                          href="classified.html"
                          onClick={(e) => {
                            e.preventDefault();
                          }}
                          className="text-white"
                        >
                          {" "}
                          Beauty
                        </a>
                        <h4 className="font-weight-semibold mb-0">$65.00</h4>
                      </div>
                      <div className="card-body">
                        <div className="item-card7-desc">
                          <div className="item-card7-text d-flex">
                            <a
                              href="classified.html"
                              onClick={(e) => {
                                e.preventDefault();
                              }}
                              className="text-dark"
                            >
                              <h4 className>FrogeBeauty &amp; Spa</h4>
                            </a>
                          </div>
                          <ul className="item-cards7-ic mb-0">
                            {/* <li>
                              <a href="#">
                                <span className="text-muted">
                                  <i className="icon icon-eye me-1" /> 22 Views
                                </span>
                              </a>
                            </li> */}
                            <li>
                              <a
                                href="#"
                                onClick={(e) => {
                                  e.preventDefault();
                                }}
                                className="icons"
                              >
                                <i className="icon icon-location-pin text-muted me-1" />
                                USA
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                onClick={(e) => {
                                  e.preventDefault();
                                }}
                                className="icons"
                              >
                                <i className="icon icon-event text-muted me-1" />{" "}
                                5 hours ago
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                onClick={(e) => {
                                  e.preventDefault();
                                }}
                                className="icons"
                              >
                                <i className="icon icon-phone text-muted me-1" />{" "}
                                14 675 65430
                              </a>
                            </li>
                          </ul>
                          <p className="mb-0">
                            Omnis iste natus error sit dolore dg voluptatem
                            accusantium
                          </p>
                        </div>
                      </div>
                      <div className="card-footer">
                        <div className="footerimg d-flex mt-0 mb-0">
                          <div className="d-flex footerimg-l mb-0">
                            <img
                              src="../assets/images/faces/female/19.jpg"
                              alt="image"
                              className="avatar brround me-2"
                            />
                            <h5 className="time-title text-muted p-0 leading-normal mt-2 mb-0">
                              Elizabeth
                              <i
                                className="icon icon-check text-success fs-12 ms-1"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                title
                                data-bs-original-title="verified"
                                aria-label="verified"
                              />
                            </h5>
                          </div>
                          <div className="mt-2 footerimg-r ms-auto">
                            <a
                              href="classified.html"
                              onClick={(e) => {
                                e.preventDefault();
                              }}
                              className="text-muted"
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title
                              data-bs-original-title="Add Wishlist"
                              aria-label="Add Wishlist"
                            >
                              <i className="fa fa-heart" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="owl-item cloned"
                  style={{ width: "275.25px", marginRight: "25px" }}
                >
                  <div className="item">
                    <div className="card mb-0">
                      <div className="arrow-ribbon bg-danger">sale</div>
                      <div className="item-card7-imgs">
                        <a
                          href="classified.html"
                          onClick={(e) => {
                            e.preventDefault();
                          }}
                        />
                        <img
                          src="../assets/images/products/products/b3.jpg"
                          alt="img"
                          className="cover-image"
                        />
                      </div>
                      <div className="item-card7-overlaytext">
                        <a
                          href="classified.html"
                          onClick={(e) => {
                            e.preventDefault();
                          }}
                          className="text-white"
                        >
                          {" "}
                          Beauty &amp; Spa{" "}
                        </a>
                        <h4 className="mb-0">$398.99</h4>
                      </div>
                      <div className="card-body">
                        <div className="item-card7-desc">
                          <div className="item-card7-text">
                            <a
                              href="classified.html"
                              onClick={(e) => {
                                e.preventDefault();
                              }}
                              className="text-dark"
                            >
                              <h4 className>Golik Beauty &amp; Spa</h4>
                            </a>
                          </div>
                          <ul className="item-cards7-ic mb-0">
                            {/* <li>
                              <a href="#">
                                <span className="text-muted">
                                  <i className="icon icon-eye me-1" /> 22 Views
                                </span>
                              </a>
                            </li> */}
                            <li>
                              <a
                                href="#"
                                onClick={(e) => {
                                  e.preventDefault();
                                }}
                                className="icons"
                              >
                                <i className="icon icon-location-pin text-muted me-1" />
                                USA
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                onClick={(e) => {
                                  e.preventDefault();
                                }}
                                className="icons"
                              >
                                <i className="icon icon-event text-muted me-1" />{" "}
                                5 hours ago
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                onClick={(e) => {
                                  e.preventDefault();
                                }}
                                className="icons"
                              >
                                <i className="icon icon-phone text-muted me-1" />{" "}
                                14 675 65430
                              </a>
                            </li>
                          </ul>
                          <p className="mb-0">
                            Omnis iste natus error sit dolore dg voluptatem
                            accusantium
                          </p>
                        </div>
                      </div>
                      <div className="card-footer">
                        <div className="footerimg d-flex mt-0 mb-0">
                          <div className="d-flex footerimg-l mb-0">
                            <img
                              src="../assets/images/faces/female/17.jpg"
                              alt="image"
                              className="avatar brround me-2"
                            />
                            <h5 className="time-title text-muted p-0 leading-normal mt-2 mb-0">
                              Victoria
                              <i
                                className="icon icon-check text-success fs-12 ms-1"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                title
                                data-bs-original-title="verified"
                                aria-label="verified"
                              />
                            </h5>
                          </div>
                          <div className="mt-2 footerimg-r ms-auto">
                            <a
                              href="#"
                              className="text-pink"
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title
                              data-bs-original-title="Remove from Wishlist"
                              aria-label="Remove from Wishlist"
                            >
                              <i className="fa fa-heart" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="owl-item cloned"
                  style={{ width: "275.25px", marginRight: "25px" }}
                >
                  <div className="item">
                    <div className="card mb-0">
                      <div className="arrow-ribbon bg-primary">sale</div>
                      <div className="item-card7-imgs">
                        <a
                          href="classified.html"
                          onClick={(e) => {
                            e.preventDefault();
                          }}
                        />
                        <img
                          src="../assets/images/products/products/h3.jpg"
                          alt="img"
                          className="cover-image"
                        />
                      </div>
                      <div className="item-card7-overlaytext">
                        <a
                          href="classified.html"
                          onClick={(e) => {
                            e.preventDefault();
                          }}
                          className="text-white"
                        >
                          {" "}
                          RealEstate
                        </a>
                        <h4 className="mb-0">$752.99</h4>
                      </div>
                      <div className="card-body">
                        <div className="item-card7-desc">
                          <div className="item-card7-text">
                            <a
                              href="classified.html"
                              onClick={(e) => {
                                e.preventDefault();
                              }}
                              className="text-dark"
                            >
                              <h4 className>2Bk Deluxe Flat</h4>
                            </a>
                          </div>
                          <ul className="item-cards7-ic mb-0">
                            {/* <li>
                              <a href="#">
                                <span className="text-muted">
                                  <i className="icon icon-eye me-1" /> 22 Views
                                </span>
                              </a>
                            </li> */}
                            <li>
                              <a
                                href="#"
                                onClick={(e) => {
                                  e.preventDefault();
                                }}
                                className="icons"
                              >
                                <i className="icon icon-location-pin text-muted me-1" />
                                USA
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                onClick={(e) => {
                                  e.preventDefault();
                                }}
                                className="icons"
                              >
                                <i className="icon icon-event text-muted me-1" />{" "}
                                5 hours ago
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                onClick={(e) => {
                                  e.preventDefault();
                                }}
                                className="icons"
                              >
                                <i className="icon icon-phone text-muted me-1" />{" "}
                                14 675 65430
                              </a>
                            </li>
                          </ul>
                          <p className="mb-0">
                            Omnis iste natus error sit dolore dg voluptatem
                            accusantium
                          </p>
                        </div>
                      </div>
                      <div className="card-footer">
                        <div className="footerimg d-flex mt-0 mb-0">
                          <div className="d-flex footerimg-l mb-0">
                            <img
                              src="../assets/images/faces/male/17.jpg"
                              alt="image"
                              className="avatar brround me-2"
                            />
                            <h5 className="time-title text-muted p-0 leading-normal mt-2 mb-0">
                              Christopher
                              <i
                                className="icon icon-check text-success fs-12 ms-1"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                title
                                data-bs-original-title="verified"
                                aria-label="verified"
                              />
                            </h5>
                          </div>
                          <div className="mt-2 footerimg-r ms-auto">
                            <a
                              href="#"
                              className="text-muted"
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title
                              data-bs-original-title="Add Wishlist"
                              aria-label="Add Wishlist"
                            >
                              <i className="fa fa-heart" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="owl-item cloned"
                  style={{ width: "275.25px", marginRight: "25px" }}
                >
                  <div className="item">
                    <div className="card mb-0">
                      <div className="arrow-ribbon bg-purple">sale</div>
                      <div className="item-card7-imgs">
                        <a
                          href="classified.html"
                          onClick={(e) => {
                            e.preventDefault();
                          }}
                        />
                        <img
                          src="../assets/images/products/products/v4.jpg"
                          alt="img"
                          className="cover-image"
                        />
                      </div>
                      <div className="item-card7-overlaytext">
                        <a
                          href="classified.html"
                          onClick={(e) => {
                            e.preventDefault();
                          }}
                          className="text-white"
                        >
                          {" "}
                          Vehicle
                        </a>
                        <h4 className="mb-0">$786.00</h4>
                      </div>
                      <div className="card-body">
                        <div className="item-card7-desc">
                          <div className="item-card7-text">
                            <a
                              href="classified.html"
                              onClick={(e) => {
                                e.preventDefault();
                              }}
                              className="text-dark"
                            >
                              <h4 className>Gittbo AutoMobiles</h4>
                            </a>
                          </div>
                          <ul className="item-cards7-ic mb-0">
                            {/* <li>
                              <a href="#">
                                <span className="text-muted">
                                  <i className="icon icon-eye me-1" /> 22 Views
                                </span>
                              </a>
                            </li> */}
                            <li>
                              <a
                                href="#"
                                onClick={(e) => {
                                  e.preventDefault();
                                }}
                                className="icons"
                              >
                                <i className="icon icon-location-pin text-muted me-1" />
                                USA
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                onClick={(e) => {
                                  e.preventDefault();
                                }}
                                className="icons"
                              >
                                <i className="icon icon-event text-muted me-1" />{" "}
                                5 hours ago
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                onClick={(e) => {
                                  e.preventDefault();
                                }}
                                className="icons"
                              >
                                <i className="icon icon-phone text-muted me-1" />{" "}
                                14 675 65430
                              </a>
                            </li>
                          </ul>
                          <p className="mb-0">
                            Omnis iste natus error sit dolore dg voluptatem
                            accusantium
                          </p>
                        </div>
                      </div>
                      <div className="card-footer">
                        <div className="footerimg d-flex mt-0 mb-0">
                          <div className="d-flex footerimg-l mb-0">
                            <img
                              src="../assets/images/faces/male/18.jpg"
                              alt="image"
                              className="avatar brround me-2"
                            />
                            <h5 className="time-title text-muted p-0 leading-normal mt-2 mb-0">
                              Wendy Peake
                              <i
                                className="icon icon-check text-success fs-12 ms-1"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                title
                                data-bs-original-title="verified"
                                aria-label="verified"
                              />
                            </h5>
                          </div>
                          <div className="mt-2 footerimg-r ms-auto">
                            <a
                              href="#"
                              className="text-muted"
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title
                              data-bs-original-title="Add Wishlist"
                              aria-label="Add Wishlist"
                            >
                              <i className="fa fa-heart" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="owl-item cloned"
                  style={{ width: "275.25px", marginRight: "25px" }}
                >
                  <div className="item">
                    <div className="card mb-0">
                      <div className="arrow-ribbon bg-success">Open</div>
                      <div className="item-card7-imgs">
                        <a
                          href="classified.html"
                          onClick={(e) => {
                            e.preventDefault();
                          }}
                        />
                        <img
                          src="../assets/images/products/products/f2.jpg"
                          alt="img"
                          className="cover-image"
                        />
                      </div>
                      <div className="item-card7-overlaytext">
                        <a
                          href="classified.html"
                          onClick={(e) => {
                            e.preventDefault();
                          }}
                          className="text-white"
                        >
                          {" "}
                          Restaurant
                        </a>
                        <h4 className="fs-20 mb-0">$86.00</h4>
                      </div>
                      <div className="card-body">
                        <div className="item-card7-desc">
                          <div className="item-card7-text">
                            <a
                              href="classified.html"
                              onClick={(e) => {
                                e.preventDefault();
                              }}
                              className="text-dark"
                            >
                              <h4 className>Chinese Restaurant</h4>
                            </a>
                          </div>
                          <ul className="item-cards7-ic mb-0">
                            {/* <li>
                              <a href="#">
                                <span className="text-muted">
                                  <i className="icon icon-eye me-1" /> 12 Views
                                </span>
                              </a>
                            </li> */}
                            <li>
                              <a
                                href="#"
                                onClick={(e) => {
                                  e.preventDefault();
                                }}
                                className="icons"
                              >
                                <i className="icon icon-location-pin text-muted me-1" />
                                UK
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                onClick={(e) => {
                                  e.preventDefault();
                                }}
                                className="icons"
                              >
                                <i className="icon icon-event text-muted me-1" />{" "}
                                1 hours ago
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                onClick={(e) => {
                                  e.preventDefault();
                                }}
                                className="icons"
                              >
                                <i className="icon icon-phone text-muted me-1" />{" "}
                                14 675 65430
                              </a>
                            </li>
                          </ul>
                          <p className="mb-0">
                            Omnis iste natus error sit dolore dg voluptatem
                            accusantium
                          </p>
                        </div>
                      </div>
                      <div className="card-footer">
                        <div className="footerimg d-flex mt-0 mb-0">
                          <div className="d-flex footerimg-l mb-0">
                            <img
                              src="../assets/images/faces/female/12.jpg"
                              alt="image"
                              className="avatar brround me-2"
                            />
                            <h5 className="time-title text-muted p-0 leading-normal mt-2 mb-0">
                              Wendy Peake
                              <i
                                className="icon icon-check text-success fs-12 ms-1"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                title
                                data-bs-original-title="verified"
                                aria-label="verified"
                              />
                            </h5>
                          </div>
                          <div className="mt-2 footerimg-r ms-auto">
                            <a
                              onClick={(e) => {
                                e.preventDefault();
                              }}
                              href="#"
                              className="text-pink"
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title
                              data-bs-original-title="Remove from Wishlist"
                              aria-label="Remove from Wishlist"
                            >
                              <i className="fa fa-heart" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="owl-nav">
              <button type="button" role="presentation" className="owl-prev">
                <span aria-label="Previous">‹</span>
              </button>
              <button type="button" role="presentation" className="owl-next">
                <span aria-label="Next">›</span>
              </button>
            </div>
            <div className="owl-dots disabled" />
          </div>
        </div>
      </section>
      {/*/Featured Ads*/}
      {/*Locations*/}
      <section className="sptb">
        <div className="container">
          <div className="col-md-12">
            <div className="items-gallery">
              <div className="items-blog-tab text-center">
                <h2 className>Recently viewed</h2>
                <div className="items-blog-tab-heading row">
                  <div className="col-12">
                    <ul className="nav items-blog-tab-menu">
                      <li className>
                        <a
                          onClick={(e) => {
                            e.preventDefault();
                          }}
                          href="#tab-1"
                          className="active show"
                          data-bs-toggle="tab"
                        >
                          All
                        </a>
                      </li>
                      <li>
                        <a
                          href="#tab-2"
                          onClick={(e) => {
                            e.preventDefault();
                          }}
                          data-bs-toggle="tab"
                          className
                        >
                          Business
                        </a>
                      </li>
                      <li>
                        <a
                          href="#tab-3"
                          onClick={(e) => {
                            e.preventDefault();
                          }}
                          data-bs-toggle="tab"
                          className
                        >
                          Beauty
                        </a>
                      </li>
                      <li>
                        <a
                          href="#tab-4"
                          onClick={(e) => {
                            e.preventDefault();
                          }}
                          data-bs-toggle="tab"
                          className
                        >
                          Real Estate
                        </a>
                      </li>
                      <li>
                        <a
                          href="#tab-5"
                          onClick={(e) => {
                            e.preventDefault();
                          }}
                          data-bs-toggle="tab"
                          className
                        >
                          Restaurant
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="tab-content">
                  <div className="tab-pane active" id="tab-1">
                    <div className="row">
                      <div className="col-xl-4 col-lg-4 col-md-12">
                        <div className="card mb-xl-0">
                          <span className="ribbon-1">
                            <span>
                              <i className="fa fa-cutlery" />
                            </span>
                          </span>
                          <div className="item-card8-img br-te-7 br-ts-7">
                            <img
                              src="../assets/images/products/f2.png"
                              alt="img"
                              className="cover-image"
                            />
                          </div>
                          <div className="item-card8-overlaytext">
                            <h6 className="fs-20 mb-0">Restaurants</h6>
                          </div>
                          <div className="card-body">
                            <div className="item-card8-desc">
                              <p className="text-muted">16 November 2018.</p>
                              <h4 className="font-weight-semibold">
                                Food &amp; Bar Restaurant
                              </h4>
                              <p className="mb-0">
                                Ut enim ad minima veniam, quis nostrum
                                exercitationem ullam corporis suscipit
                                laboriosam
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-4 col-lg-4 col-md-12">
                        <div className="card mb-xl-0">
                          <span className="ribbon-2">
                            <span>
                              <i className="fa fa-home" />
                            </span>
                          </span>
                          <div className="item-card8-img br-te-7 br-ts-7">
                            <img
                              src="../assets/images/products/h2.jpg"
                              alt="img"
                              className="cover-image"
                            />
                          </div>
                          <div className="item-card8-overlaytext">
                            <h6 className="bg-primary fs-20 mb-0">
                              Real State
                            </h6>
                          </div>
                          <div className="card-body">
                            <div className="item-card8-desc">
                              <p className="text-muted">16 November 2018.</p>
                              <h4 className="font-weight-semibold">
                                Food &amp; Bar Restaurant
                              </h4>
                              <p className="mb-0">
                                Ut enim ad minima veniam, quis nostrum
                                exercitationem ullam corporis suscipit
                                laboriosam
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-4 col-lg-4 col-md-12">
                        <div className="card mb-lg-0">
                          <span className="ribbon-3">
                            <span>
                              <i className="fa fa-paint-brush" />
                            </span>
                          </span>
                          <div className="item-card8-img br-te-7 br-ts-7">
                            <img
                              src="../assets/images/products/j1.png"
                              alt="img"
                              className="cover-image"
                            />
                          </div>
                          <div className="item-card8-overlaytext">
                            <h6 className="bg-info fs-20 mb-0">Beauty Spa</h6>
                          </div>
                          <div className="card-body">
                            <div className="item-card8-desc">
                              <p className="text-muted">16 November 2018.</p>
                              <h4 className="font-weight-semibold">
                                Food &amp; Bar Restaurant
                              </h4>
                              <p className="mb-0">
                                Ut enim ad minima veniam, quis nostrum
                                exercitationem ullam corporis suscipit
                                laboriosam
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane" id="tab-2">
                    <div className="row">
                      <div className="col-xl-4 col-lg-4 col-md-12">
                        <div className="card mb-xl-0">
                          <span className="ribbon-2">
                            <span>
                              <i className="fa fa-briefcase" />
                            </span>
                          </span>
                          <div className="item-card8-img br-te-7 br-ts-7">
                            <img
                              src="../assets/images/products/f1.png"
                              alt="img"
                              className="cover-image"
                            />
                          </div>
                          <div className="item-card8-overlaytext">
                            <h6 className="bg-primary fs-20 mb-0">Business</h6>
                          </div>
                          <div className="card-body">
                            <div className="item-card8-desc">
                              <p className="text-muted">16 November 2018.</p>
                              <h4 className="font-weight-semibold">
                                Food &amp; Bar Restaurant
                              </h4>
                              <p className="mb-0">
                                Ut enim ad minima veniam, quis nostrum
                                exercitationem ullam corporis suscipit
                                laboriosam
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-4 col-lg-4 col-md-12">
                        <div className="card mb-xl-0">
                          <span className="ribbon-1">
                            <span>
                              <i className="fa fa-briefcase" />
                            </span>
                          </span>
                          <div className="item-card8-img">
                            <img
                              src="../assets/images/products/j2.png"
                              alt="img"
                              className="cover-image"
                            />
                          </div>
                          <div className="item-card8-overlaytext">
                            <h6 className="bg-secondary fs-20 mb-0">
                              Business
                            </h6>
                          </div>
                          <div className="card-body">
                            <div className="item-card8-desc">
                              <p className="text-muted">16 November 2018.</p>
                              <h4 className="font-weight-semibold">
                                Food &amp; Bar Restaurant
                              </h4>
                              <p className="mb-0">
                                Ut enim ad minima veniam, quis nostrum
                                exercitationem ullam corporis suscipit
                                laboriosam
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-4 col-lg-4 col-md-12">
                        <div className="card mb-0">
                          <span className="ribbon-3">
                            <span>
                              <i className="fa fa-briefcase" />
                            </span>
                          </span>
                          <div className="item-card8-img">
                            <img
                              src="../assets/images/products/j3.png"
                              alt="img"
                              className="cover-image"
                            />
                          </div>
                          <div className="item-card8-overlaytext">
                            <h6 className="bg-info fs-20 mb-0">Business</h6>
                          </div>
                          <div className="card-body">
                            <div className="item-card8-desc">
                              <p className="text-muted">16 November 2018.</p>
                              <h4 className="font-weight-semibold">
                                Food &amp; Bar Restaurant
                              </h4>
                              <p className="mb-0">
                                Ut enim ad minima veniam, quis nostrum
                                exercitationem ullam corporis suscipit
                                laboriosam
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane" id="tab-3">
                    <div className="row">
                      <div className="col-xl-4 col-lg-4 col-md-12">
                        <span className="ribbon-3">
                          <span>
                            <i className="fa fa-paint-brush" />
                          </span>
                        </span>
                        <div className="card mb-xl-0">
                          <div className="item-card8-img br-te-7 br-ts-7">
                            <img
                              src="../assets/images/products/b1.png"
                              alt="img"
                              className="cover-image"
                            />
                          </div>
                          <div className="item-card8-overlaytext">
                            <h6 className="bg-info fs-20 mb-0">Spa</h6>
                          </div>
                          <div className="card-body">
                            <div className="item-card8-desc">
                              <p className="text-muted">16 November 2018.</p>
                              <h4 className="font-weight-semibold">
                                Food &amp; Bar Restaurant
                              </h4>
                              <p className="mb-0">
                                Ut enim ad minima veniam, quis nostrum
                                exercitationem ullam corporis suscipit
                                laboriosam
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-4 col-lg-4 col-md-12">
                        <div className="card mb-0">
                          <span className="ribbon-2">
                            <span>
                              <i className="fa fa-paint-brush" />
                            </span>
                          </span>
                          <div className="item-card8-img">
                            <img
                              src="../assets/images/products/b2.png"
                              alt="img"
                              className="cover-image"
                            />
                          </div>
                          <div className="item-card8-overlaytext">
                            <h6 className="bg-primary fs-20 mb-0">Spa</h6>
                          </div>
                          <div className="card-body">
                            <div className="item-card8-desc">
                              <p className="text-muted">16 November 2018.</p>
                              <h4 className="font-weight-semibold">
                                Food &amp; Bar Restaurant
                              </h4>
                              <p className="mb-0">
                                Ut enim ad minima veniam, quis nostrum
                                exercitationem ullam corporis suscipit
                                laboriosam
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-4 col-lg-4 col-md-12">
                        <div className="card mb-lg-0">
                          <span className="ribbon-1">
                            <span>
                              <i className="fa fa-paint-brush" />
                            </span>
                          </span>
                          <div className="item-card8-img br-te-7 br-ts-7">
                            <img
                              src="../assets/images/products/j1.png"
                              alt="img"
                              className="cover-image"
                            />
                          </div>
                          <div className="item-card8-overlaytext">
                            <h6 className="bg-secondary fs-20 mb-0">Spa</h6>
                          </div>
                          <div className="card-body">
                            <div className="item-card8-desc">
                              <p className="text-muted">16 November 2018.</p>
                              <h4 className="font-weight-semibold">
                                Food &amp; Bar Restaurant
                              </h4>
                              <p className="mb-0">
                                Ut enim ad minima veniam, quis nostrum
                                exercitationem ullam corporis suscipit
                                laboriosam
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane" id="tab-4">
                    <div className="row">
                      <div className="col-xl-4 col-lg-4 col-md-12">
                        <span className="ribbon-2">
                          <span>
                            <i className="fa fa-home" />
                          </span>
                        </span>
                        <div className="card mb-xl-0">
                          <div className="item-card8-img br-te-7 br-ts-7">
                            <img
                              src="../assets/images/products/h4.png"
                              alt="img"
                              className="cover-image"
                            />
                          </div>
                          <div className="item-card8-overlaytext">
                            <h6 className="bg-primary fs-20 mb-0">
                              Real Estate
                            </h6>
                          </div>
                          <div className="card-body">
                            <div className="item-card8-desc">
                              <p className="text-muted">16 November 2018.</p>
                              <h4 className="font-weight-semibold">
                                Food &amp; Bar Restaurant
                              </h4>
                              <p className="mb-0">
                                Ut enim ad minima veniam, quis nostrum
                                exercitationem ullam corporis suscipit
                                laboriosam
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-4 col-lg-4 col-md-12">
                        <div className="card mb-xl-0">
                          <span className="ribbon-3">
                            <span>
                              <i className="fa fa-home" />
                            </span>
                          </span>
                          <div className="item-card8-img">
                            <img
                              src="../assets/images/products/h2.png"
                              alt="img"
                              className="cover-image"
                            />
                          </div>
                          <div className="item-card8-overlaytext">
                            <h6 className="bg-info fs-20 mb-0">Real Estate</h6>
                          </div>
                          <div className="card-body">
                            <div className="item-card8-desc">
                              <p className="text-muted">16 November 2018.</p>
                              <h4 className="font-weight-semibold">
                                Food &amp; Bar Restaurant
                              </h4>
                              <p className="mb-0">
                                Ut enim ad minima veniam, quis nostrum
                                exercitationem ullam corporis suscipit
                                laboriosam
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-4 col-lg-4 col-md-12">
                        <div className="card mb-0">
                          <span className="ribbon-1">
                            <span>
                              <i className="fa fa-home" />
                            </span>
                          </span>
                          <div className="item-card8-img">
                            <img
                              src="../assets/images/products/h3.png"
                              alt="img"
                              className="cover-image"
                            />
                          </div>
                          <div className="item-card8-overlaytext">
                            <h6 className="bg-secondary fs-20 mb-0">
                              Real Estate
                            </h6>
                          </div>
                          <div className="card-body">
                            <div className="item-card8-desc">
                              <p className="text-muted">16 November 2018.</p>
                              <h4 className="font-weight-semibold">
                                Food &amp; Bar Restaurant
                              </h4>
                              <p className="mb-0">
                                Ut enim ad minima veniam, quis nostrum
                                exercitationem ullam corporis suscipit
                                laboriosam
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane" id="tab-5">
                    <div className="row">
                      <div className="col-xl-4 col-lg-4 col-md-12">
                        <div className="card mb-xl-0">
                          <span className="ribbon-3">
                            <span>
                              <i className="fa fa-cutlery" />
                            </span>
                          </span>
                          <div className="item-card8-img br-te-7 br-ts-7">
                            <img
                              src="../assets/images/products/f4.png"
                              alt="img"
                              className="cover-image"
                            />
                          </div>
                          <div className="item-card8-overlaytext">
                            <h6 className="bg-info fs-20 mb-0">Restaurant</h6>
                          </div>
                          <div className="card-body">
                            <div className="item-card8-desc">
                              <p className="text-muted">16 November 2018.</p>
                              <h4 className="font-weight-semibold">
                                Food &amp; Bar Restaurant
                              </h4>
                              <p className="mb-0">
                                Ut enim ad minima veniam, quis nostrum
                                exercitationem ullam corporis suscipit
                                laboriosam
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-4 col-lg-4 col-md-12">
                        <div className="card mb-xl-0">
                          <span className="ribbon-1">
                            <span>
                              <i className="fa fa-cutlery" />
                            </span>
                          </span>
                          <div className="item-card8-img">
                            <img
                              src="../assets/images/products/f3.png"
                              alt="img"
                              className="cover-image"
                            />
                          </div>
                          <div className="item-card8-overlaytext">
                            <h6 className="bg-secondary fs-20 mb-0">
                              Restaurant
                            </h6>
                          </div>
                          <div className="card-body">
                            <div className="item-card8-desc">
                              <p className="text-muted">16 November 2018.</p>
                              <h4 className="font-weight-semibold">
                                Food &amp; Bar Restaurant
                              </h4>
                              <p className="mb-0">
                                Ut enim ad minima veniam, quis nostrum
                                exercitationem ullam corporis suscipit
                                laboriosam
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-4 col-lg-4 col-md-12">
                        <div className="card mb-0">
                          <span className="ribbon-2">
                            <span>
                              <i className="fa fa-cutlery" />
                            </span>
                          </span>
                          <div className="item-card8-img">
                            <img
                              src="../assets/images/products/f2.png"
                              alt="img"
                              className="cover-image"
                            />
                          </div>
                          <div className="item-card8-overlaytext">
                            <h6 className="bg-primary fs-20 mb-0">
                              Restaurant
                            </h6>
                          </div>
                          <div className="card-body">
                            <div className="item-card8-desc">
                              <p className="text-muted">16 November 2018.</p>
                              <h4 className="font-weight-semibold">
                                Food &amp; Bar Restaurant
                              </h4>
                              <p className="mb-0">
                                Ut enim ad minima veniam, quis nostrum
                                exercitationem ullam corporis suscipit
                                laboriosam
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*/Locations*/}

      {/*Testimonials*/}
      <section className="sptb position-relative pattern">
        <div className="container">
          <div className="section-title center-block text-center">
            <h1 className="text-white position-relative">Contact Us</h1>
          </div>
          <div className="single-page">
            <div className="col-lg-12 col-md-12 mx-auto d-block">
              <div className="wrapper wrapper2">
                <div className="card mb-0">
                  <div className="card-body">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        id="name1"
                        placeholder="Your Name"
                        name="sendername"
                        value={saveModal.sendername}
                        onChange={handleInput}
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="Email Address"
                        name="senderemail"
                        value={saveModal.senderemail}
                        onChange={handleInput}
                      />
                    </div>
                    <div className="form-group">
                      <textarea
                        className="form-control"
                        name="example-textarea-input"
                        rows={6}
                        placeholder="Message"
                        defaultValue={""}
                        name="messbody"
                        value={saveModal.messbody}
                        onChange={handleInput}
                      />
                    </div>
                    <button
                      className="btn btn-primary"
                      onClick={handlePostMessage}
                    >
                      Send Message
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*/Testimonials*/}
    </React.Fragment>
  );
}
