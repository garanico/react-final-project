import { useState, useEffect } from "react";
import './styles/App.css';

//components
import ProductList from "./components/ProductList";


//resources
import { getProducts } from "./utils.js";


function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    getProducts().then((data) => setItems(data)); 
  },[]
  )

  return (
    
    <div className="App">
      <ProductList items ={items} />

    </div>
    
  
  );
}


export default App;
