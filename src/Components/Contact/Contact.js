import React from 'react';
import styles from "./Contact.module.css";
import Grid from '@material-ui/core/Grid';
import {contactContext} from "../Context/Context";
import animation from "../Animations/Animations.module.css";

function Contact({click, setClick}) {

    return (
        <div className={styles.container}>
                <Grid xs={11} lg={9} md={11} container item className={styles.contact}>
                    <div className={styles.title}>
                        <h1 className={click ? null : animation.fadeInOne}>Contact Us</h1>
                        <h2 className={click ? null : animation.fadeInThree}>Reach us through social media!</h2>
                    </div>
                    <div className={styles.content}>
                        {contactContext.map((item, index) => {
                            return (
                            <Grid key={index} className={click ? null : animation.fadeInThree} style={{backgroundColor: item.color }} item id={styles.box}>
                                <a rel="noreferrer" target="_blank" href={item.url}><i className={item.icon}></i></a>
                                <h2 className={click ? null : animation.fadeInThree}>{item.text}</h2>
                            </Grid>
                            )
                        })}   
                    </div> 
                    <Grid className={click ? null : animation.fadeInThree} xs={12} lg={8} item id={styles.form}>
                        <div className={styles.title}>
                            <h2>...Or write a email to us here!</h2>
                        </div>
                        <form action="submit">
                            <div className={styles.name}>
                                <input placeholder="Name" type="text"/>
                                <input placeholder="Subject" type="text"/>
                            </div>
                            <div className={styles.email}>
                                <textarea placeholder="Your message" name="" id="" cols="30" rows="10"></textarea>
                            </div>
                        <div className={styles.button}>
                            <button>Submit</button>
                        </div>
                        </form>
                   
                    </Grid>
                    
                </Grid>
        </div>
    );
}

export default Contact;