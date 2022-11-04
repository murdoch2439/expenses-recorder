import React, {FunctionComponent, useState} from "react"
import './header.css'
// import Profile from "../../assets/profile.png"
// import {useGlobalStore} from "../../store/Context";
// import {BsLinkedin} from  "react-icons/bs"
// import {FaGithub} from "react-icons/fa"
// import {FiDribbble} from "react-icons/fi"


const Header : FunctionComponent =()=>{
    // const { setActiveSection }= useGlobalStore()
    const [isToggled, setIsToggled]= useState(true)
    return(
        <header>
            <div className={"header__container"}>

                <div className={"me"}>

                    {/*<img src={Profile} alt={""} />*/}
                </div>
            </div>
        </header>
    )
}

export default Header
