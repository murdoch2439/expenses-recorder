import React from 'react';
import './App.css';
import { ThemeProvider } from '@mui/material/styles';
import theme from "./components/themes/theme";
import { makeStyles, } from '@mui/material/styles';
import MyContainer from "./container/Container";
import { Container,  Paper, Box, Grid, FormControl, TextField, MenuItem } from "@mui/material";
import TextInput from "./components/textInput/TextInput";
import FormsManager from "./components/formsManager/FormsManager";
import {StateProvider} from "./context";
import FormManagerForContribution from "./components/formsManager/FormManagerForContribution";


function App() {
  return (
            <MyContainer>
                <Container maxWidth="md">
                    <div className="App">
                        <Box>
                            <Paper style={{backgroundColor:"white", height:"25rem"}} >
                                {/*<FormsManager />*/}
                                <FormManagerForContribution />
                            </Paper>
                        </Box>

                    </div>
                </Container>
            </MyContainer>

  );
}

export default App;
