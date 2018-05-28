import React from 'react';
import '../styles/about.css';

class About extends React.Component{

    constructor(props){
        super(props);
    }

    componentDidMount(){
        console.log("about also mounted");
        console.log(this.props);
        this.props.changeCurrentPage('about');
    }

    render(){
        return(
            <div className="about-div">
                <h1>About Page</h1>
            </div>
        )
    }
}

export default About;