"use client";
import { useDispatch, useSelector } from "react-redux";
import styles from "./CartWindow.module.css";
import { toggleCartWindow } from "@/app/store/VisualSlice";
import { useEffect, useState } from "react";
import Image from "next/image";
import ButtonAccent from "../Buttons/buttonAccent/ButtonAccent";
import ButtonGreen from "../Buttons/buttonGreen/ButtonGreen";
import { addCartProduct } from "@/app/store/CartSlice";
import { setAuthUser } from "@/app/store/AuthSlice";
export default function CartWindow() {
  const dispatch = useDispatch();

  const Cart = useSelector((state) => state.Cart.cart);
  const AuthUser = useSelector(state => state.Auth.AuthUser);

  useEffect(() => {
    console.log(Cart)
  },[Cart])
  const Product = useSelector((state) => state.Visual.CartWindowProduct);
  const [imageError, setImageError] = useState(false);
  const [quantity, setQuantity] = useState(1);
  return (
    <div className={styles.CartWindow}>
      <div className={styles.WhiteWindow}>
        <h2 className="title">Добавить в корзину</h2>
        <div className={styles.ProductInfo}>
          <div className={styles.ProductImage}>
            <Image
              onLoadingComplete={(result) => {
                if (result.naturalWidth === 0) setImageError(true);
              }}
              onError={() => setImageError(true)}
              onEmptied={() => setImageError(true)}
              src={
                !imageError
                  ? Product.img
                  : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ4do_ZTg3ZtQk4EaJC0xzM1Txc0Phc6Q1_w&s"
              }
              alt="Food image"
              fill
              style={{ objectFit: "contain" }}
            ></Image>
          </div>
          <div className={styles.ProductText}>
            <h4>{Product.name}</h4>
            <p>{Product.dsc}</p>
            <div className={styles.row}>
              <ButtonGreen
                onClick={() => {
                  if (quantity > 1) {
                    setQuantity(quantity - 1);
                  } else {
                    alert("minimum");
                  }
                }}
              >
                -
              </ButtonGreen>
              <h4>{quantity}</h4>
              <ButtonAccent
                onClick={() => {
                  if (quantity < 20) {
                    setQuantity(quantity + 1);
                  } else {
                    alert("maximum");
                  }
                }}
              >
                +
              </ButtonAccent>
            </div>
            <div className={styles.row}>
              {Math.round(Product.price * quantity)}$ {Product.rate}⭐️
            </div>
            <div className={styles.row}>
              <ButtonGreen
                onClick={() => {
                  dispatch(toggleCartWindow());
                }}
              >
                Отмена
              </ButtonGreen>
              <ButtonAccent
                onClick={() => {
                  dispatch(addCartProduct({ ...Product, quantity: quantity }));
                  console.log({ ...Product, quantity: quantity })
                  dispatch(toggleCartWindow());
                  // dispatch(setAuthUser({...AuthUser,cart:Cart}))
                  localStorage.setItem("signedUser",JSON.stringify({...AuthUser,cart:Cart}))
                }}
              >
                Добавить
              </ButtonAccent>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
