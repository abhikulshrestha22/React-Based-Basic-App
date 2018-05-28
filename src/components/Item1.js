import React from 'react';

import {Link} from 'react-router-dom';
import imgI from '../images/i.jpeg';
import imgJ from '../images/j.jpeg';


class Item1 extends React.Component{

    constructor(props){
        super(props);
    }

    componentDidMount(){
        console.log("in item1");
        console.log(this.props);

        this.props.changeCurrentItem('item1');
    }


    render(){
        return (
            <div>
            <h1>Sed ut perspiciatis unde</h1>
            <p>omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, </p>
            <p>omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat. moUt enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?</p>
            
        
            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos \
            <span className="col-md-6 quote-span"><em>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and 
                demoralized by the charms of pleasure of the moment</em><br/>
                <span className="quote-name">-Jane Doe</span>
            </span>
            dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.
            Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.
        
        

            
            <h3 className="lined-text">More in the series</h3>
            <div  className="article-container row">
                    <div className="col-md-4">
                            <img src={imgI} alt="" />
                        </div>
                    <div className="col-md-8">
                        <h3>Quia Dolor Sit Amet</h3>
                        <p></p>Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur
                    </div>
            </div>
            <div className="article-container row">
                    <div className="col-md-4">
                            <img src={imgJ} alt="" />
                        </div>
                    <div className="col-md-8">
                        <h3>qui Dolorem Ipsum</h3>
                        <p>Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus</p>
                    </div>
            </div>

            
            
            
            </div>
        )
    }
}

export default Item1;