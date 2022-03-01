import React, { useState } from "react";
import { callApi } from "../Utitlies/callAPI";
import Swal from "sweetalert2";

const GetVerified = () => {
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
  return (
    <div>
      {/*Breadcrumb*/}
      <div>
        <div
          className="bannerimg cover-image bg-background3"
          data-bs-image-src="../assets/images/banners/banner2.jpg"
        >
          <div className="header-text mb-0">
            <div className="container">
              <div className="text-center text-white">
                <h1 className>Get Verified</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*/Breadcrumb*/}
      {/*Contact*/}
      <div className="sptb bg-white mb-0 pb-0">
        <div className="container">
          <div className="row">
              <div className="col-md-2"></div>
            <div className="col-md-8">
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
                        <div className="form-group">
                          <span style={{color: 'grey',float: 'left', marginBottom: '15px'}}>Upload PDF</span>
                          <input
                            type="file"
                            className="form-control"
                            id="file"
                            placeholder="File"
                            name="file"
                            //value={saveModal.senderemail}
                            //onChange={handleInput}
                          />
                        </div>
                        <div className="form-group">
                          <span style={{color: 'grey',float: 'left', marginBottom: '15px'}}>Upload Image</span>
                          <input
                            type="file"
                            className="form-control"
                            id="img"
                            placeholder="img"
                            name="img"
                            //value={saveModal.senderemail}
                            //onChange={handleInput}
                          />
                        </div>
                        <button
                          className="btn btn-primary"
                          onClick={handlePostMessage}
                        >
                          Get Verified
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-2"></div>
          </div>
        </div>
      </div>
      {/*Contact*/}
      {/*Statistics*/}
      <section className="sptb bg-white">
        <div className="container" />
      </section>
      {/*/Statistics*/}
    </div>
  );
};

export default GetVerified;
