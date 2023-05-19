import React, {FunctionComponent, useEffect, useState} from "react";
import {Box, Paper, AlertTitle, Alert, Slide} from "@mui/material";

import {CardsContainer} from "../../components/SummaryCard/CardsContainer";
import {Table} from "../../components/dataTable/Table";
import {useUserContext} from "../../context/UserContext";
import {TransactionService} from "../../api/transactionManager";
import {ContributionFormModal} from "../../components/ContributionFormModal/ContributionFormModal";

export const HomePage: FunctionComponent =()=>{
    const {setInformation, setMembers} = useUserContext()
    const [checked, setChecked] = useState(true);

    useEffect(()=>{
        setTimeout(() => {setChecked(!checked)},3000)
    },[])

    const getData =async ()=>{
        const result = await TransactionService.getAllExpenses()
        const allMembers = await TransactionService.getAllMembers()
        setInformation(result.data)
        setMembers(allMembers.data.members)
        console.log(result.data)
        console.log(allMembers.data.members)
    }

    useEffect(()=>{
        getData().then()
    },[])
    return(
        <Box>
            <Paper style={{backgroundColor:"white", padding:"1rem 6rem" }} >

                <Slide direction="right" in={checked} mountOnEnter unmountOnExit>
                    <Alert severity="success">
                        <AlertTitle>Success</AlertTitle>
                        <strong>The contribution has been recorded successfully!</strong>
                    </Alert>

                </Slide>


                {/*<FormsManager />*/}

                <div style={{paddingTop:"3rem"}}>
                    <CardsContainer />
                </div>

                <div style={{paddingTop:"3rem"}}>
                    <ContributionFormModal />
                </div>
                <div style={{paddingTop:"2rem"}}>
                    <Table />
                </div>

                {/*<FormManagerForContribution />*/}
            </Paper>
        </Box>
    )
}