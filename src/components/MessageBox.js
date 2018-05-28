import React from 'react';
import '../styles/messagebox.css';


class MessageBox extends React.Component{

    constructor(props){
        super(props);

        this.state={
            subject:'',
            message:''
        };

        this.handleChangeMessage= this.handleChangeMessage.bind(this);
        this.handleChangeMessage=this.handleChangeMessage.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChangeSubject =(event)=>{
        this.setState({subject:event.target.value});

    }
    handleChangeMessage=(event)=>{
        this.setState({message:event.target.value});
        
    }

    handleSubmit=(event)=>{
        event.preventDefault();
        alert("Message sent. Subject is " + this.state.subject + ". Message is " + this.state.message);
    }

    render(){
        return (
            <div className=" text-center messagebox">
                <h3>Send a message</h3>
                <div className="row messageboxrow">
                    <div className="col-10 offset-1">
                    <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>Subject</label>
                        <input className="form-control" type="text" value={this.state.subject} onChange={this.handleChangeSubject}/> 
                        <label>Message</label> 
                        <textarea className="form-control" value={this.state.message} onChange={this.handleChangeMessage} type="text"/>
                    </div>
                    <input type="submit" value="Submit" className="btn btn-primary btn-block"/>
                    
                </form>
                    </div>
                
                </div>
                
                  
            </div>
             
        )
    }

}

export default MessageBox;