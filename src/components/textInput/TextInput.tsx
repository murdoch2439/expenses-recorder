import React, {FunctionComponent} from "react";
import {Grid,Typography, TextField, FormControl, MenuItem,  } from '@mui/material';
import { Formik, Form, Field, ErrorMessage } from 'formik';

type props = {
    type?: string,
    label?:string,
    placeholder?: string,
    md?:number,
    stuff?:any,
    name:string,
}

const TextInput : FunctionComponent<props> =({type, label, placeholder,md, name, stuff, })=>{
    return(

            <Grid item xs={12} sm={12} md={md?md:6}>
                <TextField
                    name={name}
                    onChange={stuff.handleChange}
                    onBlur={stuff.handleBlur}
                    value={stuff.values[name]}
                    label={label}
                    placeholder={placeholder}
                    type={type? type: "text"}
                    variant="outlined"
                    required
                    fullWidth
                    error={(stuff.touched[name] && stuff.errors[name]) && true}
                    helperText={stuff.errors[name] && stuff.touched[name] && stuff.errors[name]}
                />
            </Grid>

    )
}

export default TextInput
