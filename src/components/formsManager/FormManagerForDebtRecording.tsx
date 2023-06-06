import React, {FunctionComponent, useState} from "react"
import {  Box, Grid, Button } from "@mui/material";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
// import ErrandForm from "../../forms/errandForm/ErrandForm";
import {TransactionService} from "../../api/transactionManager";
import {currencyConverter} from "../../utils/currencyConverter";
import ContributionForm from "../../forms/contribution/ContributionForm";
import {useUserContext} from "../../context/UserContext";
import DebtForm from "../Debt/DebtForm";


interface FormValues {
    amount: number | string;
    date: string;
    debtor:string;
    currency: string;
    operation_type: string;
    comment: string;
}

const validationSchema = Yup.object({
    amount: Yup.number().required("This field is required"),
    date: Yup.string().required("This field is required"),
    debtor: Yup.string().required("This field is required"),
    currency: Yup.string().required("This field is required"),
    operation_type: Yup.string().required("This field is required"),
    comment: Yup.string()
})

const initialValues ={
    amount: "",
    date: "",
    debtor:"",
    currency: "",
    operation_type: "",
    comment:"",


}




const FormManagerForDebtRecording : FunctionComponent =()=>{
    const {setOpenFormModal, setIsEntrySuccess} = useUserContext()

    return(
        <Box >
            <div style={{padding:"1rem 3rem"}}>
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={async (values, { setSubmitting })=>{
                        const debtRecord = {amount :values.amount, currency:values.currency, date: values.date, operation_type: values.operation_type, debtor:values.debtor, comment:values.comment}
                        try{
                            // console.log("Debt record ===>",debtRecord)
                            const response = await TransactionService.addDebt(debtRecord)
                            values = initialValues
                            console.log("response ===>",response.data)
                            if(response.data.message === "success"){
                                setOpenFormModal(false)
                                setIsEntrySuccess(true)
                            }
                            setSubmitting(false);


                        }catch (error) {
                            setSubmitting(false);
                            values = initialValues
                            console.error("Error on recording a debt ===>", error)
                        }


                    }}
                >
                    {
                        ({values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting,})=>{
                            const stuff ={values, errors, touched, handleChange, handleBlur}

                            return(
                                <form onSubmit={handleSubmit}>
                                    <DebtForm stuff ={stuff} />
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
            </div>

        </Box>
    )
}

export default FormManagerForDebtRecording
