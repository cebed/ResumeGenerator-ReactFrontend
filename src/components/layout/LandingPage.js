import React, { Component } from 'react';

import Footer from "./footer"
import axios from 'axios';
import Login from "../UserManagement/Login";
import Header from "./header";

class LandingPage extends Component {


  render() {

    return (
        <landingpage>
            <Header/>

        <div className="head">

            <div>
                <h1>Front<span className="last-word">Edge</span><br/><span className="ittext">IT</span>  </h1>
            </div>
            <div className="parag">

                {
                   // <!--OBS-->
                    //call login component
                }
              <Login/>

            </div>
        </div>
        <Footer/>
        </landingpage>


      
    );
  }
}

export default LandingPage;
