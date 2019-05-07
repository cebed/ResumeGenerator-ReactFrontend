import React, { Component } from 'react';

import { LinkedIn } from './LinkedIn';
import axios from "axios";
import {BASE_URL} from "../Utils/environment";

class LinkedInPage extends Component {
  state = {
    code: '',
    errorMessage: '',
  };


  handleSuccess = (data) => {
    this.setState({
      code: data.code,
      errorMessage: '',
    });
  }

  handleFailure = (error) => {
    this.setState({
      code: '',
      errorMessage: error.errorMessage,
    });
  }
  render() {
    const { code, errorMessage } = this.state;
    const acess_token =axios.get(`https://www.linkedin.com/oauth/v2/accessToken?grant_type=authorization_code&client_id=77qotdylyj8n1b&client_secret=GPs0Wd3IYtFChqac&redirect_uri=http://localhost:3000/linkedin&code=${code}`);
    return (
      <div>
        <LinkedIn
          clientId="77qotdylyj8n1b"
          redirectUri={`${window.location.origin}/linkedin`}
          scope="r_emailaddress r_liteprofile w_member_social "
          state="34232423"
          onFailure={this.handleFailure}
          onSuccess={this.handleSuccess}
        >
          <img src={require('../images/linkedin.png')} alt="Connect to Linked In" style={{ maxWidth: '180px' }} />
        </LinkedIn>
        {!code && <div>connection to Linkedin Under construction</div>}
        {code && <div>connection to Linkedin Under construction {/*code*/} </div>}
        {errorMessage && <div>{errorMessage}</div>}
      </div>
    );
  }
}

export default LinkedInPage;
