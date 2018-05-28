import React from 'react';
import imgA from '../images/a.jpg';
import imgB from '../images/b.jpeg';
import imgG from '../images/g.jpeg';
import imgE from '../images/e.jpeg';
import imgF from '../images/f.jpeg';


import Sidebar from './Sidebar';
import '../styles/Content.css';
import {BrowserRouter as Router,Route,Redirect,Switch} from 'react-router-dom';
import Item1 from './Item1';
import Item2 from './Item2';
import Item3 from './Item3';
import Item4 from './Item4';


class Content extends React.Component{

    constructor(props){
        super(props);
        console.log("the props are ");
        console.log(props);
    }

    render(){
        return (
            <div className="content-area container-fluid">


        <div className="row">
            
            <div className="col-7 offset-1 ">
            <Switch>
                <Redirect exact from='/home' to='/home/item1'/>
                <Route path={`${this.props.url}/item1`} render={()=><Item1 changeCurrentItem={this.props.changeCurrentItem} />}/>
                <Route path={`${this.props.url}/item2`}  render={()=><Item2 changeCurrentItem={this.props.changeCurrentItem}/>}/>
                <Route path={`${this.props.url}/item3`} render={()=><Item3 changeCurrentItem={this.props.changeCurrentItem} />}/>
                <Route path={`${this.props.url}/item4`}  render={()=><Item4 changeCurrentItem={this.props.changeCurrentItem}/>}/>
            
                </Switch>
                 </div>
                 <div className="col-3 ">
                <Sidebar currentItem={this.props.currentItem}  url={this.props.url}/>
                </div>  
            
        </div>
        <div class="container">
                <h3 className="lined-text">Related Articles</h3>
                <div className="article-container row">
                        <div className="col-md-4">
                            <div className="card">
                                    <img className="card-img-top" src={imgA} alt="Card image cap"/>
                                    <div class="card-body">
                                            <h3 className="card-title-custom card-title">
                                            Quis Nostrud Exercitation
                                            </h3>
                                            <p className="card-text">
                                            ullamco laboris nisi ut aliquip ex ea commodo consequat
                                            </p>
                                            
                                          </div>
                            </div>
                            
                        </div>
                        <div className="col-md-4">
                        <div className="card">
                        <img className="card-img-top" src={imgB} alt="Card image cap"/>
                        <div class="card-body">
                                <h3 className="card-title-custom card-title">
                                Excepteur Sint Occaecat
                                </h3>
                                <p className="card-text">
                                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
                                </p>
                                
                              </div>
                </div>
                        </div>
                        <div className="col-md-4">
                        <div className="card">
                        <img className="card-img-top" src={imgG} alt="Card image cap"/>
                        <div class="card-body">
                                <h3 className="card-title-custom card-title">
                                Nisi Ut Aliquid Ex Aa
                                </h3>
                                <p className="card-text">
                                Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur
                                </p>
                                
                              </div>
                </div>
                        </div>
                    </div>
                    <div className="article-container row">
                            <div className="col-md-4">
                            <div className="card">
                            <img className="card-img-top" src={imgE} alt="Card image cap"/>
                            <div class="card-body">
                                    <h3 className="card-title-custom card-title">
                                    Itaque Earum Rerum
                                    </h3>
                                    <p className="card-text">
                                    hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat
                                    </p>
                                    
                                  </div>
                    </div>
                                </div>
                                <div className="col-md-4">
                                <div className="card">
                                <img className="card-img-top" src={imgF} alt="Card image cap"/>
                                <div class="card-body">
                                        <h3 className="card-title-custom card-title">
                                        At Vero Eos Et
                                        </h3>
                                        <p className="card-text">
                                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                                        </p>
                                        
                                      </div>
                        </div>
                                </div>
                    </div>
        </div>
        
                
    </div>
        )
    }
}

export default Content;