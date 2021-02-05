import React from 'react';
import styles from "./About.module.css";
import animation from "../Animations/Animations.module.css";
import SectionTwo from "./SectionTwo/SectionTwo";
import SectionOne from "./SectionOne/SectionOne";
import Grid from '@material-ui/core/Grid';

function About({click, setClick}) {

    return (
    <div className={styles.container}>
        <Grid xs={11} lg={9} md={11} container item id={styles.about}>
            <div className={styles.title}>
                <h1 className={click ? null : animation.fadeInOne}>About Us</h1>
            </div>
            <div className={styles.content}>
                <SectionOne/>
                <SectionTwo/>
            </div> 
        </Grid>
    </div>    
    );
}

export default About;