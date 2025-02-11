
'use client';
import styles from "./SearchFilter.module.css";
export default function SearchFilter({searchFood,setSearchFood,FilterFood,setFilteredFood}){
    return <div className={styles.InputWrap}>
        <input placeholder="Search" type="text" className={styles.SearchInput} value={searchFood != undefined || searchFood != null ? searchFood : ""} onChange={(e) => {setSearchFood(e.target.value)
            console.log(searchFood)
        }}/>
        <select value={FilterFood} onChange={(e) => {setFilteredFood(e.target.value)}}>
            <option value="name">По имени А-Я</option>
            <option value="dsc">По описанию А-Я</option>
            <option value="price">По цене (Уменьшение)</option>
            <option value="rate">По рейтингу (Уменьшение)</option>
        </select>
    </div>
}