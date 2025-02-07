"use client";
import Link from "next/link";
import Image from "next/image";
import styles from "./Header.module.css";
import Pizza from "../../../public/pizza_logo_dark.svg";
import { useDispatch, useSelector } from "react-redux";
export default function Header() {
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.Auth.isAuth);
  return (
    <header className={styles.Header}>
      <div className={`container ${styles.Header__container}`}>
        <Link className={styles.Logo} href="/">
          <Image
            fill
            src={Pizza}
            alt="pizza_icon"
            sizes="100vw"
            style={{
              width: "100%",
            }}
          ></Image>
        </Link>
        <nav className={styles.Navigation}>
          <ul>
            {isAuth && (
              <>
                <li>
                  <Link className={styles.Navigation__Link} href="/">
                    Меню
                  </Link>
                </li>
                <li>
                  <Link className={styles.Navigation__Link} href="/">
                    Корзина
                  </Link>
                </li>
                <li>
                  <Link className={styles.Navigation__Link} href="/">
                    Профиль
                  </Link>
                </li>
              </>
            )}
            {!isAuth && (
              <>
                <li>
                  <Link className={styles.Navigation__Link} href="/">
                    Вход
                  </Link>
                </li>
                <li>
                  <Link className={styles.Navigation__Link} href="/">
                    Регистрация
                  </Link>
                </li>
              </>
            )}
          </ul>
        </nav>
      </div>
      <script>{console.log(window.innerWidth)}</script>
    </header>
  );
}
