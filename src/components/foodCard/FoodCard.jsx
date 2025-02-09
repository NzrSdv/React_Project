"use client";
import { useState } from "react";
import { useSelector } from "react-redux";

import Image from "next/image";
import styles from "./FoodCard.module.css";
import ButtonAccent from "@/UI/Buttons/buttonAccent/ButtonAccent";

import { useRouter } from "next/navigation";

export default function FoodCard({ Food }) {
  const router = useRouter();

  const [imageError, setImageError] = useState(false);

  const isAuth = useSelector((state) => state.Auth.isAuth);

  const id = Food.id;
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
      <div className={styles.CardRow}>
        <ButtonAccent
          onClick={() => {
            router.push("/signIn");
          }}
        >
          {Food.price}$
        </ButtonAccent>
        {Food.rate}⭐️
      </div>
    </div>
  );
}
