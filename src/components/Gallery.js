import React from 'react';
import '../styles/about.css';

class Gallery extends React.Component{

    constructor(props){
        super(props);
    }

    componentDidMount(){
        
        console.log(this.props);
        this.props.changeCurrentPage('gallery');
    }

    render(){
        return(
            <div className="about-div">
                <h1>Gallery Page</h1>
            </div>
        )
    }
}

export default Gallery;