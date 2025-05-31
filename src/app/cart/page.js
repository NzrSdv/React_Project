"use client";
import styles from "../page.module.css";
import CartStyles from "./Cart.module.css";

import FoodList from "@/components/foodList/FoodList";
import Header from "@/components/header/Header";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCartProduct, resetCart, reWriteCartProduct, updateCartTotal } from "../store/CartSlice";
import ButtonGreen from "@/UI/Buttons/buttonGreen/ButtonGreen";
import { setCart } from "../store/UserSlice";
import { useRouter } from "next/navigation";
import { setAuthUser, toggleAuth } from "../store/AuthSlice";
export default function Cart() {
  const router = useRouter();
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.Auth.isAuth);
  const AuthUser = useSelector((state) => state.Auth.AuthUser);
  const Cart = useSelector((state) => state.Cart.cart);
  const CartSum = useSelector((state) => state.Cart.cartSum);
  const Users = useSelector((state) => state.User.Users);

  useEffect(() => {
    if(isAuth){

    }
    else{
      router.push("/")
    }
  }, [isAuth]);

  useEffect(() => {
    if (localStorage.getItem("signedUser")) {
      dispatch(setAuthUser(JSON.parse(localStorage.getItem("signedUser"))));
      dispatch(toggleAuth());
    }
  }, []);
  return (
    <div
      className={styles.Layout}
      style={{ alignItems: "center", gap: "60px" }}
    >
      <Header />

      <div className={CartStyles.Cart}>
        <div className={CartStyles.Upper}>
          <h2 className="title">Total:{CartSum} $</h2>
          <ButtonGreen
            onClick={() => {
              dispatch(resetCart());
              dispatch(updateCartTotal());
              dispatch(setCart({ id: AuthUser.id, cart: AuthUser.cart }));
              localStorage.removeItem("cart")
              localStorage.setItem("signedUser",JSON.stringify({...AuthUser,cart:[]}))
            }}
          >
            Купить все
          </ButtonGreen>
        </div>
        <FoodList FoodList={Cart} />
      </div>
    </div>
  );
}
