import React, {FunctionComponent} from "react"
import TextInput from "../../components/textInput/TextInput";
import SelectInput from "../../components/selectInput/SelectInput";
import {  Grid,  Typography } from "@mui/material";
import {DATE, OPERATION_TYPE, TOTAL_AMOUNT} from "../../constants/variableNames";

type props = {
    stuff?:any
}


const ErrandForm : FunctionComponent<props> =({stuff})=> {


    return(
        <Grid>
            <Grid item   xs={12} style={{marginBottom:"1.5rem"}} >
                <Typography variant="h6">New record</Typography>
            </Grid>
            <Grid container spacing={2} >
                <TextInput name={TOTAL_AMOUNT}  stuff={stuff} type={"number"} label={"Total amount"} md={12} />
                <TextInput name={DATE} stuff={stuff}  type={"date"}  />
                <SelectInput label={"Action type"} stuff={stuff} name={OPERATION_TYPE} />
            </Grid>
        </Grid>

    )
}

export default ErrandForm
