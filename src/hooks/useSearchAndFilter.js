"use client";
import { useMemo } from "react";

export const useSearchAndFilter = (searchFood, selectedFood, Food) => {
  return useMemo(() => {
    let newFood = Food;
    // if (selectedFood ) {
    // newFood = newFood?.sort((a, b) => 
    //       a[selectedFood].localeCompare(b[selectedFood])
    //   );
    // }
    if (searchFood.length > 0) {
      newFood = Food.filter(
        (foodPiece) =>
          foodPiece.name.toLowerCase().includes(searchFood.toLowerCase()) ||
          foodPiece.dsc.toLowerCase().includes(searchFood.toLowerCase())
      );
    }
    return newFood;
  }, [searchFood, selectedFood, Food]);
};
