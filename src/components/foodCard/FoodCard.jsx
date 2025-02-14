"use client";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Image from "next/image";
import styles from "./FoodCard.module.css";
import ButtonAccent from "@/UI/Buttons/buttonAccent/ButtonAccent";

import { usePathname, useRouter } from "next/navigation";
import { toggleCartWindow,setCartWindowProduct } from "@/app/store/VisualSlice";
import ButtonGreen from "@/UI/Buttons/buttonGreen/ButtonGreen";
import { removeCartProduct, updateCartTotal } from "@/app/store/CartSlice";

export default function FoodCard({ Food }) {
  const dispatch = useDispatch();
  const router = useRouter();
  const pathname = usePathname();

  const [imageError, setImageError] = useState(false);

  const isAuth = useSelector((state) => state.Auth.isAuth);

  const id = Food.id;

  function setAddWindowProduct(Product){
    dispatch(setCartWindowProduct(Product))
  }

  function showAddWindow(){
    dispatch(toggleCartWindow())
  }
  return (
    <div className={styles.Card}>
      <div className={styles.CardImage}>
        <Image
          onLoadingComplete={(result) => {
            if (result.naturalWidth === 0) setImageError(true);
          }}
          onError={() => setImageError(true)}
          onEmptied={() => setImageError(true)}
          src={
            !imageError
              ? Food.img
              : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ4do_ZTg3ZtQk4EaJC0xzM1Txc0Phc6Q1_w&s"
          }
          alt="Food image"
          fill
          style={{ objectFit: "contain" }}
        ></Image>
      </div>
      <h4 className={styles.CardTitle}>{Food.name}</h4>
      <p className={styles.CardDescription}>{Food.dsc}</p>
      {pathname.includes("cart") && <>{Food.quantity} штук</>}
      <div className={styles.CardRow}>
        {pathname.includes("cart") ?
        <ButtonGreen
        
        onClick={() => {
          if(isAuth){
           dispatch(removeCartProduct(Food.id))
           dispatch(updateCartTotal())
          }
          else{
           router.push("/signIn");
          }
         }}>
{Math.round(Food.price * Food.quantity)} $
        </ButtonGreen>
        :<ButtonAccent
          onClick={() => {
           if(isAuth){
            setAddWindowProduct(Food);
              showAddWindow();
           }
           else{
            router.push("/signIn");
           }
          }}
        >
          {Math.round(Food.price)} $
        </ButtonAccent>}
        

          {Food.rate}⭐️
      </div>
    </div>
  );
}
