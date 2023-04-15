import React, {FunctionComponent} from "react";
import {Grid,Typography, TextField, FormControl, MenuItem,  } from '@mui/material';
import {expenseType} from "../../utils/expenseType";

type props = {
    label?:string,
    stuff?:any,
    name?:any
}

const SelectInput : FunctionComponent<props> =({ label, stuff, name})=>{
    return(

            <Grid item xs={12} sm={12} md={6}>
                <FormControl fullWidth>
                    <TextField
                        name={name}
                        variant="outlined"
                        select
                        required
                        label={label}
                        onChange={stuff.handleChange}
                        onBlur={stuff.handleBlur}
                        value={stuff.values[name]}
                        error={(stuff.touched[name] && stuff.errors[name]) && true}
                        helperText={stuff.errors[name] && stuff.touched[name] && stuff.errors[name]}

                    >
                        {expenseType.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                </FormControl>
            </Grid>
    )
}

export default SelectInput
