import { useEffect, useState } from "react";
import Bottle from "../Bottle/Bottle";
import "./Bottles.css";
import { addToList, getStoredCart } from "../../Utilites/Localstorage";
import Cart from "../Cart/Cart";

const Bottles = () => {
  const [bottles, setBottles] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("bottles.json")
      .then((res) => res.json())
      .then((data) => setBottles(data));
  }, []);

  useEffect(() => {
    console.log(bottles.length);
    if (bottles.length) {
      const storedCart = getStoredCart();
      const saveCart = [];
      for (const id of storedCart) {
        console.log(id);
        const bottle = bottles.find((bottle) => bottle.id === id);
        if (bottle) {
          saveCart.push(bottle);
        }
      }
      setCart(saveCart);
    }
  }, [bottles]);

  const handleAddToCart = (bottle) => {
    const newCart = [...cart, bottle];
    setCart(newCart);
    addToList(bottle.id);
  };

  return (
    <div>
      <h2>Bottles Available :{bottles.length} </h2>
      <Cart cart={cart}></Cart>

      <div className="bottle-container">
        {bottles.map((bottle) => (
          <Bottle
            key={bottle.id}
            bottle={bottle}
            handleAddToCart={handleAddToCart}></Bottle>
        ))}
      </div>
    </div>
  );
};

export default Bottles;
