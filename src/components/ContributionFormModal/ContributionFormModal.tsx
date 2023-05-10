import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import FormManagerForContribution from "../formsManager/FormManagerForContribution";
import {useUserContext} from "../../context/UserContext";

export const ContributionFormModal=()=> {
    // const [open, setOpen] = React.useState(false);
    const {openFormModal, setOpenFormModal} = useUserContext()

    const handleClickOpen = () => {
        setOpenFormModal(true);
    };

    const handleClose = () => {
        setOpenFormModal(false);
    };

    return (
        <div>
            <div style={{display:"flex", alignItems:'center', justifyContent:"flex-end",}}>
                <Button variant="outlined" onClick={handleClickOpen}>
                    Add contribution
                </Button>
            </div>

            <Dialog open={openFormModal} onClose={handleClose}>
                {/*<DialogTitle>New Contribution</DialogTitle>*/}
                <DialogContent>
                    {/*<DialogContentText>*/}
                    {/*    Pay a monthly contribution for different projects*/}
                    {/*</DialogContentText>*/}
                    <FormManagerForContribution />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    {/*<Button onClick={handleClose}>Subscribe</Button>*/}
                </DialogActions>
            </Dialog>
        </div>
    );
}