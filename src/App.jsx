    /* COMPONENTE */
import ItemCount from "./components/ItemCount";
import ItemListContainer from "./components/ItemListContainer";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";


function App() {
return (

  /* SIEMPRE UTILIZARLO DENTRO DE UN DIV,
    SINO, NO LO DETECTA */
<div>
  <Navbar  />
  <ItemCount  />
  <ItemListContainer  />
  <Footer  />
</div>
    
  );
}

export default App;
