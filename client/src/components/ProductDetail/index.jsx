import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getProducts } from '../../state/pd';
import ProductInformation from './ProductInformation.jsx';
import ProductOverview from './ProductOverview.jsx';

const axios = require('axios');

export default function ProductDetail() {
  const { products, currentProduct, currentProductStyles, loading } = useSelector((state) => state.pd);
  const dispatch = useDispatch();
  // eslint-disable-next-line no-unused-vars
  // const [products, setProducts] = useState([]);
  // const [target, setTarget] = useState(null);
  // const [styles, setStyles] = useState([]);

  useEffect(() => {
    dispatch(getProducts());
    // axios.get('/products')
    //   .then((prodsResp) => {
    //     setProducts(prodsResp.data);
    //     const { id } = prodsResp.data[0];
    //     axios.get(`/products/${id}`)
    //       .then((targetResp) => {
    //         setTarget(targetResp.data);
    //         axios.get(`/products/${id}/styles`)
    //           .then((targetStyles) => {
    //             setStyles(targetStyles.data.results);
    //           });
    //       });
    //   })
    //   .catch((err) => console.log(err));
  }, []);

  // if (styles.length) {
  //   return (
  //     <div className="pd-flex-container">
  //       <h1 className="nav-bar">Navigation Bar with Logo</h1>
  //       <h4 className="site-wide-announcement">SITE-WIDE ANNOUNCEMENT MESSAGE! - <b>NO REFUNDS!!!</b></h4>
  //       <ProductInformation product={target} styles={styles} />
  //       <ProductOverview product={target} />
  //       ================================================
  //     </div>
  //   );
  // }
  // return (
  //   <div>
  //     <h1>LOADING... </h1>
  //   </div>
  // );

  if (!loading) {
    return (
      <div className="pd-flex-container">
        <h1 className="nav-bar">Navigation Bar with Logo</h1>
        <h4 className="site-wide-announcement">SITE-WIDE ANNOUNCEMENT MESSAGE! - <b>NO REFUNDS!!!</b></h4>
        <ProductInformation product={currentProduct} styles={currentProductStyles} />
        <ProductOverview />
        ================================================
      </div>
    );
  }
  return (
    <div>
      <h1>LOADING... </h1>
    </div>
  );
}
