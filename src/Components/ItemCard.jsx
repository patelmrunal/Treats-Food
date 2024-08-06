import React from "react";
import { GoPlus } from "react-icons/go";
import { LuMinus } from "react-icons/lu";
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { removeFromCart, incrementOty, decrementQty} from "../redux/slices/CartSlice";
import { toast } from "react-hot-toast";

const ItemCard = ({id, price, img, qty, name}) => {

  const dispatch = useDispatch()
  return(
    <div className="flex gap-2 shadow-md rounded-lg p-2 mb-3">
      <MdDelete 
          onClick={() => {
            dispatch(removeFromCart({id, price, img, qty, name}));
            toast(`${name} Removed!`, {
              icon: '👋',
            });
          }} 
          className="absolute right-7 text-gray-600 cursor-pointer"/>
      <img src={img} alt="" className="w-[50px] h-[50px]"/>
      <div className="leading-5">
        <h2 className="font-bold text-gray-800">{name}</h2>
        <div className="flex justify-between">
          <span className="text-green-500 font-bold">₹{price}</span>
          <div className="flex justify-between gap-2 absolute right-7">
            <LuMinus onClick={() => qty > 1 ? dispatch(decrementQty({id})) : (qty=0)} className="border-2 border-gray-600 text-gray-600 hover:text-white hover:bg-green-500 hover:border-none rounded-md text-xl transition-all ease-linear cursor-pointer"/>
            <span>{qty}</span>
            <GoPlus onClick={() => qty >= 1 ? dispatch(incrementOty({id})) : (qty=0)} className="border-2 border-gray-600 text-gray-600 hover:text-white hover:bg-green-500 hover:border-none rounded-md text-xl transition-all ease-linear cursor-pointer"/>
          </div>
        </div>
      </div>
    </div>
  )}


  export default ItemCard;