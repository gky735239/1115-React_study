
import React,{Component} from 'react';
import Item from '../item/item'
import './list.css'

export default class List extends Component{
    constructor(props){
        super(props);
    }


    render(){
        let comments = this.props.comments;
        let display = comments.length === 0 ? 'block' : 'none';
        let lists = comments.map((comment, index) => {
            return <Item comment={comment} index={index} key={index} remove={this.props.remove}/>
        });
        return(
            <div className="col-md-8">
                <h3 className="reply">评论回复：</h3>
                <h2 style={{display:display}}>暂无评论，点击左侧添加评论！！！</h2>
                <ul className="list-group">
                    {lists}
                })

                </ul>
            </div>

        );
    }

}