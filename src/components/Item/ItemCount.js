import { useState } from "react";
import "./ItemCount.css";

const ItemCount = (props) => {
  const [count, setCount] = useState(props.initial);

  const onClickAdd = () => {
    if (count < props.stock) {
      setCount(count + 1);
    }
  };

  const onClickSub = () => {
    if (count > props.initial) {
      setCount(count - 1);
    }
  };

  return (
    <div className="itemAdd">
      <div className="counter">
        <button className="button" onClick={onClickSub}>
          -
        </button>
        <p className="box">{count}</p>
        <button className="button" onClick={onClickAdd}>
          +
        </button>
      </div>
      <button className="button is-link" /*onClick={props.onAdd} */>Agregar al carrito</button>
    </div>
  );
};

export default ItemCount;
