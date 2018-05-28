import React from 'react';

import {Link} from 'react-router-dom';
import imgA from '../images/a.jpg';

class Item2 extends React.Component{
    
    constructor(props){
        super(props);
    }

    componentDidMount(){
        console.log("in item2");
        console.log(this.props);

        this.props.changeCurrentItem('item2');
    }

    render(){
        return (
            <div>
                <h3>Item 2</h3>

            
            
            
            </div>
        )
    }
}

export default Item2;