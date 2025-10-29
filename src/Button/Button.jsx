import React from "react";
import styles from "./button.module.css"
const Button =  ({value}) => {
    return (
        <span>
            <button className={styles.main}>{value}</button>
        </span>
    )
}
export default Button