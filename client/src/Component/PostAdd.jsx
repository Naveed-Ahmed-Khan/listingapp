import React, { Component } from "react";
import { callApi } from "../Utitlies/callAPI";
import { mapStateToProps, mapDispatchToProps } from "./Action/Action";
import { connect } from "react-redux";
import Swal from "sweetalert2";
import { Form, Row, Col, InputGroup, Button } from "react-bootstrap";
import { MultiSelect } from "react-multi-select-component";
import MultipleSelect from "./MultipleSelect";

class PostAdd extends Component {
  constructor(props) {
    super(props);
    this.saveModal = {
      sellerid: this.props.userInfoData._id,
      sellername: this.props.userInfoData.name,
      title: (this.props.editData || {}).title || "",
      category: (this.props.editData || {}).category || "",
      price: (this.props.editData || {}).price || "",
      tag: (this.props.editData || {}).tag || "",
      mainimg: (this.props.editData || {}).mainimg || "",
      address: (this.props.editData || {}).address || "",
      location: (this.props.editData || {}).location || "",
      tags: (this.props.editData || {}).tags || "",
      phonenumber: (this.props.editData || {}).phonenumber || "",
      description: (this.props.editData || {}).description || "",
    };

    this.state = {
      categoryList: [],
      locationList: [],
      tagsList: ["1", "2"],
      saveModal: this.saveModal,
      validated: false,
    };
  }
  getCategory = async () => {
    const categoryData = await callApi("/category", "get");
    this.setState({
      categoryList: categoryData,
    });
  };

  getLocation = async () => {
    const locationData = await callApi(
      "/location",
      "get",
      null,
      null,
      null,
      "Admin"
    );

    this.setState({
      locationList: (locationData || []).locations || [],
    });
  };
  handleField = (e) => {
    const { name, value } = e.target;
    this.setState({
      saveModal: {
        ...this.state.saveModal,
        [name]: value,
      },
    });
  };
  handlePostAdd = async () => {
    const { saveModal } = this.state;
    const postData = await callApi("/ad", "post", saveModal);
    if (postData.msg === "Ad is posted") {
      Swal.fire("Add Posted Successfully", "", "success");
    }
  };
  // Handle Phone number
  handlePhoneNumber = (e) => {
    const { value, name } = e.target;
    if ((value || []).length < 9) {
      this.setState({
        saveModal: {
          ...this.state.saveModal,
          [name]: value,
        },
      });
    }
  };
  componentDidMount() {
    this.getCategory();
    this.getLocation();
  }

  handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    this.setState({ validated: true });
  };
  handlePhoto = (e) => {
    const { target } = e;
    const fileInfo = (Object.values(target.files) || "")[0].File;
  };

  getBase64(file, cb) {
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      cb(reader.result);
    };
    reader.onerror = function (error) {
      console.log("Error: ", error);
    };
  }

  handlePhoto = async (e) => {
    e.preventDefault();
    debugger;
    const fileInfo = e.target.files;
    const formData = new FormData();
    let newArr = [];
    for (let i = 0; i < fileInfo.length; i++) {
      newArr.push(fileInfo[i]);
    }
    formData.push("monfichier", newArr);

    console.log(formData);

    // axios
    //   .post('http://localhost:3000/uploaddufichier', formData)
    //   .then((res) => res.data);
  };
  render() {
    const { categoryList, saveModal, locationList, tagsList, validated } =
      this.state;
    const { editData, handleCloseEditAdd, handleUpdatePost } = this.props;

    return (
      <React.Fragment>
        {/*Sliders Section*/}
        <section>
          <div
            className="bannerimg cover-image bg-background3"
            data-bs-image-src="../assets/images/banners/banner2.jpg"
          >
            <div className="header-text mb-0">
              <div className="container">
                <div className="text-center text-white">
                  <h1>{editData ? "Edit Post" : "Ad Post"}</h1>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*/Sliders Section*/}
        {/*Add posts-section*/}

        <section className="sptb">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-md-12 col-md-12">
                <div className="card">
                  <div className="card-header">
                    <h3 className="card-title">Add Post</h3>
                  </div>
                  <Form
                    noValidate
                    validated={validated}
                    onSubmit={this.handleSubmit}
                  >
                    <div className="card-body">
                      <div className="form-group">
                        <label className="form-label text-dark">Ad Title</label>
                        <Form.Control
                          required
                          className="form-control"
                          name="title"
                          value={saveModal.title}
                          onChange={this.handleField}
                        />
                      </div>
                      <div className="form-group">
                        <div className="form-file">
                          <label className="form-label text-dark">
                            Upload Photo
                          </label>
                          <input
                            type="file"
                            className="form-control example-file-input-custom"
                            name="example-file-input-custom"
                            onChange={this.handlePhoto}
                          />
                        </div>
                      </div>
                      <div className="form-group">
                        <label className="form-label text-dark">Category</label>

                        <Form.Control
                          required
                          as="select"
                          value={"2"}
                          name="category"
                          value={saveModal.category}
                          onChange={this.handleField}
                        >
                          <option value={""}>Select Option</option>
                          {categoryList.map((items) => {
                            return (
                              <option value={items.name} key={items.id}>
                                {items.name}
                              </option>
                            );
                          })}
                        </Form.Control>
                      </div>
                      <div className="form-group">
                        <label className="form-label text-dark">Price</label>

                        <Form.Control
                          required
                          type="number"
                          className="form-control"
                          name="price"
                          placeholder="BWP"
                          value={saveModal.price}
                          onChange={this.handleField}
                        />
                      </div>
                      {/* <div className="form-group">
                      <label className="form-label text-dark">
                        Type of Condition
                      </label>
                      <div className="d-md-flex ad-post-details">
                        <label className="custom-control form-radio mb-2 me-4">
                          <input
                            type="radio"
                            className="custom-control-input"
                            name="radios2"
                            defaultValue="option1"
                            defaultChecked
                          />
                          <span className="custom-control-label">
                            <a href="#" className="text-muted">
                              New{" "}
                            </a>
                          </span>
                        </label>
                        <label className="custom-control form-radio mb-2">
                          <input
                            type="radio"
                            className="custom-control-input"
                            name="radios2"
                            defaultValue="option2"
                          />
                          <span className="custom-control-label">
                            <a href="#" className="text-muted">
                              Used
                            </a>
                          </span>
                        </label>
                      </div>
                    </div> */}
                      <div className="form-group">
                        <label className="form-label text-dark">
                          Description
                        </label>
                        <Form.Control
                          required
                          className="form-control"
                          rows={6}
                          defaultValue={""}
                          name="description"
                          value={saveModal.description}
                          onChange={this.handleField}
                          as="textarea"
                        />
                      </div>

                      {/* <div className="p-2 border mb-4">
                      <div className="upload-images d-flex">
                        <div>
                          <img
                            src="../assets/images/products/h1.jpg"
                            alt="img"
                            className="w73 h73 border p-0"
                          />
                        </div>
                        <div className="ms-3 mt-2">
                          <h6 className="mb-0 mt-3 font-weight-bold">h1.jpg</h6>
                          <small>4.5kb</small>
                        </div>
                        <div className="float-end ms-auto">
                          <a
                            href="#"
                            className="float-end btn btn-icon btn-danger btn-sm mt-5"
                          >
                            <i className="fa fa-trash-o" />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="p-2 border mb-4">
                      <div className="upload-images d-flex">
                        <div>
                          <img
                            src="../assets/images/products/h5.jpg"
                            alt="img"
                            className="w73 h73 border p-0"
                          />
                        </div>
                        <div className="ms-3 mt-2">
                          <h6 className="mb-0 mt-3 font-weight-bold">h5.jpg</h6>
                          <small>4.5kb</small>
                        </div>
                        <div className="float-end ms-auto">
                          <a
                            href="#"
                            className="float-end btn btn-icon btn-danger btn-sm mt-5"
                          >
                            <i className="fa fa-trash-o" />
                          </a>
                        </div>
                      </div>
                    </div> */}
                      <div className="row">
                        <div className="col-sm-12 col-md-12">
                          <div className="form-group">
                            <label className="form-label">Location</label>
                            <Form.Control
                              className="form-control form-select select2"
                              name="location"
                              value={saveModal.location}
                              onChange={this.handleField}
                              as="select"
                              required
                            >
                              <option value={""}>Select Location</option>
                              {locationList.map((items, i) => {
                                return (
                                  <option value={items.name} key={i}>
                                    {items.name}
                                  </option>
                                );
                              })}
                            </Form.Control>
                          </div>
                        </div>

                        <div className="col-sm-12 col-md-12">
                          <div className="form-group">
                            <MultipleSelect />
                          </div>
                        </div>

                        <div className="col-sm-12 col-md-12">
                          <label
                            htmlFor="exampleInputEmail1"
                            className="form-label"
                          >
                            Phone Number:
                          </label>
                          <div className="d-flex">
                            <span
                              className="btn btn-sm btn-light border font-weight-bold"
                              style={{ paddingTop: "10px" }}
                            >
                              +267
                            </span>
                            <Form.Control
                              required
                              type="number"
                              className="form-control form-control-sm"
                              name="phonenumber"
                              value={saveModal.phonenumber}
                              onChange={this.handlePhoneNumber}
                            />
                          </div>
                        </div>
                        <div className="col-sm-12 col-md-12 mt-4">
                          <div className="form-group mb-0">
                            <label className="form-label">Address</label>
                            <Form.Control
                              required
                              type="text"
                              className="form-control"
                              name="address"
                              value={saveModal.address}
                              onChange={this.handleField}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card-footer text-center">
                      {editData ? (
                        <>
                          <button
                            type="submit"
                            className="btn btn-success"
                            onClick={() => handleUpdatePost(saveModal)}
                          >
                            Update Post
                          </button>
                          <button
                            type="submit"
                            className="btn btn-danger"
                            onClick={handleCloseEditAdd}
                          >
                            Cancel
                          </button>
                        </>
                      ) : (
                        <button
                          type="submit"
                          className="btn btn-success"
                          onClick={this.handlePostAdd}
                        >
                          Submit Now
                        </button>
                      )}
                    </div>
                  </Form>
                </div>
              </div>
              <div className="col-lg-4 col-md-12">
                <div className="card">
                  <div className="card-header">
                    <h3 className="card-title">Terms And Conditions</h3>
                  </div>
                  <div className="card-body">
                    <ul className="list-unstyled widget-spec mb-0">
                      <li>
                        <i
                          className="fa fa-check text-success"
                          aria-hidden="true"
                        />
                        Money Not Refundable
                      </li>
                      <li>
                        <i
                          className="fa fa-check text-success"
                          aria-hidden="true"
                        />
                        You can renew your Premium ad after experted.
                      </li>
                      <li>
                        <i
                          className="fa fa-check text-success"
                          aria-hidden="true"
                        />
                        Premium ads are active for depend on package.
                      </li>
                      <li className="ms-5 mb-0">
                        <a
                          href="tips.html"
                          onClick={(e) => {
                            e.preventDefault();
                          }}
                        >
                          {" "}
                          View more..
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="card mb-0">
                  <div className="card-header">
                    <h3 className="card-title">Safety Tips For Buyers</h3>
                  </div>
                  <div className="card-body">
                    <ul className="list-unstyled widget-spec mb-0">
                      <li>
                        <i
                          className="fa fa-check text-success"
                          aria-hidden="true"
                        />
                        Meet Seller at public Place
                      </li>
                      <li>
                        <i
                          className="fa fa-check text-success"
                          aria-hidden="true"
                        />
                        Check item before you buy
                      </li>
                      <li>
                        <i
                          className="fa fa-check text-success"
                          aria-hidden="true"
                        />
                        Pay only after collecting item
                      </li>
                      <li className="ms-5 mb-0">
                        <a
                          href="tips.html"
                          onClick={(e) => {
                            e.preventDefault();
                          }}
                        >
                          {" "}
                          View more..
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*/Add posts-section*/}
      </React.Fragment>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(PostAdd);
