import React, { useEffect, useState } from "react";
import { callApi } from "../Utitlies/callAPI";

export default function ProductCard({
  items,
  handlePageKey,
  handleEditAdd,
  handleDeleteAdd,
  callFrom,
}) {
  useEffect(() => {
    getReview();
  });

  const [productRating, setProductRating] = useState(0);
  const getReview = async () => {
    const addsReview = await callApi(`/review/ad/${items._id}`);
    let sumAllReview = 0;
    let averageReview = 0;
    addsReview.forEach((element) => {
      sumAllReview += parseInt(element.rating) || 0;
    });
    averageReview = sumAllReview / (addsReview || []).length || 0;
    setProductRating(parseInt(averageReview));
  };

  const tagsList = ["#tag 1", "#tag 2", "#tag 3"];

  const showStar = () => {
    if (productRating === 0) {
      return (
        <React.Fragment>
          <i class="fa fa-star"></i>
          <i class="fa fa-star"></i>
          <i class="fa fa-star"></i>
          <i class="fa fa-star"></i>
          <i class="fa fa-star"></i>
        </React.Fragment>
      );
    } else if (productRating === 1) {
      return (
        <React.Fragment>
          <i class="fa fa-star" style={{ color: "yellow" }}></i>
          <i class="fa fa-star "></i>
          <i class="fa fa-star "></i>
          <i class="fa fa-star "></i>
          <i class="fa fa-star "></i>
        </React.Fragment>
      );
    } else if (productRating === 2) {
      return (
        <React.Fragment>
          <i class="fa fa-star" style={{ color: "yellow" }}></i>
          <i class="fa fa-star" style={{ color: "yellow" }}></i>
          <i class="fa fa-star "></i>
          <i class="fa fa-star "></i>
          <i class="fa fa-star "></i>
        </React.Fragment>
      );
    } else if (productRating === 3) {
      return (
        <React.Fragment>
          <i class="fa fa-star" style={{ color: "yellow" }}></i>
          <i class="fa fa-star" style={{ color: "yellow" }}></i>
          <i class="fa fa-star" style={{ color: "yellow" }}></i>
          <i class="fa fa-star "></i>
          <i class="fa fa-star "></i>
        </React.Fragment>
      );
    } else if (productRating === 4) {
      return (
        <React.Fragment>
          <i class="fa fa-star" style={{ color: "yellow" }}></i>
          <i class="fa fa-star" style={{ color: "yellow" }}></i>
          <i class="fa fa-star" style={{ color: "yellow" }}></i>
          <i class="fa fa-star" style={{ color: "yellow" }}></i>
          <i class="fa fa-star "></i>
        </React.Fragment>
      );
    } else if (productRating === 5) {
      return (
        <React.Fragment>
          <i class="fa fa-star" style={{ color: "yellow" }}></i>
          <i class="fa fa-star" style={{ color: "yellow" }}></i>
          <i class="fa fa-star" style={{ color: "yellow" }}></i>
          <i class="fa fa-star" style={{ color: "yellow" }}></i>
          <i class="fa fa-star" style={{ color: "yellow" }}></i>
        </React.Fragment>
      );
    }
  };
  return (
    <div className="col-lg-4 col-md-12 col-xl-3">
      <div className="card overflow-hidden">
        {/* <div className="ribbon ribbon-top-left text-danger">
      <span className="bg-danger">
        featured
      </span>
    </div> */}
        <div className="item-card9-img">
          <div className="item-card9-imgs">
            <img
              src="../assets/images/products/h4.png"
              alt="img"
              className="cover-image"
            />
          </div>
          <div className="item-card9-icons">
            {callFrom === "MyAds" ? (
              <React.Fragment>
                <a
                  href="#"
                  onClick={(e) => handleEditAdd(e, items)}
                  className="item-card9-icons1 wishlist"
                >
                  <i className="fa fa fa-edit" />
                </a>
                <a
                  href="#"
                  onClick={(e) => handleDeleteAdd(e, items)}
                  className="item-card9-icons1 wishlist"
                >
                  <i className="fa fa fa-trash" />
                </a>
              </React.Fragment>
            ) : (
              <a
                onClick={(e) => {
                  e.preventDefault();
                }}
                href="#"
                className="item-card9-icons1 wishlist"
              >
                <i className="fa fa fa-heart-o" />
              </a>
            )}
          </div>
        </div>
        <div className="card-body">
          <div className="item-card9">
            {items.category}

            <a
              href="#"
              onClick={(e) => {
                handlePageKey(e, 101, items);
              }}
              className="text-dark mt-2"
            >
              <h4 className="font-weight-semibold mt-1">{items.title}</h4>
            </a>
            <p>{items.description}</p>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                flexDirection: "row",
                flexWrap: "wrap",
              }}
            >
              {tagsList.map((item) => {
                return (
                  <p
                    style={{
                      margin: "0 0 4px 4px",
                      padding: "2px 4px",
                      borderRadius: "4px",
                      border: "1px solid rgba(0, 0, 0, 0.19)",
                      cursor: "pointer",
                    }}
                  >
                    {item}
                  </p>
                );
              })}
            </div>
          </div>
        </div>
        <div className="card-footer">
          <div className="item-card9-footer d-flex">
            <div className="item-card9-cost">
              <h4
                className="
                    text-dark
                    font-weight-semibold
                    mb-0
                    mt-0
                    "
              >
                BWP {items.price}
              </h4>
            </div>
            <div class="ms-auto">{showStar()}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
