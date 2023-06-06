import React, {FunctionComponent, useState} from 'react';
import {Button, Container, Grid} from "@mui/material";
import  "./debtStyle.css"
import {useNavigate} from "react-router-dom"
import TextInput from "../textInput/TextInput";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import {currencyConverter} from "../../utils/currencyConverter";
import {TransactionService} from "../../api/transactionManager";
import {useUserContext} from "../../context/UserContext";
import FormManagerForDebtRecording from "../formsManager/FormManagerForDebtRecording";




export const DebtComponent: FunctionComponent=()=>{
    const navigate = useNavigate();

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    // const {login} = useUserContext();
    const handleClick = () => {
        navigate("/")

    };

    // const handleLogin = async (values:FormValues) => {
    //     try {
    //         setLoading(true);
    //         const response = await TransactionService.login(values.username, values.password);
    //         if (response.status === 200) {
    //             login(response.data);
    //             navigation.navigate("Home");
    //         } else {
    //             setError(response.data.message);
    //         }
    //     } catch (error) {
    //         setError(error.message);
    //     } finally {
    //         setLoading(false);
    //     }
    // }

    // const {setIsLoggedIn, setUser} = useUserContext()
    return(
        <Container maxWidth="md">
            <div className="debt__container">
                <div style={{display:"flex",alignItems:"center", justifyContent:"space-between"}}>
                    {/*<h1>Debt Recorder</h1>*/}
                    <Button variant="text" onClick={handleClick}>
                        Go back
                    </Button>
                </div>

                <div>

                    <FormManagerForDebtRecording />

                    {/*<form onSubmit={(e)=>{*/}
                    {/*    e.preventDefault()*/}
                    {/*    console.log("Your info", user)*/}
                    {/*}}>*/}
                    {/*    <div className={"splitter"}>*/}

                    {/*    </div>*/}
                    {/*    */}
                    {/*    <div className={"splitter"}>*/}
                    {/*        <Button*/}
                    {/*            type={"submit"}*/}
                    {/*            style={{backgroundColor:`${!user ? "grey":"green"}`, width:"100%", color:"white", height:"3.4rem"}}*/}
                    {/*        >*/}
                    {/*            /!*{isSubmitting ? "Saving...": "Save" }*!/*/}
                    {/*            Login*/}
                    {/*        </Button >*/}
                    {/*    </div>*/}
                    {/*</form>*/}
                </div>
            </div>

        </Container>
    )
}