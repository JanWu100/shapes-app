import classes from "./ProductForm.module.css";
import AddToCartButton from "../UI/AddToCartButton";
import AddToCartQuantityInput from "../UI/AddToCartQuantityInput";
import AddToFavouritesButton from "../UI/AddToFavouritesButton";

const ProductForm = () => {
  return (
    <div className={classes["right-container"]}>
      <span className={classes["product-name"]}>Nowy produkt ze uhuhu 120</span>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer finibus
        sit amet tortor aliquam suscipit.{" "}
      </p>
      <div>
        <span className={classes["product-price"]}>$234</span>
        <span>50%</span>
      </div>
      <div className={classes["colors-container"]}>
        <div className={classes.color}>RED</div>
        <div className={classes.color}>BLUE</div>
        <div className={classes.color}>GREEN</div>

      </div>
      <p className={classes["long-desc"]}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer finibus
        sit amet tortor aliquam suscipit. Proin nibh est, maximus nec arcu eu,
        bibendum volutpat eros. Pellentesque sit amet fermentum quam, non
        imperdiet dui. Vestibulum lorem magna, laoreet sit amet neque in,
        condimentum consequat justo.
      </p>
      <div className={classes["order-container"]}>
        <AddToCartQuantityInput />

        <AddToCartButton />
      </div>
      <AddToFavouritesButton />
    </div>
  );
};

export default ProductForm;
