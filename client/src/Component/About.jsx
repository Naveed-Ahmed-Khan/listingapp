import React from "react";

const About =()=> {
  return (
    <div>
      {/*Breadcrumb*/}
      <section>
        <div
          className="bannerimg cover-image bg-background3 sptb-2"
          data-bs-image-src="../assets/images/banners/banner2.jpg"
        >
          <div className="header-text mb-0">
            <div className="container">
              <div className="text-center text-white">
                <h1 className>About Us</h1>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*/Breadcrumb*/}
      {/*section*/}
      <section className="sptb">
        <div className="container">
          <div className="text-justify">
            <h2 className="mb-4">Why Kearekisa.co.bw?</h2>
            <h4 className="leading-normal">
              Majority have suffered alteration in some form, by injected humor
            </h4>
            <p className="leading-normal">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered by injected humour, or randomised
              words which don't look even slightly believable. If you are going
              to use a passage of Lorem Ipsum, you need to as necessary All the
              Lorem Ipsum generators on the Internet tend to repeat
            </p>
            <p className="leading-normal">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English.
            </p>
            <p className="leading-normal mb-0">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
      </section>
      {/*/section*/}
      {/*How to work*/}
      <section className="sptb bg-white">
        <div className="container">
          <div className="section-title center-block text-center">
            <h2>How It Works?</h2>
            <p>
              Mauris ut cursus nunc. Morbi eleifend, ligula at consectetur
              vehicula
            </p>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-12 col-sm-12 service-img">
              <div className>
                <div className="mb-lg-0 mb-4">
                  <div className="service-card text-center">
                    <div
                      className="
                      bg-purple-transparent
                      icon-bg
                      box-shadow
                      icon-service
                      text-purple
                      about
                    "
                    >
                      <img
                        src="../assets/images/products/about/employees.png"
                        alt="img"
                      />
                    </div>
                    <div className="servic-data mt-3">
                      <h4 className="font-weight-semibold mb-2">Register</h4>
                      <p className="text-muted mb-0">
                        Nam libero tempore, cum soluta nobis est eligendi cumque
                        facere possimus
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-12 col-sm-12 service-img">
              <div className>
                <div className="mb-lg-0 mb-4">
                  <div className="service-card text-center">
                    <div
                      className="
                      bg-purple-transparent
                      icon-bg
                      box-shadow
                      icon-service
                      text-purple
                      about
                    "
                    >
                      <img
                        src="../assets/images/products/about/megaphone.png"
                        alt="img"
                      />
                    </div>
                    <div className="servic-data mt-3">
                      <h4 className="font-weight-semibold mb-2">
                        Create Account
                      </h4>
                      <p className="text-muted mb-0">
                        Nam libero tempore, cum soluta nobis est eligendi cumque
                        facere possimus
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-12 col-sm-12 service-img">
              <div className>
                <div className="mb-sm-0 mb-4">
                  <div className="service-card text-center">
                    <div
                      className="
                      bg-purple-transparent
                      icon-bg
                      box-shadow
                      icon-service
                      text-purple
                      about
                    "
                    >
                      <img
                        src="../assets/images/products/about/pencil.png"
                        alt="img"
                      />
                    </div>
                    <div className="servic-data mt-3">
                      <h4 className="font-weight-semibold mb-2">Add Posts</h4>
                      <p className="text-muted mb-0">
                        Nam libero tempore, cum soluta nobis est eligendi cumque
                        facere possimus
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*/How to work*/}
      {/*post section*/}
      <section>
        <div
          className="cover-image sptb bg-background-color"
          data-bs-image-src="../assets/images/banners/banner4.jpg"
        >
          <div className="content-text mb-0">
            <div className="container">
              <div className="text-center text-white">
                <h2 className="mb-2 display-5">
                  Are you ready for the posting you ads on this Site?
                </h2>
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                </p>
                <div className="mt-5">
                  <a href="ad-posts.html" className="btn btn-primary btn-pill" onClick={(e)=>{e.preventDefault()}}>
                    Free Post Ad
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*/post section*/}
      {/*section*/}
      <section className="sptb">
        <div className="container">
          <div className="section-title center-block text-center">
            <h2>Why Choose Us?</h2>
            <p>
              Mauris ut cursus nunc. Morbi eleifend, ligula at consectetur
              vehicula
            </p>
          </div>
          <div className="row">
            <div className="col-md-6 col-lg-4 features">
              <div className="card">
                <div className="card-body text-center">
                  <div className="feature">
                    <div className="fa-stack fa-lg fea-icon bg-success mb-3">
                      <i className="fa fa-bullhorn text-white" />
                    </div>
                    <h3>Provide Free Ads</h3>
                    <p>
                      our being able to do what we like best, every pleasure is
                      to be welcomed and every pain.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 features">
              <div className="card">
                <div className="card-body text-center">
                  <div className="feature">
                    <div className="fa-stack fa-lg fea-icon bg-primary mb-3">
                      <i className="fa fa-heart text-white" />
                    </div>
                    <h3>Best Ad Ratings</h3>
                    <p>
                      our being able to do what we like best, every pleasure is
                      to be welcomed and every pain.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 features">
              <div className="card">
                <div className="card-body text-center">
                  <div className="feature">
                    <div className="fa-stack fa-lg fea-icon bg-secondary mb-3">
                      <i className="fa fa-bookmark text-white" />
                    </div>
                    <h3>Provide Post Features</h3>
                    <p>
                      our being able to do what we like best, every pleasure is
                      to be welcomed and every pain.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 features">
              <div className="card mb-lg-0">
                <div className="card-body text-center">
                  <div className="feature">
                    <div className="fa-stack fa-lg fea-icon bg-warning mb-3">
                      <i className="fa fa-line-chart text-white" />
                    </div>
                    <h3>See your Ad Progress</h3>
                    <p>
                      our being able to do what we like best, every pleasure is
                      to be welcomed and every pain.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 features">
              <div className="card mb-lg-0 mb-md-0">
                <div className="card-body text-center">
                  <div className="feature">
                    <div className="fa-stack fa-lg fea-icon bg-danger mb-3">
                      <i className="fa fa-handshake-o text-white" />
                    </div>
                    <h3>User Friendly</h3>
                    <p>
                      our being able to do what we like best, every pleasure is
                      to be welcomed and every pain.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 features">
              <div className="card mb-0">
                <div className="card-body text-center">
                  <div className="feature">
                    <div className="fa-stack fa-lg fea-icon bg-info mb-3">
                      <i className="fa fa-phone text-white" />
                    </div>
                    <h3>24/7 Support</h3>
                    <p>
                      our being able to do what we like best, every pleasure is
                      to be welcomed and every pain.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*/section*/}
      {/*section*/}
      <section className="sptb bg-white">
        <div className="container">
          <div className="section-title center-block text-center">
            <h2>Our Team</h2>
            <p>
              Mauris ut cursus nunc. Morbi eleifend, ligula at consectetur
              vehicula
            </p>
          </div>
          <div className="row">
            <div className="col-xl-4 col-md-12">
              <div className="card">
                <div className="card-body">
                  <div className="team-section text-center">
                    <div className="team-img">
                      <img
                        src="../assets/images/faces/male/1.jpg"
                        className="img-thumbnail rounded-circle alt="
                        alt=""
                      />
                    </div>
                    <h4 className="font-weight-bold dark-grey-text mt-4">
                      Tracey Poole
                    </h4>
                    <h6 className="font-weight-bold blue-text">Web Designer</h6>
                    <p className="font-weight-normal dark-grey-text">
                      <i className="fa fa-quote-left pe-2" />
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Quod eos id officiis hic tenetur quae quaerat ad velit ab
                      hic tenetur.
                    </p>
                    <div className="text-warning">
                      <i className="fa fa-star"> </i>
                      <i className="fa fa-star"> </i>
                      <i className="fa fa-star"> </i>
                      <i className="fa fa-star"> </i>
                      <i className="fa fa-star-half-full"> </i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-12">
              <div className="card">
                <div className="card-body">
                  <div className="team-section text-center">
                    <div className="team-img">
                      <img
                        src="../assets/images/faces/female/1.jpg"
                        className="img-thumbnail rounded-circle alt="
                        alt=""
                      />
                    </div>
                    <h4 className="font-weight-bold dark-grey-text mt-4">
                      Harry Walker
                    </h4>
                    <h6 className="font-weight-bold blue-text">
                      Web Developer
                    </h6>
                    <p className="font-weight-normal dark-grey-text">
                      <i className="fa fa-quote-left pe-2" />
                      Ut enim ad minima veniam, quis nostrum exercitationem
                      ullam quis nostrum corporis suscipit laboriosam, nisi ut
                      aliquid commodi.
                    </p>
                    <div className="text-warning">
                      <i className="fa fa-star"> </i>
                      <i className="fa fa-star"> </i>
                      <i className="fa fa-star"> </i>
                      <i className="fa fa-star"> </i>
                      <i className="fa fa-star"> </i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-12">
              <div className="card">
                <div className="card-body">
                  <div className="team-section text-center">
                    <div className="team-img">
                      <img
                        src="../assets/images/faces/male/2.jpg"
                        className="img-thumbnail rounded-circle alt="
                        alt=""
                      />
                    </div>
                    <h4 className="font-weight-bold dark-grey-text mt-4">
                      Paul White
                    </h4>
                    <h6 className="font-weight-bold blue-text">Photographer</h6>
                    <p className="font-weight-normal dark-grey-text">
                      <i className="fa fa-quote-left pe-2" />
                      At vero eos et accusamus et iusto odio dignissimos ducimus
                      qui blanditiis praesentium voluptatum deleniti atque
                      corrupti.
                    </p>
                    <div className="text-warning">
                      <i className="fa fa-star"> </i>
                      <i className="fa fa-star"> </i>
                      <i className="fa fa-star"> </i>
                      <i className="fa fa-star"> </i>
                      <i className="fa fa-star-o"> </i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*/section*/}
    </div>
  );
}
export default About;