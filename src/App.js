import "./App.css";
import { useState } from "react";
import bakeryData from "./assets/bakery-data.json";
import { BakeryItem } from "./components/BakeryItem";

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

function App() {
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */
  const [count, setCount] = useState(0);
  
  function handleClick(input1, input2) {
    setCount(count +1);
    displayCart(input1, input2);
  }

  const [price, setPrice] = useState(0);
  function displayPrice(input) {
    setPrice(price + input)
  }

  const [cart, setCart] = useState([]);
  function displayCart(input1, input2){
    setCart(cart.concat(input1))
    displayPrice(input2)
  }

  return (
    <div className="App">
      <h1>Ria's Bakery</h1> {/* TODO: personalize your bakery (if you want) */}

      {bakeryData.map((item, index) => ( // TODO: map bakeryData to BakeryItem components
        <BakeryItem key={index} item={item} addCounter={handleClick}/>
        //<p>Bakery Item {index}</p> // replace with BakeryItem component
      ))}

      <div>
        <h2>Cart</h2>
        {/* TODO: render a list of items in the cart */}
        <p> count {count} </p>
        <p> Items:{cart}</p>
        <p> Price:{price}</p>
      </div>
    </div>
  );
}

export default App;
