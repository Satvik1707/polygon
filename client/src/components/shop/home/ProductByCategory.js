import React, { Fragment, useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import Layout from "../layout";
import { productByCategory } from "../../admin/products/FetchApi";

const apiURL = process.env.REACT_APP_API_URL;

const Submenu = ({ category }) => {
  const history = useHistory();
  return (
    <Fragment>
      {/* Submenu Section */}
      <section className="mx-4 mt-24 md:mx-12 md:mt-32 lg:mt-24">
        <div className="flex justify-between items-center">
          <div className="text-sm flex space-x-3">
            <span
              className="hover:text-yellow-700 cursor-pointer p-2"
              onClick={(e) => history.push("/")}
            >Home</span>
            <span className="text-yellow-700 cursor-default p-2">
              {category}
            </span>
          </div>
        </div>
      </section>
      {/* Submenu Section */}
    </Fragment>
  );
};

const AllProduct = ({ products }) => {
  const history = useHistory();
  const category =
    products && products.length > 0 ? products[0].pCategory.cName : "";
  return (
    <Fragment>
      <Submenu category={category} />
      <section className="m-4 md:mx-8 md:my-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products && products.length > 0 ? (
          products.map((item, index) => {
            return (
              <Fragment key={index}>
                <div className="relative col-span-1 m-2">
                  <img
                    onClick={(e) => history.push(`/products/${item._id}`)}
                    className="w-full object-cover object-center cursor-pointer"
                    src={`${apiURL}/uploads/products/${item.pImages[0]}`}
                    alt=""
                  />
                  <div className="flex items-center justify-between mt-2">
                    <div
                      className="text-black font-light truncate cursor-pointer"
                      onClick={(e) => history.push(`/products/${item._id}`)}
                    >
                      {item.pName}
                    </div>
                  </div>
                  <div>{item.pPrice} eth</div>
                </div>
              </Fragment>
            );
          })
        ) : (
          <div className="col-span-2 md:col-span-3 lg:col-span-4 flex items-center justify-center py-24 text-2xl">
            No product found
          </div>
        )}
      </section>
    </Fragment>
  );
};

const PageComponent = () => {
  const [products, setProducts] = useState(null);
  const { catId } = useParams();

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchData = async () => {
    try {
      let responseData = await productByCategory(catId);
      if (responseData && responseData.Products) {
        setProducts(responseData.Products);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Fragment>
      <AllProduct products={products} />
    </Fragment>
  );
};

const ProductByCategory = (props) => {
  return (
    <Fragment>
      <Layout children={<PageComponent />} />
    </Fragment>
  );
};

export default ProductByCategory;
