import React, {FunctionComponent, useState} from "react"
import './footer.css'
// import Profile from "../../assets/profile.png"
// import {useGlobalStore} from "../../store/Context";
// import {BsLinkedin} from  "react-icons/bs"
// import {FaGithub} from "react-icons/fa"
// import {FiDribbble} from "react-icons/fi"


const Footer : FunctionComponent =()=>{
    // const { setActiveSection }= useGlobalStore()
    const [isToggled, setIsToggled]= useState(true)
    return(
        <footer>
            <div className={"footer__container"}>
                <h2>Footer</h2>
            </div>
        </footer>
    )
}

export default Footer
