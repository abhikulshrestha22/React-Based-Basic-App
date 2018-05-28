import React from 'react';

import {Link} from 'react-router-dom';
import imgA from '../images/a.jpg';

class Item3 extends React.Component{

    constructor(props){
        super(props);
    }

    componentDidMount(){
        console.log("in item3");
        console.log(this.props);

        this.props.changeCurrentItem('item3');
    }


    render(){
        return (
            <div>
            <h1>Item 3</h1>
            

            
            
            
            </div>
        )
    }
}

export default Item3;