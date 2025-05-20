import React from "react";
import styles from "./styles.module.css";

type DefaultButtonProps = {
  propIcon: React.ReactNode;
  propColor?: "green" | "red";
} & React.ComponentProps<"button">;

export function DefaultButton({
  propIcon,
  propColor = "green",
  ...props
}: DefaultButtonProps) {
  return (
    <>
      <button className={`${styles.button} ${styles[propColor]}`} {...props}>
        {propIcon}
      </button>
    </>
  );
}
