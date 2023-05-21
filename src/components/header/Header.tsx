import React, {FunctionComponent, useState} from "react"
import {useNavigate} from "react-router-dom"
import './header.css'
import Button from "@mui/material/Button";
import {useUserContext} from "../../context/UserContext";
// import Profile from "../../assets/profile.png"
// import {useGlobalStore} from "../../store/Context";
// import {BsLinkedin} from  "react-icons/bs"
// import {FaGithub} from "react-icons/fa"
// import {FiDribbble} from "react-icons/fi"


const Header : FunctionComponent =()=>{
    const navigate = useNavigate()
    const {user, setUser, setIsLoggedIn} = useUserContext()
    const [activeSection, setActiveSection] = useState('home')

    // const { setActiveSection }= useGlobalStore()
    const [isToggled, setIsToggled]= useState(true)
    const [open, setOpen] = useState(false);

    console.log("User===>", user)


    const handleClick = () => {
        if(user){
            setUser(null)
            setIsLoggedIn(false)

            navigate("/")
        }else{
            navigate("/login")
        }


    };


    return(
        <header>
            <div className={"header__container"}>

                <div className={"me"}>

                    <Button variant="outlined" onClick={handleClick}>
                        {!user ? "Login": "Logout"}
                    </Button>

                    {/*<img src={Profile} alt={""} />*/}
                </div>
            </div>
        </header>
    )
}

export default Header
