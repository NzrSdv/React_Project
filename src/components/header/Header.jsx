"use client";
import Link from "next/link";
import Image from "next/image";
import styles from "./Header.module.css";
import Pizza from "../../../public/pizza_logo_accent.svg";
import SignUp from "../../../public/person_fill.svg";
import SignIn from "../../../public/person_nfill.svg";
import Profile from "../../../public/profile_fill.svg"
import Cart from "../../../public/cart_icon.svg";
import Menu from "../../../public/menu_icon.svg";

import { useDispatch, useSelector } from "react-redux";
export default function Header() {
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
                    <p>Меню</p>
                    <Image
                      sizes="100vw"
                      style={{
                        width: "100%",
                        height:"auto"

                      }}
                      alt="Menu"
                      src={Menu}
                      className={styles.mobileIcon}
                    ></Image>
                  </Link>
                </li>
                <li>
                  <Link className={styles.Navigation__Link} href="/">
                    <p>Корзина</p>
                    <Image
                      sizes="100vw"
                      style={{
                        width: "100%",
                        height:"auto"

                      }}
                      alt="Cart"
                      src={Cart}
                      className={styles.mobileIcon}
                    ></Image>
                  </Link>
                </li>
                <li>
                  <Link className={styles.Navigation__Link} href="/">
                    <p>Профиль</p>
                    <Image
                      sizes="100vw"
                      style={{
                        width: "100%",
                        height:"auto"

                      }}
                      alt="Sign in"
                      src={Profile}
                      className={styles.mobileIcon}
                    ></Image>
                  </Link>
                </li>
              </>
            )}
            {!isAuth && (
              <>
                <li>
                  <Link className={styles.Navigation__Link} href="/">
                    <p>Вход</p>
                    <Image
                      sizes="100vw"
                      style={{
                        width: "100%",
                        height:"auto"

                      }}
                      alt="Sign in"
                      src={SignIn}
                      className={styles.mobileIcon}
                    ></Image>
                  </Link>
                </li>
                <li>
                  <Link className={styles.Navigation__Link} href="/">
                    <p>Регистрация</p>
                    <Image
                      sizes="100vw"
                      style={{
                        width: "100%",
                        height:"auto"
                      }}
                      alt="Sign up"
                      src={SignUp}
                      className={styles.mobileIcon}
                    ></Image>
                    
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
