import React, {FunctionComponent} from "react"
import TextInput from "../../components/textInput/TextInput";
import SelectInput from "../../components/selectInput/SelectInput";
import {  Grid,  Typography } from "@mui/material";
import {AMOUNT, CURRENCY, DATE, MEMBER, OPERATION_TYPE, } from "../../constants/variableNames";
import {operationType} from "../../utils/operationType";
import {currencies} from "../../utils/currencies";
import {dummyMembers} from "../../utils/members";
import {useUserContext} from "../../context/UserContext";
import {StandardSelectInput} from "../../components/selectInput/StandardSelectInput";

type props = {
    stuff?:any
}


const ContributionForm : FunctionComponent<props> =({stuff})=> {
    const {members} = useUserContext()

    return(
        <Grid>
            <Grid item   xs={12} style={{marginBottom:"1.5rem"}} >
                <Typography variant="h6">New contribution</Typography>
            </Grid>
            <Grid container spacing={2}>
                <SelectInput label={"Member"} dataList={members} stuff={stuff} name={MEMBER} />
                <StandardSelectInput label={"Action type"} dataList={operationType} stuff={stuff} name={OPERATION_TYPE} />
                <TextInput name={AMOUNT}  stuff={stuff} type={"number"} label={"Amount"} md={12} />
                <StandardSelectInput label={"Currency"} dataList={currencies} stuff={stuff} name={CURRENCY} />
                <TextInput name={DATE} stuff={stuff}  type={"date"}  />
            </Grid>
        </Grid>

    )
}

export default ContributionForm