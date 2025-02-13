"use client";

import FoodList from "@/components/foodList/FoodList";
import Header from "@/components/header/Header";
import { useDispatch, useSelector } from "react-redux";

export default function Cart() {
  const dispatch = useDispatch();
  const Cart = useSelector((state) => state.Cart.cart);
  console.log(Cart)
  return (<div>
    <Header/>
    <FoodList FoodList={Cart}></FoodList>
    </div>);
}
