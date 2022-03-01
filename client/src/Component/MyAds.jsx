import React, { useEffect, useState } from "react";
import { ExternalJsCall } from "../Utitlies/LoadExternalJs";
import { Link } from "react-router-dom";
import Product from "./Product";
import { callApi } from "../Utitlies/callAPI";
import { allLocation } from "../Utitlies/location";
import { useSelector } from "react-redux";
import PostAdd from "./PostAdd";
import Swal from "sweetalert2";
import ProductCard from "./ProductCard";

const MyAds = () => {
  useEffect(() => {
    ExternalJsCall();
    getNonpremiumadd();
    getCategory();
    getLocation();
  }, []);
  const [searchModal, setSearchModal] = useState({
    cat: "",
    loc: "",
    title: "",
  });
  const [allAdds, setAllAdds] = useState([]);
  const [allAddsFilter, setAllAddsFilter] = useState([]);
  const [categoryList, setCategoryList] = useState([]);
  const [locationList, setLocationList] = useState([]);
  const [editAd, setEditAd] = useState({});
  const [openEditAd, setOpenEditAd] = useState(false);
  const [CurrentPageKey, setCurrentPageKey] = useState(100);
  const [seletedAdd, setSeletedAdd] = useState({});

  const userInfo = useSelector((state) => state.userInfo.payload);
  const handlePageKey = (e, key, items) => {
    setSeletedAdd(items);
    e.preventDefault();
    setCurrentPageKey(key);
  };
  const handleEditAdd = (e, items) => {
    e.preventDefault();
    setEditAd(items);
    setOpenEditAd(true);
  };
  const handleDeleteAdd = (e, items) => {
    e.preventDefault();
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const deleteAdd = await callApi(`/ad/${items._id}`, "delete");
        if (deleteAdd) {
          getNonpremiumadd();
          Swal.fire("Deleted!", "Your Post has been deleted.", "success");
        }
      }
    });
  };
  const handleCloseEditAdd = () => {
    setEditAd({});
    setOpenEditAd(false);
  };
  const handleUpdatePost = async (saveModal) => {
    const updateAdd = await callApi(`/ad/${editAd._id}`, "patch", saveModal);
    if (updateAdd) {
      getNonpremiumadd();
      handleCloseEditAdd();
    }
  };
  const getNonpremiumadd = async () => {
    const adds = await callApi("/ad/getnonpremium");
    console.log("userInfo", userInfo._id);
    const MyAds = adds.filter((items) => items.sellerid === userInfo._id);
    setAllAdds(MyAds);
    setAllAddsFilter(MyAds);
  };

  const getCategory = async () => {
    const categoryData = await callApi("/category", "get");
    setCategoryList(categoryData);
  };

  const getLocation = async () => {
    const locationData = await callApi(
      "/location",
      "get",
      null,
      null,
      null,
      "Admin"
    );

    setLocationList((locationData || []).locations || []);
  };

  const handleInput = (e) => {
    const { name, value } = e.target;
    setSearchModal({
      ...searchModal,
      [name]: value,
    });
  };
  useEffect(() => {
    hanldeSearch();
  }, [searchModal]);

  const hanldeSearch = () => {
    let allAddsforFilter = [...allAdds];
    const { cat, loc, title } = searchModal;
    let filterAdds = allAddsforFilter;
    if (cat && loc && title) {
      filterAdds = allAddsforFilter.filter(
        (items) =>
          items.category === cat &&
          items.location === loc &&
          items.title === title
      );
    } else {
      if (cat) {
        filterAdds = allAddsforFilter.filter((items) => items.category === cat);
      }
      if (loc) {
        filterAdds = allAddsforFilter.filter((items) => items.category === loc);
      }
      if (title) {
        filterAdds = allAddsforFilter.filter((items) =>
          (items.title.toLowerCase() || {}).includes(
            (title || {}).toLowerCase()
          )
        );
      }
    }
    setAllAddsFilter(filterAdds);
  };

  const browseCategory = (
    <React.Fragment>
      <div>
        {/*Sliders Section*/}
        <div>
          <div
            className="cover-image sptb-1 bg-background"
            data-bs-image-src="../assets/images/banners/banner1.jpg"
          >
            <div className="header-text1 mb-0">
              <div className="container">
                <div className="row">
                  <div className="col-xl-8 col-lg-12 col-md-12 d-block mx-auto">
                    <div className="text-center text-white">
                      <h1 className>
                        <span className="font-weight-bold">
                          {(allAdds || []).length}
                        </span>{" "}
                        Product{(allAdds || []).length > 1 ? "s" : ""}
                      </h1>
                    </div>
                    <div className="search-background bg-transparent mb-0">
                      <div className="form row g-0">
                        <div className="form-group col-xl-10 col-lg-9 col-md-12 mb-0">
                          <input
                            type="text"
                            className="
                                form-control
                                input-lg
                                border-end-0
                                br-be-0 br-te-0
                            "
                            id="text"
                            name="title"
                            placeholder="What are you looking for?"
                            onChange={handleInput}
                          />
                        </div>
                        <div className="col-xl-2 col-lg-3 col-md-12 mb-0">
                          <button
                            className="btn btn-lg btn-block btn-primary br-bs-0 br-ts-0"
                            onClick={hanldeSearch}
                          >
                            Search
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* /header-text */}
          </div>
        </div>
        {/*/Sliders Section*/}
        {/*Breadcrumb*/}
        <div className="bg-white border-bottom">
          <div className="container">
            <div className="page-header">
              {/* <h4 className="page-title">Product list</h4> */}
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link to="/">Home</Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  My Products
                </li>
              </ol>
            </div>
          </div>
        </div>
        {/*/Breadcrumb*/}
        {/*Add listing*/}
        <section className="sptb">
          <div className="container">
            <div className="row">
              <div className="col-xl-12 col-lg-12 col-md-12">
                {/*Add lists*/}
                <div className="mb-lg-0">
                  <div className>
                    <div className="item2-gl">
                      <div className="mb-0">
                        <div className>
                          <div className="row">
                            <div className="col-lg-3 col-md-12">
                              <h6 className="mb-0 mt-2">
                                Showing 1 to {(allAddsFilter || []).length} of{" "}
                                {(allAdds || []).length} entries
                              </h6>
                            </div>
                            <div className="col-lg-5 col-md-12 d-flex">
                              <select
                                className="form-control"
                                name="cat"
                                value={searchModal.cat}
                                onChange={handleInput}
                              >
                                <option value="">Select Category</option>
                                {categoryList.map((items) => {
                                  return (
                                    <option value={items.name} key={items.id}>
                                      {items.name}
                                    </option>
                                  );
                                })}
                              </select>
                            </div>
                            <div className="col-lg-4 col-md-12 d-flex">
                              <select
                                className="form-control"
                                name="loc"
                                value={searchModal.loc}
                                onChange={handleInput}
                              >
                                <option value="">Select Location</option>
                                {locationList.map((items, i) => {
                                  return (
                                    <option value={items.name} key={i}>
                                      {items.name}
                                    </option>
                                  );
                                })}
                              </select>
                            </div>
                            {/* <div className="col-lg-2 col-md-12">
                              <select className="form-control form-control-sm">
                                <option value="volvo">Sort by</option>
                                <option value="saab">Date</option>
                                <option value="mercedes">Price</option>
                              </select>
                            </div> */}
                          </div>
                        </div>
                      </div>
                      <div className="tab-content">
                        <div className="tab-pane active" id="tab-12">
                          <div className="row">
                            {(allAddsFilter || []).map((items) => {
                              return (
                                <ProductCard
                                  items={items}
                                  handlePageKey={handlePageKey}
                                  handleEditAdd={handleEditAdd}
                                  handleDeleteAdd={handleDeleteAdd}
                                  callFrom="MyAds"
                                />
                              );
                            })}
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* <div className="center-block text-center">
                      <ul className="pagination mb-5">
                        <li className="page-item page-prev disabled">
                          <a className="page-link" href="#" tabIndex={-1}>
                            Prev
                          </a>
                        </li>
                        <li className="page-item active">
                          <a className="page-link" href="#">
                            1
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" href="#">
                            2
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" href="#">
                            3
                          </a>
                        </li>
                        <li className="page-item page-next">
                          <a className="page-link" href="#">
                            Next
                          </a>
                        </li>
                      </ul>
                    </div> */}
                  </div>
                </div>
                {/*/Add lists*/}
              </div>
            </div>
          </div>
        </section>
        {/*/Add Listings*/}
      </div>
    </React.Fragment>
  );
  const editAdPage = (
    <PostAdd
      editData={editAd}
      handleCloseEditAdd={handleCloseEditAdd}
      handleUpdatePost={handleUpdatePost}
    />
  );
  const product = <Product seletedAdd={seletedAdd} />;

  if (CurrentPageKey === 100) {
    if (!openEditAd) {
      return <React.Fragment>{browseCategory}</React.Fragment>;
    } else {
      return <React.Fragment>{editAdPage}</React.Fragment>;
    }
  } else if (CurrentPageKey === 101) {
    return <React.Fragment>{product}</React.Fragment>;
  }
};
export default MyAds;
