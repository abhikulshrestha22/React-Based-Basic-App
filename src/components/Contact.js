import React from 'react';
import '../styles/about.css';

class Contact extends React.Component{

    constructor(props){
        super(props);
    }

    componentDidMount(){
        
        console.log(this.props);
        this.props.changeCurrentPage('contact');
    }

    render(){
        return(
            <div className="about-div">
                <h1>Contact Page</h1>
            </div>
        )
    }
}

export default Contact;