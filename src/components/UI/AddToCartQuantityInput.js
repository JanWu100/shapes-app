import classes from "./AddToCartQuantityInput.module.css";
import { useState } from "react";

const AddToCartQuantityInput = () => {
  const [quantity, setQuantity] = useState(1)

  const onDecreaseHandler = () => {
    if (quantity === 1) {
      return
    } else {
      setQuantity((prevState)=>{
        return +prevState-1
      })
    }
    

  }

  const onIncreaseHandler = () => {
    if (quantity === 20) {
      return
    }
    setQuantity((prevState)=>{
      return +prevState+1
    })
  }

  return (
    <div className={classes.amd}>
      <button className={classes.decrease} onClick={onDecreaseHandler}>-</button>
      <input
        className={classes.input}
        type="number"
        min="1"
        max="5"
        step="1"
        value={quantity}
        disabled
      ></input>

      <button className={classes.increase} onClick={onIncreaseHandler}>+</button>
    </div>
  );
};

export default AddToCartQuantityInput;
