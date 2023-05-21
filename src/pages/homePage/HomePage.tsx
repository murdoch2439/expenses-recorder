import React, {FunctionComponent, useEffect, useState, forwardRef, SyntheticEvent} from "react";
import  { Box, Paper, AlertTitle, Slide, Snackbar, Button} from "@mui/material";
import {CardsContainer} from "../../components/SummaryCard/CardsContainer";
import {Table} from "../../components/dataTable/Table";
import {useUserContext} from "../../context/UserContext";
import {TransactionService} from "../../api/transactionManager";
import {ContributionFormModal} from "../../components/ContributionFormModal/ContributionFormModal";
import MuiAlert, { AlertProps } from '@mui/material/Alert';

const Alert = forwardRef<HTMLDivElement, AlertProps>(function Alert(
    props,
    ref,
) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export const HomePage: FunctionComponent =()=>{
    const [checked, setChecked] = useState(true);
    const {setInformation, setMembers, isLoggedIn, isEntrySuccess, setIsEntrySuccess} = useUserContext()


    const handleClose = (event?: SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }

        setIsEntrySuccess(false);
    };


    const getData =async ()=>{
        try{
            const result = await TransactionService.getAllExpenses()
            const allMembers = await TransactionService.getAllMembers()
            setInformation(result.data)
            setMembers(allMembers.data.members)
            console.log(result.data)
            console.log(allMembers.data.members)
        }catch (e) {
            console.error("error on getting data ===>", e)
        }

    }

    useEffect(()=>{
        getData().then()
    },[])
    return(
        <Box>
            <Paper style={{backgroundColor:"white", padding:"1rem 2rem" }} >

                <Snackbar style={{left:108}} open={isEntrySuccess} autoHideDuration={6000} onClose={handleClose}>
                        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                            {/*<AlertTitle>Success</AlertTitle>*/}
                            The contribution has been recorded successfully!
                            {/*<strong>The contribution has been recorded successfully!</strong>*/}
                        </Alert>
                </Snackbar>



                {/*<FormsManager />*/}


                <div style={{paddingTop:"3rem"}}>
                    <CardsContainer />
                </div>

                <div style={{paddingTop:"3rem"}}>
                    {
                        isLoggedIn && <ContributionFormModal />
                    }

                </div>
                <div style={{paddingTop:"2rem"}}>
                    <Table />
                </div>

                {/*<FormManagerForContribution />*/}
            </Paper>
        </Box>
    )
}