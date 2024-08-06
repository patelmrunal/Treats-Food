import React, { useState } from "react";
import { IoMdCloseCircle } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import ItemCard from "./ItemCard";
import { useSelector } from "react-redux";
import {useNavigate} from "react-router-dom";

const Cart = () => {

  const [activeCart, setActiveCart] = useState();
  const cartItems = useSelector((state) => state.cart.cart);
  const totalQty = cartItems.reduce((totalQty, item) => totalQty + item.qty, 0);
  const totalPrice = cartItems.reduce((total, item) => total + item.qty * item.price, 0);
  const navigate = useNavigate();

  return(
    <>
      <div className={`fixed right-0 top-0 lg:w-[20vw] w-full h-full bg-white p-5 mb-4 ${activeCart ? "translate-x-0": "translate-x-full"} transition-all duration-500 z-50`}>
        <div className="flex justify-between my-3 items-center">
          <span className="text-xl font-bold text-gray-800">My Order</span>
          <IoMdCloseCircle onClick={() => setActiveCart(!activeCart)} className="text-xl hover:text-red-500 cursor-pointer" />
        </div>

        {
          cartItems.length > 0 ? cartItems.map((food) => {
            return <ItemCard key={food.id} id={food.id} name={food.name} price={food.price} img={food.img} qty={food.qty}/>
          }) : <h2 className="text-center text-xl font-bold text-gray-800">Your cart is empty</h2>
        }

        <div className="absolute bottom-0">
          <h3 className="font-semibold text-gray-800">Items:{totalQty}</h3>
          <h3 className="font-semibold text-gray-800">Total Amount:{totalPrice} </h3>
          <hr className="lg:w-[18vw] w-[90vw] my-2"/>
          <button onClick={() => navigate("/Success")} className="bg-green-500 font-bold px-3 text-white py-2 lg:w-[18vw] w-[90vw] rounded-lg mb-5 hover:bg-green-700">Checkout</button>
        </div>
      </div>
        <FaShoppingCart 
        onClick={() => setActiveCart(!activeCart)}
        className={`rounded-full shadow-md bg-white text-5xl p-3 fixed bottom-4 right-4 ${totalQty > 0 && "animate-bounce delay-500 transition-all"}`}/>
    </>
  )}

  export default Cart;