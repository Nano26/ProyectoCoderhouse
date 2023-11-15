import NavBar from "./components/Navbar/Navbar";
import ItemListContainer from "./components/Item/ItemListContainer";
import "bulma/css/bulma.min.css";

function App() {
  return (
    <div>
      <NavBar />
      <ItemListContainer greeting="Bienvenido!"></ItemListContainer>
    </div>
  );
}

export default App;
