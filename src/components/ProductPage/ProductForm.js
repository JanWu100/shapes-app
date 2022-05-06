import classes from "./ProductForm.module.css";
import { useState, useRef } from "react";
import AddToCartButton from "../UI/Buttons/AddToCartButton";
import AddToCartQuantityInput from "../UI/Buttons/AddToCartQuantityInput";
import AddToFavouritesButton from "../UI/Buttons/AddToFavouritesButton";
import ColorSelectionBadge from "./ColorSelectionBadge";

const ProductForm = (props) => {
  const availableColors = props.products[0].colors;
  const [isPicked, setIsPicked] = useState("");

  const onSelectedColorHandler = (selectedColor) => {
    // myRef.current.value = selectedColor;
    // console.log(myRef.current.value)
    setIsPicked(selectedColor);
  };

  return (
    <div className={classes["right-container"]}>
      <span className={classes["product-name"]}>Nowy produkt ze uhuhu 120</span>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer finibus
        sit amet tortor aliquam suscipit.{" "}
      </p>
      <div>
        <span className={classes["product-price"]}>$234</span>
        <span> 50%</span>
      </div>
      <div className={classes["colors-container"]}>
        {availableColors.map((color, index) => {
          return (
            <ColorSelectionBadge
              selected={isPicked}
              selectedColor={onSelectedColorHandler}
              id={index}
              key={color}
              className={`${classes.badge} ${
                isPicked === index.toString()
                  ? classes.selected
                  : classes.notselected
              }  `}
            >
              {color}
            </ColorSelectionBadge>
          );
        })}
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
        <AddToFavouritesButton />
      </div>
    </div>
  );
};

export default ProductForm;
