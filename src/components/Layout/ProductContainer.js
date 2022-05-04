import classes from "./ProductContainer.module.css";
import ProductForm from "../ProductPage/ProductForm";

const ProductContainer = () => {
  return (
    <section className={classes["main-container"]}>
      <div className={classes.grid}>
        <div className={classes["left-container"]}></div>
       <ProductForm />
      </div>
    </section>
  );
};

export default ProductContainer;
