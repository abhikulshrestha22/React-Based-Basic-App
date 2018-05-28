import React from 'react';
import '../styles/about.css';

class Help extends React.Component{

    constructor(props){
        super(props);
    }

    componentDidMount(){
        
        console.log(this.props);
        this.props.changeCurrentPage('help');
    }

    render(){
        return(
            <div className="about-div">
                <h1>Help Page</h1>
            </div>
        )
    }
}

export default Help;