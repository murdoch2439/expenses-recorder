import React, {FunctionComponent, useState} from "react"
import {  Box, Grid, Button } from "@mui/material";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import ErrandForm from "../../forms/errandForm/ErrandForm";
import {TransactionService} from "../../api/transactionManager";
import {currencyConverter} from "../../utils/currencyConverter";



interface FormValues {
    total_amount: number | string;
    date: string;
    operation_type: string;
}

const validationSchema = Yup.object({
    total_amount: Yup.number().required("This field is required"),
    date: Yup.string().required("This field is required"),
    operation_type: Yup.string().required("This field is required")
})

const initialValues ={
    total_amount: "",
    date: "",
    operation_type: ""
}




const FormsManager : FunctionComponent =()=>{
    const [activeStep, setActiveStep] = useState(0);
    const GetCurrentFormStep = ({step, stuff}:any) =>{
        switch(step){
            case 0:
                return <ErrandForm stuff={stuff} />
            default:
                throw new Error("Unknown step")
        }
    }
    return(
        <Box >
            <div style={{padding:"1rem 10rem"}}>
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={async (values, { setSubmitting })=>{
                        const transaction = {total_amount_usd :currencyConverter(values.total_amount), total_amount_cdf:values.total_amount, date: values.date, operation_type: values.operation_type, currency:"USD"}
                        const response = await TransactionService.addNewExpense(transaction)
                        console.log("response ===>",response.data)
                        setSubmitting(false);

                    }}
                >
                    {
                        ({values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting,})=>{
                            const stuff ={values, errors, touched, handleChange, handleBlur}

                            return(
                                <form onSubmit={handleSubmit}>
                                    <GetCurrentFormStep step={activeStep} stuff ={stuff} />
                                    <Grid style={{marginTop:"1rem"}}>
                                        <Button
                                            type={"submit"}
                                            style={{backgroundColor:`${isSubmitting ? "grey":"green"}`, width:"100%", color:"white", height:"3.4rem"}}>
                                            {isSubmitting ? "Saving...": "Save" }
                                        </Button >
                                    </Grid>
                                </form>
                            )
                        }
                    }
                </Formik>
                {/*<form>*/}

                {/*</form>*/}
            </div>


        </Box>
    )
}

export default FormsManager
