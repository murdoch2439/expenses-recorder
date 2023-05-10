import React, {FunctionComponent, useEffect} from "react";
import {Box, Paper} from "@mui/material";
import {CardsContainer} from "../../components/SummaryCard/CardsContainer";
import {Table} from "../../components/dataTable/Table";
import {useUserContext} from "../../context/UserContext";
import {TransactionService} from "../../api/transactionManager";

export const HomePage: FunctionComponent =()=>{
    const {setInformation} = useUserContext()

    const getData =async ()=>{
        const result = await TransactionService.getAllExpenses().then()
        setInformation(result.data)
        console.log(result)
    }

    useEffect(()=>{
        getData().then()
    },[])
    return(
        <Box>
            <Paper style={{backgroundColor:"white", }} >
                {/*<FormsManager />*/}
                <CardsContainer />

                <div style={{paddingTop:"3rem"}}>
                    <Table />
                </div>


                {/*<FormManagerForContribution />*/}
            </Paper>
        </Box>
    )
}