import "./ItemListContainer.css";
import ItemCount from "./ItemCount";

function ItemListContainer(props) {
  return (
    <div className="card" style={{ backgroundColor: "#0d1334" }}>
      <div className="card-content">
        <div class="content has-text-centered has-text-link-dark is-size-2">
          {props.greeting}
        </div>
      </div>
      <ItemCount stock={5} initial={1} />
    </div>
  );
}

export default ItemListContainer;
