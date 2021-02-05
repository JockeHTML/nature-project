import React, {useState} from 'react';
import styles from "./Menu.module.css";
import animation from "../Animations/Animations.module.css";
import {menuContext} from "../Context/Context";

import {
    Link
  } from "react-router-dom";

function Menu({click, setClick}) {

    const [ dropDownClick, setDropDownClick ] = useState(false);
    const [ changeIconColor, setChangeIconColor ] = useState(false);

    const handleChangeIconColor = () => {
        if (window.scrollY >= 100) {
            setChangeIconColor(true);
        } else {
            setChangeIconColor(false);
        }
    }

    window.addEventListener("scroll", handleChangeIconColor);

    const handleClick = () => {
        setClick(false);
        setDropDownClick(!dropDownClick);
    }

    return (
        <div className={styles.wrapper}>
         <div className={dropDownClick ? styles.dropdown : styles.hamburger}>
            <span className={ changeIconColor ? styles.scroll : styles.noScroll} onClick={() => setDropDownClick(!dropDownClick)}>
                {dropDownClick 
                ? <i className="fas fa-times"></i> 
                : <i class="fas fa-chevron-circle-down"></i> }
            </span> 
            <ul>
            {dropDownClick ? 
                menuContext.map((item, index) => {
                    return (
                    <li key={item.id} className={click ? null : animation.fadeInOne}>
                        <span>
                            <Link onClick={handleClick} to={item.href}>
                                <h3>{item.title}</h3>     
                            </Link>
                        </span>
                    </li>)})
            : null}
            </ul>
        </div>
        <div className={styles.links}>
            <ul>
                {menuContext.map((item, index) => {
                    return (
                    <li key={item.id} className={click ? null : animation.fadeInOne}>
                        <span>
                            <Link onClick={() => setClick(false)} to={item.href}>
                                <i className={item.icon}></i>
                            </Link>
                        </span>
                </li>)})}    
            </ul>
        </div>
    </div>
    );
}

export default Menu;
