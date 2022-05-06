import classes from "./ProductContainer.module.css";
import ProductForm from "../ProductPage/ProductForm";
import ProductDisplay from "../ProductPage/ProductDisplay";

const ProductContainer = (props) => {
  return (
    <section className={classes["main-container"]}>
      <div className={classes.grid}>
        <ProductDisplay products={props.products}/>
        <ProductForm products={props.products}/>
      </div>
    </section>
  );
};

export default ProductContainer;
