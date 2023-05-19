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
import {CardsContainer} from "./components/SummaryCard/CardsContainer";
import {Table} from "./components/dataTable/Table";
import {HomePage} from "./pages/homePage/HomePage";


function App() {
    const [isLoggedIn,setIsLoggedIn] = useState<boolean>(false)
    const [openFormModal,setOpenFormModal] = useState<boolean>(false)
    const [user,setUser] = useState<userType>({username:"", password:""})
    const [information,setInformation] = useState([])
    const [members,setMembers] = useState([])
  return (
            <MyUserContext.Provider value={{isLoggedIn,user, information,openFormModal, members, setMembers, setOpenFormModal, setInformation, setIsLoggedIn, setUser}}>


            <MyContainer>

                {
                    isLoggedIn ?

                        <Container maxWidth="lg">
                            <div className="App">
                                <HomePage />

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
