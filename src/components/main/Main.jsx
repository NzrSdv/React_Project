"use client";

import { useGetPizzasQuery } from "@/app/store/ApiSlice";
import FoodList from "../foodList/FoodList";
import styles from "./Main.module.css";
import Loader from "@/UI/Loader/Loader";
import { useSearchAndFilter } from "@/hooks/useSearchAndFilter";
import { useState } from "react";
import SearchFilter from "../searchFilter/SearchFilter";

export default function Main() {
  const { data, error, isLoading } = useGetPizzasQuery("pizzas");
  const [searchFood, setSearchFood] = useState("");
  const [filterFood, setFilterFood] = useState("name");
  const SAndF = useSearchAndFilter(searchFood, filterFood, data);
  return (
    <main className={styles.Main}>
      <section className={styles.Section}>
        <div className={`container ${styles.SectionContainer}`}>
          <div className={styles.UpperRow}>
            <h2 className="title">Menu</h2>
            <SearchFilter
              searchFood={searchFood}
              setSearchFood={setSearchFood}
              setFilteredFood={setFilterFood}
              FilterFood={filterFood}
            />
          </div>
          <div className={styles.BottomSec}>
            {!isLoading && <FoodList FoodList={SAndF}/>}
            {isLoading && <Loader/>}
          </div>
        </div>
      </section>
    </main>
  );
}
