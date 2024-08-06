import React from "react";
import { FaStar } from "react-icons/fa6";
import {useDispatch} from "react-redux";
import { addToCart } from "../redux/slices/CartSlice";

const FoodCard = ({id, img, rating, name, desc, price, handleToast}) => {

  const dispatch = useDispatch();

  return(
    <div className="font-bold w-[250px] bg-white p-5 flex flex-col rounded-lg gap-2">
      <img src={img} alt="" className="w-auto h-[150px] hover:scale-110 cursor-grab transition-all duration-500 ease-in-out"/>
      <div className="text-sm flex justify-between">
        <h2>{name}</h2>
        <span className="text-green-500">₹{price}</span>
      </div>
      <p className="text-sm font-normal">{desc.slice(0,50)}......</p>
      <div className="flex justify-between">
        <span className="flex justify-center items-center gap-1">
          <FaStar className="text-yellow-400" />{rating}
        </span>
        <button onClick={() => {
          dispatch(addToCart({id, rating, name, price, img, qty: 1}));
          handleToast(name);
        }} className="p-1 bg-green-500 text-white rounded-lg hover:bg-green-700 text-sm">Add to cart</button>
      </div>
    </div>
  )
}

export default FoodCard;