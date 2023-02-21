    /* COMPONENTE */
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Error404 from "./components/Error404"

import {BrowserRouter, Routes, Route} from "react-router-dom"


function App() {
return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route path={"/"} element={<ItemListContainer/>}/>
          <Route path={"/category/:id"} element={<ItemListContainer/>}/>
          <Route path={"/item/:id"} element={<ItemDetailContainer/>}/>
          <Route path={"*"} element={<Error404/>}/>
        </Routes>
        <Error404 />
        <ItemListContainer  />
        <Footer  />
      </div>
    </BrowserRouter>
  );
}

export default App;
