import React, { Fragment, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import { getAllProduct } from "../../admin/products/FetchApi";
import { HomeContext } from "./index";
import { Container } from "react-bootstrap";

const apiURL = process.env.REACT_APP_API_URL;

const SingleProduct = (props) => {
  const { data, dispatch } = useContext(HomeContext);
  const { products } = data;
  const history = useHistory();

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchData = async () => {
    dispatch({ type: "loading", payload: true });
    try {
      let responseData = await getAllProduct();
      setTimeout(() => {
        if (responseData && responseData.Products) {
          dispatch({ type: "setProducts", payload: responseData.Products });
          dispatch({ type: "loading", payload: false });
        }
      }, 500);
    } catch (error) {
      console.log(error);
    }
  };

  if (data.loading) {
    return (
      <div className="col-span-2 md:col-span-3 lg:col-span-4 flex items-center justify-center py-24">
        <svg
          className="w-12 h-12 animate-spin text-black"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
          ></path>
        </svg>
      </div>
    );
  }
  return (
    <Fragment>
      {products && products.length > 0 ? (
        products.map((item, index) => {
          return (
            <Fragment key={index}>
              <Container>
                {/* <Row> */}
                <div className="card-group">
                  <div className="card relative col-span-1 m-2 p-1 border w-auto h-100">
                    <img
                      onClick={(e) => history.push(`/products/${item._id}`)}
                      className="card-img-top w-full object-cover object-center cursor-pointer"
                      src={`${apiURL}/uploads/products/${item.pImages[0]}`}
                      alt=""
                    />
                    <div className="card-footer flex items-center justify-between mt-2">
                      <div
                        className="text-black truncate cursor-pointer"
                        onClick={(e) => history.push(`/products/${item._id}`)}
                      >
                        {item.pName}
                      </div>
                      <div className="card-footer flex items-center space-x-1">
                        <span>
                          <div className="">{item.pPrice} eth</div>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* </Row> */}
              </Container>
            </Fragment>
          );
        })
      ) : (
        <div className="col-span-2 md:col-span-3 lg:col-span-4 flex items-center justify-center py-24 text-2xl">
          No product found
        </div>
      )}
    </Fragment>
  );
};

export default SingleProduct;
