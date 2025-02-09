"use client";

import { useGetPizzasQuery } from "@/app/store/ApiSlice";
import FoodList from "../foodList/FoodList";
import styles from "./Main.module.css"
import Loader from "@/UI/Loader/Loader";

export default function Main() {
    const {data,error,isLoading} = useGetPizzasQuery("pizzas");
  return (
    <main className={styles.Main}>
      <section className={styles.Section}>
        <div className={`container ${styles.SectionContainer}`}>
            <h2 className="title">Menu</h2>
            <div>
                {!isLoading && <FoodList FoodList={data}></FoodList>}
                {isLoading && <Loader></Loader>}
            </div>
        </div>
      </section>
    </main>
  );
}
