import React from 'react';
import '../styles/submenu.css';
import {Link} from 'react-router-dom';

class Submenu extends React.Component{

    constructor(props){
        super(props);
        console.log("in submenu");
        console.log(props);
    }

    render(){
        const updateNav = (value)=>{
          
            if(this.props.currentItem===value){
              return "nav-item-custom nav-item  active-submenu-item"
            }
            else
              return "nav-item-custom nav-item" 
            
          }
        return (
            <div className="text-center submenu-div">
                <b className="submenu-title">Submenu</b>
                <nav className="text-left navbar">
                    <ul className="submenu-nav navbar-nav">
                        <li className={updateNav('item1')}><Link to={`${this.props.url}/item1`}>Item 1</Link></li>
                        <li className={updateNav('item2')}><Link to={`${this.props.url}/item2`}>Item 2</Link></li>
                        <li className={updateNav('item3')}><Link to={`${this.props.url}/item3`}>Item 3</Link></li>
						<li className={updateNav('item4')}><Link to={`${this.props.url}/item4`}>Item 4</Link></li>
						
                    </ul>
                </nav>
            </div>
        )
    }

}

export default Submenu;