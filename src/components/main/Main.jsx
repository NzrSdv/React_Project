"use client";

import { useGetPizzasQuery } from "@/app/store/ApiSlice";
import FoodList from "../foodList/FoodList";
import styles from "./Main.module.css"

export default function Main() {
    const {data,error,isLoading} = useGetPizzasQuery("pizzas");
    console.log(data,error,isLoading);
  return (
    <main className={styles.Main}>
      <section className={styles.Section}>
        <div className={`container ${styles.SectionContainer}`}>
            <h2 className="title">First Section</h2>
            <div className="">
                <FoodList FoodList={data}></FoodList>
            </div>
        </div>
      </section>
    </main>
  );
}
