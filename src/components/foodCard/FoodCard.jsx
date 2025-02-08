"use client";
import Image from "next/image";
import styles from "./FoodCard.module.css";
import { useState } from "react";
export default function FoodCard({ Food }) {
  const id = Food.id;
  const [imageError, setImageError] = useState(false);
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
      <div>
        {Food.price}$ {Food.rate}
      </div>
    </div>
  );
}
