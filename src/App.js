import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Home from './components/Home';
import About from './components/About';
import Gallery from './components/Gallery';
import Help from './components/Help';
import Contact from './components/Contact';
import Footer from './components/Footer';
import {BrowserRouter as Router,Route,Redirect,Switch} from 'react-router-dom';

class App extends Component {

  constructor(props){
    super(props)

    this.state={
      currentPage:'home',
      currentItem:'item1'
    }

    this.changeCurrentPage = this.changeCurrentPage.bind(this);
    this.changeCurrentItem = this.changeCurrentItem.bind(this);

    
  }

  changeCurrentPage =(page)=>{
    this.setState({currentPage:page});
  }

  changeCurrentItem=(item)=>{
    this.setState({currentItem:item});
  }

  

  render() {
    return (
      <Router>
        <div>
          <Navbar currentPage={this.state.currentPage}/>
          
          <Switch>
          <Redirect exact from='/' to='/home'/>
          <Route  path="/home" render={()=><Home url="/home" currentItem={this.state.currentItem} changeCurrentItem={this.changeCurrentItem} changeCurrentPage={this.changeCurrentPage} />}  />
          <Route  path="/about" render={()=><About changeCurrentPage={this.changeCurrentPage} />}/>
          <Route  path="/gallery" render={()=><Gallery changeCurrentPage={this.changeCurrentPage} />}/>
          <Route  path="/help" render={()=><Help changeCurrentPage={this.changeCurrentPage} />}/>
          <Route  path="/contact" render={()=><Contact changeCurrentPage={this.changeCurrentPage} />}/>
          </Switch>
          <Footer/>
        </div>
      </Router>
      
      
    );
  }
}

export default App;
