import React from 'react';
import Banner from './Banner';
import Content from './Content';

class Home extends React.Component{

    constructor(props){
        super(props);
    }

    componentDidMount(){
        console.log(this.props);
        this.props.changeCurrentPage('home');
    }

    render(){
        return(
            <div>
                <Banner/>
                <Content currentItem={this.props.currentItem} changeCurrentItem={this.props.changeCurrentItem} url={this.props.url}/>
            </div>
        )
    }
}

export default Home;