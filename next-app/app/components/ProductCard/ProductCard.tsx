// "use client"; - make whole component a client component
import React from "react";
import AddToCart from "../AddToCart";
// import styles from "./ProductCard.module.css"; - for using css modules

const ProductCard = () => {
  return (
    // <div className={styles.card}> - use in conjunction with css modules
    // <div className="p-5 my-5 bg-sky-400 text-white text-xl hover:bg-sky-500">
    <div>
      <AddToCart />
    </div>
  );
};

export default ProductCard;
