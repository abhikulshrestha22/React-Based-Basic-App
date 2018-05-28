import React from 'react';
import '../styles/footer.css';

class Footer extends React.Component{

    render(){
        return (
            <div className="container">
                    <div className="footer row text-center" >
                            <div className="col-md-4">
                                <h4>About us</h4>
                                <p>
                                Lorem ipsum<br/>ipsum<br/>
                                 dolor<br/> sit<br/> ame
                                </p>
                            </div>
                            <div className="col-md-4">
                                <h4>Legal</h4>
                                <p>
                                quae ab illo<br/>
                                inventore veritatis<br/>
                                et quasi
                                </p>
                            </div>
                            <div className="col-md-4">
                                <h4>Developers</h4>
                                <p>
                                architecto beatae<br/>
                                vitae dicta<br />
                                sunt explicabo<br/>
                                Nemo enim
                                </p>
                            </div>
                        </div>
            </div>
            
        )
    }
}

export default Footer;