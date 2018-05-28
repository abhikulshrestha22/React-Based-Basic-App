import React from 'react';
import SimpleMap from './Map';
import '../styles/mapbox.css'


class MapBox extends React.Component{

    render(){
        return (
            <div>
            <div className=" text-center mapbox">
            <h3>Or meet me at the office</h3>
            
            <SimpleMap/>
            <div className="text-left map-text">
            <p>ONE MIDTOWN<br/>
            11 Hoi Shing Road<br/>
            Teusn Wan</p>
            </div>
            

            </div>
                
            </div>
             
        )
    }
}

export default  MapBox;
