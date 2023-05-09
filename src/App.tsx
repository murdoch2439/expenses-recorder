import React, {useState} from 'react';
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
import {LoginComponent} from "./components/Authentication/LoginComponent";
import {MyUserContext, userType} from "./context/UserContext";
import {SummaryCard} from "./components/SummaryCard/SummaryCard";
import {CardsContainer} from "./components/SummaryCard/CardsContainer";
import {Table} from "./components/dataTable/Table";


function App() {
    const [isLoggedIn,setIsLoggedIn] = useState<boolean>(false)
    const [user,setUser] = useState<userType>({username:"", password:""})
  return (
            <MyUserContext.Provider value={{isLoggedIn,user, setIsLoggedIn, setUser}}>


            <MyContainer>

                {
                    isLoggedIn ?

                        <Container maxWidth="lg">
                            <div className="App">
                                <Box>
                                    <Paper style={{backgroundColor:"white", height:"25rem"}} >
                                        {/*<FormsManager />*/}
                                        <CardsContainer />

                                        <Table />
                                        {/*<FormManagerForContribution />*/}
                                    </Paper>
                                </Box>

                            </div>
                        </Container>

                        :
                        <LoginComponent />

                }

            </MyContainer>

            </MyUserContext.Provider>

  );
}

export default App;
