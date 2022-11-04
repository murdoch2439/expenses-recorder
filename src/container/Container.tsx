import {FunctionComponent} from 'react'
import Header from "../components/header/Header"
import Footer from '../components/footer/Footer'
import "./container.css"

type props ={
    children:any
}

const Container: FunctionComponent<props>=({children})=>{
    return(
        <>
            <Header />
            <div className={"main__container"}>
                {children}
            </div>

            <Footer />
        </>
    )
}

export default Container
