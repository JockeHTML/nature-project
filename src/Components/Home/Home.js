import React from 'react';
import styles from "./Home.module.css";
import animation from "../Animations/Animations.module.css";

import {
    Link
  } from "react-router-dom";

function Home({click, setClick}) {

    return (
            <div className={styles.home}>
                <div className={click ? null : animation.fadeInThree} id={styles.title}>
                    <h1 >Welcome to homepage</h1>
                    <h2>Si doloremque sequi?</h2>
                    <div className={styles.button}>
                        <Link to="about">Learn More</Link>
                    </div>
                </div>
            </div>             
    );
}

export default Home;