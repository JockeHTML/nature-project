import React from 'react';
import {aboutSectionOne} from "../../Context/Context";
import styles from "./SectionOne.module.css";
import Grid from '@material-ui/core/Grid';
import animation from "../../Animations/Animations.module.css";

import {
    Link
  } from "react-router-dom";

function SectionOne({click, setClick}) {
    return (
        <Grid justify="center" xs={12} lg={12} md={12} id={styles.containerOne} className={click ? null : animation.fadeInThree} container item>
            {aboutSectionOne.map((item, index) => {
                     return (
                        <Grid item lg={11} md={12} xs={12} key={item.id} className={styles.sectionOne}>
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

export default SectionOne;