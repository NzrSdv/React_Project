"use client";
import Header from "@/components/header/Header";
import SignForm from "@/components/signForm/SignForm";
import styles from "@/app/page.module.css";
export default function SignIn() {
  return (
    <div className={styles.Layout}>
      <Header />
      <div
        className="contianer"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <SignForm></SignForm>
      </div>
    </div>
  );
}
