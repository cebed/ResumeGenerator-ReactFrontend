import React, { Component } from 'react';
import {Link} from "react-router-dom";


class Footer extends Component {

  render() {
    return (
     
      <footer>

          <ul>
              <li className="logo">20<span>19</span></li>
              <Link  to="/Experience">nur-workbench</Link>
          </ul>

      </footer>
      
    );
  }
}

export default Footer;
