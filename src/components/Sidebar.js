import React from 'react';
import Submenu from './Submenu';
import ProfileBox from './ProfileBox';
import MessageBox from './MessageBox';
import MapBox from './MapBox';

class Sidebar extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        return (
            <div>
                <Submenu currentItem={this.props.currentItem} url={this.props.url} />
                <ProfileBox/> 
                <MessageBox/>
                <MapBox/>
            </div>
             
        )
    }

}

export default Sidebar;