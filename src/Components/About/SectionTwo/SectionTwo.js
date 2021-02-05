import React from 'react';
import {aboutSectionTwo} from "../../Context/Context";
import styles from "./SectionTwo.module.css";
import Grid from '@material-ui/core/Grid';
import animation from "../../Animations/Animations.module.css";

import {
    Link
  } from "react-router-dom";

function Third({click, setClick}) {
    return (
        <Grid justify="center" className={click ? null : animation.fadeInThree} xs={12} lg={12} md={12} container item>
            {aboutSectionTwo.map((item, index) => {
                     return (
                        <Grid item lg={11} md={12} xs={12} key={item.id} className={styles.sectionTwo}>
                            <div className={styles.content}>
                                <h2>{item.title}</h2>
                                <p>{item.text}</p>
                                <div className={styles.button}>
                                    <Link to="/contact">Contact Me</Link>
                                </div> 
                            </div>
                            <div className={styles.image}>
                                <img src={item.src} alt=""/>    
                            </div>
                        </Grid>
                    )
            })}
        </Grid>
    );
}

export default Third;