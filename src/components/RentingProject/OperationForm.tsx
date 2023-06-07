import React, {FunctionComponent} from "react"
import TextInput from "../../components/textInput/TextInput";
import SelectInput from "../../components/selectInput/SelectInput";
import {  Grid,  Typography } from "@mui/material";
import {
    AMOUNT,
    COMMENT,
    CURRENCY,
    DATE,
    DEBTOR,
    MEMBER,
    OPERATION_MAKER,
    OPERATION_TYPE,
} from "../../constants/variableNames";
import {debts, operationType, projectOperations} from "../../utils/operationType";
import {currencies} from "../../utils/currencies";
import {dummyMembers} from "../../utils/members";
import {useUserContext} from "../../context/UserContext";
import {StandardSelectInput} from "../../components/selectInput/StandardSelectInput";
import TextInputArea from "../textInput/TextInputArea";

type props = {
    stuff?:any
}


const OperationForm : FunctionComponent<props> =({stuff})=> {
    // const {members} = useUserContext()

    return(
        <Grid>
            <Grid item   xs={12} style={{marginBottom:"1.5rem"}} >
                <Typography variant="h3">New Debt</Typography>
            </Grid>
            <Grid container spacing={2}>
                <TextInput name={OPERATION_MAKER}  stuff={stuff} type={"text"} label={"Performed by?"} md={12} />
                <TextInput name={AMOUNT}  stuff={stuff} type={"number"} label={"Amount"} md={12} />
                <StandardSelectInput label={"Action type"} dataList={projectOperations} stuff={stuff} name={OPERATION_TYPE} md={12} />
                <StandardSelectInput label={"Currency"} dataList={currencies} stuff={stuff} name={CURRENCY} />
                <TextInput name={DATE} stuff={stuff}  type={"date"}  />
                {/*<TextInputArea name={COMMENT} stuff={stuff}  />*/}
            </Grid>
        </Grid>

    )
}

export default OperationForm