import React, {Component} from 'react';
import ExperienceContainer from "./container/ExperienceContainer";
import AddExperience from "./pages/AddExperience";
import EditExperience from "./pages/EditExperience";
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import jwt_decode from "jwt-decode";

//import {ButtonToolbar, Button} from 'react-bootstrap';
import ResumeBoard from "./pages/ResumePage";
import Register from "./pages/Registration";
//THIS IMPORT ALLOWS US TO HOOK UP REACT WITH REDUX
//Provider is basically how we define the store that we are going to use for our APP
import { Provider } from "react-redux";
import store from "./store";
import setJWTToken from "./securityUtils/setJWTToken";
import {SET_CURRENT_USER} from "./actions/securityActions";
import Login from "./pages/Login";
import {logout} from "./actions/securityActions"
import Header from "./components/header";
import UpdateUser from "./components/UpdateUser";
import Footer from "./components/footer";
import CourseContainer from "./container/CourseContainer";
import AddCoursePage from "./pages/AddCoursePage";
import EditCoursePage from "./pages/EditCoursePage";
import EducationContainer from "./container/EducationContainer";
import AddEducationPage from "./pages/AddEducationPage";
import EditEducationPage from "./pages/EditEducationPage";
import pdf from "./pages/pdf";
import AddSkillsPage from "./pages/AddSkillsPage";
import EditSkillsPage from "./pages/EditSkillsPage";

import AddOthersPage from "./pages/AddOthersPage";
import EditOthersPage from "./pages/EditOthersPage";
import AddLanguagePage from "./pages/AddLanguagePage";
import EditLanguagePage from "./pages/EditLanguagePage";


//anledning till att vi sätter upp token här är för att varje gång vi refreshar sidan så vill vi alltid vara inloggade
//så länge som token existerar
//hämta token från vår localstorage, kolla om vår token finns där, om vår token finns där, then set it så vi inte förlorar inloggning
const jwtToken = localStorage.jwtToken;

if (jwtToken) {
    setJWTToken(jwtToken);
    const decoded_jwtToken = jwt_decode(jwtToken);
    //put it back to our state
    store.dispatch({
        type: SET_CURRENT_USER,
        payload: decoded_jwtToken
    });

    const currentTime = Date.now() / 1000;
    //exp comes from the token when we inspect in redux devtool for expirationtime
    if (decoded_jwtToken.exp < currentTime) {
        //handle log out
        store.dispatch(logout());
        window.location.href = "/";
    }

}

class App extends Component {
    render() {
        return (
            <Provider store={store}>

            <Router>
            <div className="App">

                <Header/>

                {
                    //Public Routes
                }
                <Route exact path="/" component={Login} />
                <Route exact path="/Register" component={Register}/>
                <Route exact path="/ExperienceContainer" component={ExperienceContainer} />
                <Route exact path="/AddExperience" component={AddExperience} />
                <Route exact path="/EditExperience/:id" component={EditExperience} />
                <Route exact path="/CourseContainer" component={CourseContainer} />
                <Route exact path="/AddCoursePage" component={AddCoursePage} />
                <Route exact path="/EditCoursePage/:id" component={EditCoursePage} />
                <Route exact path="/EducationContainer" component={EducationContainer} />
                <Route exact path="/AddEducationPage" component={AddEducationPage} />
                <Route exact path="/EditEducationPage/:id" component={EditEducationPage} />
                <Route exact path="/AddSkillsPage" component={AddSkillsPage} />
                <Route exact path="/EditSkillsPage/:id" component={EditSkillsPage} />
                <Route exact path="/pdf" component={pdf} />
                <Route exact path="/AddOthersPage" component={AddOthersPage} />
                <Route exact path="/EditOthersPage/:id" component={EditOthersPage} />
                <Route exact path="/AddLanguagePage" component={AddLanguagePage} />
                <Route exact path="/EditLanguagePage/:id" component={EditLanguagePage} />



                {
                    //Private Routes
                }
                    <Route exact path="/ResumeBoard/:id" component={ResumeBoard} />
                    <Route exact path="/updateUser/:id" component={UpdateUser} />

                <Footer/>



            </div>
            </Router>
            </Provider>
        );
    }
}

export default App;
