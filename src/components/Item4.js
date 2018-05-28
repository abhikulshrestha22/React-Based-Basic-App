import React from 'react';

import {Link} from 'react-router-dom';


class Item4 extends React.Component{

    constructor(props){
        super(props);
    }

    componentDidMount(){
        console.log("in item4");
        console.log(this.props);

        this.props.changeCurrentItem('item4');
    }


    render(){
        return (
            <div>
            <h1>Item 4</h1>
            

            
            
            
            </div>
        )
    }
}

export default Item4;