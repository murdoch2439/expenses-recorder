import React, {FunctionComponent, useState} from 'react';
import {Button, Container, Grid} from "@mui/material";
import {useNavigate} from "react-router-dom"
import  "./loginStyle.css"
import TextInput from "../textInput/TextInput";
import TextInputWithoutFormik from "../textInput/TextInputWithoutFormik";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import {currencyConverter} from "../../utils/currencyConverter";
import {TransactionService} from "../../api/transactionManager";
import {useUserContext} from "../../context/UserContext";


interface FormValues {
    username:  string;
    password: string;
}

const validationSchema = Yup.object({
    username: Yup.string().required("This field is required"),
    password: Yup.string().required("This field is required"),
})

const initialValues:FormValues ={
    username: "",
    password: "",
}

const  CURRENT_PASSWORD = "1234"

export const LoginComponent: FunctionComponent=()=>{
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

    const {setIsLoggedIn} = useUserContext()
    return(
        <Container maxWidth="md">
            <div className="login__container">
                <div style={{display:"flex",alignItems:"center", justifyContent:"space-between"}}>
                    <h1>Login</h1>
                    <Button variant="text" onClick={handleClick}>
                        Go back
                    </Button>
                </div>

                <div>

                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={async (values, { setSubmitting })=>{
                            const user = {username :values.username, password:values.password, }
                            console.log("Trying to authenticate this user ===>",user)
                            if(user.password === CURRENT_PASSWORD){
                                setIsLoggedIn(true)
                                navigate("/")
                            }
                            // const response = await TransactionService.addNewExpense(transaction)
                            // console.log("response ===>",response.data)
                            setSubmitting(false);

                        }}
                    >
                        {
                            ({values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting,})=>{
                                const stuff ={values, errors, touched, handleChange, handleBlur}

                                return(
                                    <form onSubmit={handleSubmit}>
                                        <div className={"splitter"}>
                                        <TextInput stuff={stuff}  name={"username"} type={"text"} label={"Username"} onChange={handleChange}  />
                                        </div>
                                        <div className={"splitter"}>
                                            <TextInput stuff={stuff} name={"password"} type={"password"} label={"Password"}  onChange={handleChange}  />

                                        </div>

                                        <Grid style={{marginTop:"1rem"}}>
                                            <Button
                                                type={"submit"}
                                                style={{backgroundColor:`${isSubmitting ? "grey":"green"}`, width:"100%", color:"white", height:"3.4rem"}}>
                                                {isSubmitting ? "Saving...": "Login" }
                                            </Button >
                                        </Grid>
                                    </form>
                                )
                            }
                        }
                    </Formik>

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