import classes from "./ProductDisplay.module.css";

const ProductDisplay = (props) => {

const onMiniPictureHandler = () => {

}

  return (
    <div className={classes["left-container"]}>
      <div className={classes.mini}>
        <button className={classes["mini-picture"]} onClick={onMiniPictureHandler}>
          <img src={props.products[0].pictures[0]}></img>
        </button>
        <button className={classes["mini-picture"]}>
          <img src={props.products[0].pictures[1]}></img>
        </button>
        <button className={classes["mini-picture"]}>
          <img src={props.products[0].pictures[2]}></img>
        </button>
      </div>

      <div className={classes.picture}>
        <img src={props.products[0].pictures[0]}></img>
      </div>
    </div>
  );
};

export default ProductDisplay;
