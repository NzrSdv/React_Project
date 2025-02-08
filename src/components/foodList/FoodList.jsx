'use client';
import FoodCard from "../foodCard/FoodCard";
import styles from "./FoodList.module.css";
export default function FoodList({FoodList}) {
  return <div className={styles.FoodList}>
    {FoodList?.map(Food => (<FoodCard key={Food.id} Food={Food}/>))}
  </div>;
}
