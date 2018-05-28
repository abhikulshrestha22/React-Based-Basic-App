import React,{Component} from 'react';
import {BrowserRouter as Router,Link} from 'react-router-dom';

import logo from '../images/logo.jpg'

class Navbar extends Component{

    constructor(props){
      super(props);
    }

    render(){

        const updateNav = (value)=>{
          
          if(this.props.currentPage===value){
            return "nav-item-custom nav-item  active"
          }
          else
            return "nav-item-custom nav-item" 
          
        }
        
        return(
            <nav className="navbar-custom container navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand-custom navbar-brand" href="#">
                  <img className="logo" src={logo} />
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                  
                  <ul className="navbar-nav ml-md-auto mt-2 mt-lg-0">
                    <li className={updateNav("home")}>
                      <Link  to="/home" className="nav-link" href="#">HOME<span className="sr-only">(current)</span></Link>
                    </li>
                    <li  className={updateNav("about")}>
                      <Link to="/about" className="nav-link" href="#">ABOUT</Link>
                    </li>
                    
                    <li className={updateNav("gallery")}>
                      <Link to="/gallery" className="nav-link" href="#">GALLERY</Link>
                    </li>
                    <li className={updateNav("help")}>
                    <Link to="/help" className="nav-link" href="#">HELP</Link>
                    </li>
                    <li className={updateNav("contact")}>
                    <Link to="/contact" className="nav-link" href="#">CONTACT</Link>
                    </li>
                    
                  </ul>
                  
                </div>
              </nav>
        );
    }
};

export default Navbar;