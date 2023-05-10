import React, {FunctionComponent, useState} from "react"
import './header.css'
import Button from "@mui/material/Button";
// import Profile from "../../assets/profile.png"
// import {useGlobalStore} from "../../store/Context";
// import {BsLinkedin} from  "react-icons/bs"
// import {FaGithub} from "react-icons/fa"
// import {FiDribbble} from "react-icons/fi"


const Header : FunctionComponent =()=>{
    // const { setActiveSection }= useGlobalStore()
    const [isToggled, setIsToggled]= useState(true)
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    return(
        <header>
            <div className={"header__container"}>

                <div className={"me"}>

                    <Button variant="outlined" onClick={handleClickOpen}>
                        Open form dialog
                    </Button>

                    {/*<img src={Profile} alt={""} />*/}
                </div>
            </div>
        </header>
    )
}

export default Header
