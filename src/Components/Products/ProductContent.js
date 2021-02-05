import React from 'react';
import {productContext} from "../Context/Context";
import styles from "./ProductContent.module.css";
import Grid from '@material-ui/core/Grid';
import animation from "../Animations/Animations.module.css";

import {
    Link
} from "react-router-dom";

function ProductContent ({click, setClick}) {
    return (
        <Grid lg={9} md={11} xs={11} container item id={styles.container}>
            <div className={styles.title}>
                <h1 className={click ? null : animation.fadeInOne}>Products</h1>
                <h2 className={click ? null : animation.fadeInOne}>Adipisicing elit. Facere, suscipit?</h2>
            </div>
            <div className={click ? null : animation.fadeInThree} id={styles.productContent}>
            {productContext.map((item, index) => {
                return (
                <Grid key={index} lg={3} md={4} xs={12} item className={styles.content}>
                        <div  className={styles.iconWrapper}>
                            <i style={{ color: item.color }}className={item.icon}></i>
                        </div>
                    <h2>{item.title}</h2>
                    <p>{item.text}</p>
                </Grid>
                )
            })}
            </div>
            <div className={styles.button}>
                <Link to="/contact">Contact Me</Link>
            </div> 
        </Grid>
    );
}

export default ProductContent;