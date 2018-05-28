import React from 'react';
import '../styles/profilebox.css';
import b from '../images/b.jpeg';
import c from '../images/c.jpeg';


class ProfileBox extends React.Component{
    render(){
        return(
            <div className="text-center profilebox">
                    <div>
                        <div className="col-lg-12 col-sm-12 col-12 profile-header">
                            <img className="fullheight" src={b}/>
                        </div>
                    </div>
                    <div className="row user-detail">
                        <div className="col-lg-12 col-sm-12 col-12">

                        
                            <img src={c} className="rounded-circle img-thumbnail"/>
                            <div className="row user-detail-inside ">
                                <div className="col-sm-4 offset-sm-1">
                                    <b>Name</b>
                                </div>

                                <div className="col-sm-6">
                                    Nomen Nescio
                                </div>
                            </div>
                            <div className="row text-left">
                                <div className="col-sm-4 offset-sm-1">
                                    <b>Email</b>
                                </div>

                                <div className="col-lg-6">
                                    a@b.com
                                </div>
                            </div>

                            <div className="row text-left">
                                <div className="col-lg-4 offset-sm-1">
                                    <b>Phone</b>
                                </div>

                                <div className="col-lg-6">
                                    +1234567890
                                </div>
                            </div>
                            
                        </div>
                    </div>
                    
        </div>
               
        )
    }
}

export default ProfileBox;