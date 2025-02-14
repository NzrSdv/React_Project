"use client";
import FoodCard from "../foodCard/FoodCard";
import styles from "./FoodList.module.css";
export default function FoodList({ FoodList }) {
  return (
    <div className={styles.FoodList}>
      {FoodList?.length == 0 ? (
        <h2 className={`title ${styles.title}`}>Пусто</h2>
      ) : (
        FoodList?.map((Food) => <FoodCard key={Food.id} Food={Food} />)
      )}
    </div>
  );
}
