import React, { Component } from 'react';

import Footer from "./footer"
import axios from 'axios';
import Login from "../Login";

class LandingPage extends Component {


  render() {

    return (
        <landingpage>


        <div className="head">

            <div>
                <h1>Front<span className="last-word">Edge</span><br/><span className="ittext">IT</span><br/> Resumes </h1>
            </div>
            <div className="parag">
              <p> Do you want to generate your resume? Or do you want to view your CV and maybe download it? <br/>Let's go!</p>

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
